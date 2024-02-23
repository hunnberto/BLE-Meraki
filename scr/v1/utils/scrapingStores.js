import { gotScraping } from 'got-scraping';
import * as cheerio from 'cheerio';
import { selectStore } from './stores.js';



export const scraping = async(req, res) => {

    // Constante que almacena las url ´s de las categorias por deporte
    const categorySportsUrl = [];
    // Contante que almacena las url´s de listado de productos por categoria
    const detailProductsUrl = [];
    const errors = [];
    const results = [];

    //Seleccionar website
    const store = selectStore(req.params.store)

    //url base del sitio
    const WEBSITE_URL = store.webSideUrl;
    //console.log(WEBSITE_URL);

    // Se obtiene html del sitio base
    const response = await gotScraping(WEBSITE_URL);
    const html = response.body;
    const $ = cheerio.load(html);
    // Se indica que url´s se quieren buscar, en la primera interaccion serian las categorias que contienen los productos, este caso por deportes
    // const links = $(store.categorySports);
    const links = $(store.categorySports);


    // Se obtienen las url interando todos los resultados y se guarda la informacion
    // console.log("linsk de " + store.store)
    for (const link of links) {
        const relativeUrl = $(link).attr('href');
        const absoluteUrl = new URL(relativeUrl ?? "", WEBSITE_URL);
        categorySportsUrl.push({urlCat: absoluteUrl.href});
    }

    const urltest = [{urlCat: "https://www.decathlon.com.co/6162-precision"}]

    // se recorren las paginas de todas las categorias obtenidas para buscar el listado de productos de cada una
    for (const url of urltest) {
        // Obtener HTML
        const productResponse = await gotScraping(url.urlCat);
        const productHtml = productResponse.body;
        const $productPage = cheerio.load(productHtml);
        // calcular la cantidad de paginas totales por recorrer para iniciar loop
        const totalItems = Number($productPage(store.totalItems).text().trim().replace(/[^\w]/gi, ''));
        const articlesPerPage = $productPage(store.articlesPerPage).length;
        const totalPages =  Math.ceil( totalItems / articlesPerPage );
        // console.log(totalItems, " -- " ,articlesPerPage)
        // Variable con la URL a evaluar
        let evaluePage = url.urlCat;
        // Se raspan todas las paginas de la categoria actual
        // console.log(totalPages + " -- " + evaluePage)
        for (let i = 0; i < totalPages; i++) {
            // console.log("Pag " + i + " --> "  + evaluePage)
            //logica para recorrer todas las paginas
            if( evaluePage ){
                try {
                    // se obtiene html de todas las paginas encontradas anteriormente
                    const productResponse = await gotScraping(evaluePage);
                    const productHtml = productResponse.body;
                    const $productPage = cheerio.load(productHtml);
                    // Se indica que url´s se quieren buscar, en este caso el listado de productos de las categorias encontradas anteriormente 
                    const productPageTitle = $productPage(store.detailPage);
                    // Se obtienen las url de cada uno de los productos para la categoria actual
                    for (const link of productPageTitle) {
                        const relativeUrl = $(link).attr('href');
                        const absoluteUrl = new URL(relativeUrl ?? "", WEBSITE_URL);
                        detailProductsUrl.push({urlCat: absoluteUrl.href});
                    }
                    // Se busca la url de la siguiente pagina dentro de la pagina actual
                    evaluePage = $($productPage(store.nextPage)).attr('href') ?? "";
                } catch (error) {
                    console.log("1: " + error.message)
                    errors.push({ url: evaluePage, msg: error ?  error.message : "" });
                }
            }
        }
    }

    // console.log(detailProductsUrl.length)
    const totalproducts = detailProductsUrl.length
    let con = 1

    // en este punto ya se tienen las url's de todos los productos
    // Se recorren todas las url y se extrae la informacion de productos
    for (const url of detailProductsUrl) {
        // console.log(url.urlCat + " -----> " + con + " de " + totalproducts);
        try {
        // se obtiene html de todas las paginas de producto
        const productResponse = await gotScraping(url.urlCat);
        const productHtml = productResponse.body;
        const $productDetails = cheerio.load(productHtml);
        // se extrae la informacion del producto
        const title = $productDetails(store.title).text().trim();
        const price = $productDetails(store.price).text().trim();
        const trademark = $productDetails(store.trademark).text().trim() ?? store.trademark;
        const description = $productDetails(store.description).text().trim();
        // Se guarda la informacion de los productos
        results.push({
            store: store.store,
            title,
            price,
            trademark,
            description,
        });
        } catch (error) {
            console.log("2: " + error.message)
            errors.push({ url: url.urlCat, msg: error ?  error.message : "" });
        }
        con++;
    }

    return { results, errors }
}

export const insertTest = () => {

    const results = [];
    const errors = [];

    try {
        results.push({
            store: "adidas",
            title: "producto 1",
            price: "11000",
            trademark: "adidas",
            description: "el producto 1 es muy bueno",
        });
    } catch (error) {
        errors.push({ msg: error ?  error.msg : "" });
    }

    return { results, errors }
}
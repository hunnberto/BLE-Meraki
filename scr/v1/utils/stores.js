export const selectStore = (store) => {
    switch (store) {
        case "decathlon":
            return decathlon
            break;
    
        case "sportline":
            return sportline
            break;

        case "adidas":
            return adidas
            break;    
    }
}

const decathlon = {
    store: 'decathlon',
    webSideUrl: 'https://www.decathlon.com.co',
    categorySports: '.root-5 .normalized a',
    totalItems: '.ais-Stats-text strong',
    articlesPerPage: 'a.thumbnail.pb4',
    nextPage: 'a.next',
    detailPage: 'a.thumbnail.pb4',
    title: 'h1',
    price: 'span.price-text',
    trademark: 'h2.product-brand',
    description: 'div[id*="product-description"]'    
}

const sportline = {
    store: "sportline",
    webSideUrl: 'https://www.sportline.com.co',
    categorySports: '.nav-4.category-item .megamenu.level1 a.mm-category-title',
    totalItems: '#toolbar-amount > span:nth-child(3)',
    articlesPerPage: '.product-item-info a.photo',
    nextPage: 'a.action.next',
    detailPage: '.product-item-info a.photo',
    title: 'h1.page-title span',
    price: 'span.normal-price .price-final_price .price',
    trademark: 'div.__manufacturer strong',
    description: 'div[itemprop="description"]'    
}

const adidas = {
    store: "adidas",
    webSideUrl: 'https://www.adidas.co',
    categorySports: 'li:nth-child(2) > ul:nth-child(2) > li > a',
    totalItems: 'div[data-auto-id="plp-header-bar-products-count"]',
    articlesPerPage: 'div.grid-item div[data-auto-id="result-item-content"]',
    nextPage: 'a[data-auto-id="plp-pagination-next"]',
    detailPage: 'div.grid-item div[data-auto-id="result-item-content"] div[data-auto-id="glass-product-card"] > a',
    title: 'div.sidebar-wrapper___3uF26 h1[data-auto-id="product-title"] > span',
    price: 'div.sidebar-wrapper___3uF26 div.product-price___2Mip5.gl-vspace div[data-auto-id="gl-price-item"] > div.gl-price-item.notranslate:nth-child(1)',
    trademark: '',
    description: 'div.description___29WFI div.text-content___13aRm p.gl-vspace'
}


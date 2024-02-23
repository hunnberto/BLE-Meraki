//import { Request, Response } from "express";
import { gotScraping } from 'got-scraping';
import * as cheerio from 'cheerio';
import { ScrapingRepository } from '../repositories/scraping.Repository.js';
import { scraping, insertTest } from '../utils/scrapingStores.js';

// Constante que almacena las url ´s de las categorias por deporte
const categorySportsUrl = [];
// Contante que almacena las url´s de listado de productos por categoria
const detailProductsUrl = [];
const results = [];
const errors = [];

export class ScrapingService {

    static async getScrapingData(req, res){
        return await ScrapingRepository.getAll();
    }

    static async postScrapingData(req, res){

        const dataScraping = await scraping( req );
        // const dataScraping = insertTest();

        return await ScrapingRepository.created(dataScraping.results);
    }
}

import { NetworkRepository } from "../repositories/network.Repository.js"

export class NetworkService {


    static async getNetworkData(req, res){
        return await NetworkRepository.getAll();
    }

    static async postScrapingData(req, res){

        const dataScraping = await scraping( req );

        return await ScrapingRepository.created(dataScraping.results);
    }
}
// import { Request, Response } from "express";
import { ScrapingService } from "../services/scraping.Services.js";

export class ScrapingController {
    static async getScrapingData(req, res){
        try {
            const getScrapingData = await ScrapingService.getScrapingData()
            //res.send(getScrapingData)
            return res.status(200)
            .json(getScrapingData)
        } catch (error) {
            console.error( error )
            return res.status(400)
            .json({status: "error inesperado"})
        }
    }

    static async postScrapingData(req, res){
        try {
            await ScrapingService.postScrapingData(req, res)
            //res.send(postScrapingData)
            return res.status(200)
            .json({status: "data cargada"})
        } catch (error) {
            console.error( error )
            return res.status(400)
            .json({status: "error inesperado"})
        }
    }
}


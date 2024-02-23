// import { Request, Response } from "express";
import { ScrapingData } from "../models/ScrapingData.js";


export class ScrapingRepository {
    static async getAll(req, res){
        return await ScrapingData.findAll()
    }

    static async created(req, res){
        return await ScrapingData.bulkCreate(req);
    }
}


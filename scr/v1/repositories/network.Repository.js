
import {Networks} from "../models/NetworkData.js"

export class NetworkRepository {
    static async getAll(req, res){
        return await Networks.findAll()
    }
    
}


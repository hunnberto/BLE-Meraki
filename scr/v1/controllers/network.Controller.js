
import { NetworkService } from "../services/network.Services.js";

export class NetworkController {
    static async getNetworkData(req, res){
        try {
            const getNetworkData = await NetworkService.getNetworkData()
            return res.status(200)
            .json(getNetworkData)
        } catch (error) {
            console.error( error )
            return res.status(400)
            .json({status: "error inesperado"})
        }
    }
    
    
}


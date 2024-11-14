
import { LocationService } from "../services/Location.Services.js";

export class LocationController {
    static async getLocationData(req, res){
        try {
            const getLocationData = await LocationService.getLocationData()
            return res.status(200)
            .json(getLocationData)
        } catch (error) {
            console.error( error )
            return res.status(400)
            .json({status: "error inesperado"})
        }
    }
    
    static async
}


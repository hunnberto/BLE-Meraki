
import {Locations} from "../models/LocationData.js"

export class LocationRepository {
    static async getAll(req, res){
        return await Locations.findAll()
    }
    
}


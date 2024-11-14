
import { LocationRepository } from "../repositories/Location.Repository.js"

export class LocationService {


    static async getLocationData(req, res){
        return await LocationRepository.getAll();
    }

}
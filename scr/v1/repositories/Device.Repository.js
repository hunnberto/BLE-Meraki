
import {Devices} from "../models/DeviceData.js"

export class DeviceRepository {
    static async getAll(req, res){
        return await Devices.findAll()
    }
    static async create(data){
        return await Devices.create(
            {
                id_devices:data.id_devices,
                mac:data.mac,
                id_device_user: "Juan",
                manufacturer: data.manufacturer,
                joined: data.joined,
            })
    }
    
}


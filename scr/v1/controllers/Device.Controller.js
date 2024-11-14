
import { DeviceService } from "../services/Device.Services.js";

export class DeviceController {
    static async getDeviceData(req, res){
        try {
            const getDeviceData = await DeviceService.getDeviceData()
            return res.status(200)
            .json(getDeviceData)
        } catch (error) {
            console.error( error )
            return res.status(400)
            .json({status: "error inesperado"})
        }
    }
    
    static async postDeviceData(req, res){
        try {
            const postDeviceData = await DeviceService.getDataFromMeraki()
            return res.status(200)
            .json(postDeviceData)
        }catch (error) {
            console.error( error )
            return res.status(400)
            .json({status: "error inesperado"})
        }
    }
}


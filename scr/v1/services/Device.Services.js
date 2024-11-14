


import axios from 'axios';
import { DeviceRepository } from '../repositories/Device.Repository.js';

import { TableHints } from "sequelize";

export class DeviceService {

    static async getDeviceData(req, res){
        return await DeviceRepository.getAll();
    }

    static async getDataFromMeraki(req, res) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.meraki.com/api/v1/organizations/647955396387931123/networks/L_3659174697238528072/bluetoothClients',//COWHCARE
            headers: {
                'Authorization': 'Bearer 815e96ad2df08443575e1ca88f5806173d2f4d14',
            },
        };
    
        try {
            const response = await axios.request(config);
            console.log(JSON.stringify(response.data));
    
            // Filtra el dispositivo específico por su dirección MAC
            const specificDevice = response.data.find(device => device.mac === "48:a4:93:99:fd:b3");
    
            if (specificDevice) {
                // Extrae los campos necesarios del dispositivo específico
                console.log("Dispositivo encontrado");
                const data = {
                    id_devices: specificDevice.id, // 
                    mac: specificDevice.mac,
                    manufacturer: specificDevice.manufacturer,
                    deviceName: specificDevice.deviceName, // Asumiendo que el campo se llama deviceName
                    joined: true,
                };
                console.log(specificDevice.mac);
                // Crea un nuevo registro en la base de datos con los datos del dispositivo específico
                const createdDevice = await DeviceRepository.create(data);
                return createdDevice; // Puedes devolver o manejar este valor como necesites
            } else {
                
                // Maneja el caso en que el dispositivo específico no se encuentre
            }
        } catch (error) {
            console.error(error);
            // Manejo de errores...
        }
    }
}
    




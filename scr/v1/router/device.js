import { Router } from "express";
import { DeviceController } from "../controllers/Device.Controller.js";

const routes = Router();

routes.get("/", DeviceController.getDeviceData)

routes.post("/", DeviceController.postDeviceData)

export default routes
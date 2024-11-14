import { Router } from "express";
import { NetworkController } from "../controllers/network.Controller.js";

const routes = Router();

routes.get("/", NetworkController.getNetworkData)

export default routes
import { Router } from "express";
import network from "./network.js"
import  Location  from "./location.js";
import  Device  from "./device.js";
import Meraki from "./meraki.js"; // Importa el nuevo módulo de rutas de Meraki


const routes = Router();

routes.get("/test", (req, res) => {
    res.send("Api test Running")
});

routes.use("/network", network);

routes.use("/location", Location);

routes.use("/device", Device);

routes.use("/meraki", Meraki); // Utiliza el módulo de rutas de Meraki


export default routes;
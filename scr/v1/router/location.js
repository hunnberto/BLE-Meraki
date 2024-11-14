import { Router } from "express";
import { LocationController } from "../controllers/Location.Controller.js";

//import { ScrapingController } from "../controllers/scraping.Controller.js";

const routes = Router();

//routes.post("/:store", ScrapingController.postScrapingData)

//routes.get("/", ScrapingController.getScrapingData)

routes.get("/", LocationController.getLocationData)

export default routes
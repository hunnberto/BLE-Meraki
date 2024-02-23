import { Router } from "express";
import { ScrapingController } from "../controllers/scraping.Controller.js";

const routes = Router();


routes.post("/:store", ScrapingController.postScrapingData)
routes.get("/", ScrapingController.getScrapingData)

export default routes
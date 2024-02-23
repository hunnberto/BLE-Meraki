import { Router } from "express";
import scraping from "./scraping.js"

const routes = Router();

routes.get("/test", (req, res) => {
    res.send("Api test Running")
});

routes.use("/scraping", scraping);

export default routes;
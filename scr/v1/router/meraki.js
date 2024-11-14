import { Router } from "express";
import { MerakiController } from "../controllers/meraki.Controller.js";

const routes = Router();

routes.get("/", MerakiController.getMerakiData)

routes.post("/", MerakiController.postMerakiData)

export default routes;

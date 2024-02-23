import express from "express";
//const express = require('express')
import "dotenv/config";
//require('dot-env')
import routes from "./router/index.js"
import { sequelize } from "./db/config.js";


const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use("/v1/", routes)
app.listen(PORT, () => {
    console.log(`App is running on port http://localhost:${PORT}`)
})

sequelize.authenticate()
.then(() => {
    console.log('Connection to database has been established successfully.');
})
.catch((error) => {
    console.log('Unable to connect to the database:', error);
})

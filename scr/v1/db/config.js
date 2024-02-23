import { Sequelize } from "sequelize";
import "dotenv/config";

export const sequelize = new Sequelize({
    host: process.env.PG_HOST,
    username: process.env.PG_USER,
    port: Number(process.env.PG_PORT),
    password: process.env.PG_PASSWORD,
    database: process.env.DBNAME,
    dialect: "postgres"
})

/* sequelize
  .connect()
  .then(() => console.log(`connected`))
  .catch((err) => console.error("connection error", err.stack)); */
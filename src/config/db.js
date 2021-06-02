
import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';

const db = {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectModule: mysql2,
    logging: false,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
}

const sequelize = new Sequelize(
    db.database,
    db.username,
    db.password,
    {
        host: db.host,
        dialect: db.dialect,
        models: [__dirname + "/../models/"],
        logging: db.logging,
    }
);

export default sequelize;
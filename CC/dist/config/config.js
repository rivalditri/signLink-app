"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_1 = require("../models/user");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "signlink",
    logging: false,
    models: [user_1.User],
});
exports.default = connection;

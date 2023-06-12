import { Sequelize } from "sequelize-typescript";

import { User } from "../models/user";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "signlink",
  logging: false,
  models: [User],
});

export default connection;
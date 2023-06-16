import { Sequelize } from "sequelize-typescript";

import { User } from "../models/user";

const connection = new Sequelize({
  dialect: "mysql",
  host: "34.101.34.98",
  port: 3306,
  username: "signlink",
  password: "signlinkapp",
  database: "signlink",
  logging: false,
  models: [User],
});

export default connection;
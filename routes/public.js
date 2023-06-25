const express = require("express");
const publicController = require("../controller/public");
const routes = express.Router();

routes.get("/", publicController.getIndex);
routes.post("/", publicController.postCode);
routes.get("/theme", publicController.getIndex);
routes.post("/theme", publicController.postTheme);
module.exports = routes;

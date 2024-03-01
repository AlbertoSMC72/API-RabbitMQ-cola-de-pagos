"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dependencies_1 = require("./dependencies");
const orderRouter = (0, express_1.Router)();
orderRouter.post("/", dependencies_1.createOrderController.run.bind(dependencies_1.createOrderController));
exports.default = orderRouter;

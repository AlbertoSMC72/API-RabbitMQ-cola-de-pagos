"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_router_1 = __importDefault(require("../../../order/infraestructure/order.router"));
const prefijo = "/api";
const indexRouter = (0, express_1.Router)();
indexRouter.use(`${prefijo}/order`, order_router_1.default);
indexRouter.get(prefijo, (req, res) => {
    res.status(200).send("Hello World");
});
exports.default = indexRouter;

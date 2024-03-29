"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderController = void 0;
const sendMessage_service_1 = require("../../shared/broker/application/services/sendMessage.service");
const AmqpLib_1 = require("../../shared/broker/infraestructure/ports/AmqpLib");
const createOrder_service_1 = require("../application/services/createOrder.service");
const createOrder_controller_1 = require("./controllers/createOrder.controller");
const amqpLibPort = new AmqpLib_1.AmqpLibPort(`amqp://${process.env.PUERTORABBIT || "34.193.221.88"}`);
const sendMessageService = new sendMessage_service_1.SendMessageService(amqpLibPort);
const createOrderService = new createOrder_service_1.CreateOrderService(sendMessageService);
exports.createOrderController = new createOrder_controller_1.CreateOrderController(createOrderService);

import { SendMessageService } from "../../shared/broker/application/services/sendMessage.service";
import { AmqpLibPort } from "../../shared/broker/infraestructure/ports/AmqpLib";
import { CreateOrderService } from "../application/services/createOrder.service";
import { CreateOrderController } from "./controllers/createOrder.controller";

const amqpLibPort = new AmqpLibPort(`amqp://${process.env.PUERTORABBIT || "34.193.221.88"}`);

const sendMessageService = new SendMessageService(amqpLibPort);

const createOrderService = new CreateOrderService(sendMessageService);

export const createOrderController = new CreateOrderController(
  createOrderService
);

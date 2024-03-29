"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_router_1 = __importDefault(require("./src/shared/broker/infraestructure/index.router"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || "3000";
app.disable("x-powered-by");
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express_1.default.json());
app.use("/", index_router_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

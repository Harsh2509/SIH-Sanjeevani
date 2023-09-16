"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
(0, dotenv_1.config)();
const DB_LINK = process.env.DB_LINK || "mongodb://127.0.0.1:27017";
const PORT = process.env.PORT || 3000;
mongoose_1.default
    .connect(DB_LINK)
    .then(() => {
    console.log("Connection to DB established!");
    app.listen(3000, () => {
        console.log(`Listening at http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    console.log(`Error: {${err}}`);
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());

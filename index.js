"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.listen(PORT, () => {
    console.log(`[server]: Server is ru123nn12inewg at localhost:${PORT}`);
});
app.post("/post", (req, res) => {
    res.json({
        username: "123",
        password: "23122"
    });
});
app.get("/", (req, res) => {
    res.send("Hello World!");
});

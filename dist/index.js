"use strict";
// const express = require('express');
// const app = express();
// app.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = 5000;
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        body: {
            data: 'json data'
        }
    });
});
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

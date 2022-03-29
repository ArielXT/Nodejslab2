import express from "express";
import network from "./network.js";

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", network);
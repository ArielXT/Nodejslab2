import { Router } from "express";
import { index, login, signup , showuser , reset, update, deletear } from "./controller.js";

const testRouter = Router();
testRouter.route("/").get(index);
testRouter.route("/login").post(login);
testRouter.route("/signup").post(signup);
testRouter.route('/showuser').get(showuser);
testRouter.route("/reset").post(reset);
testRouter.route("/update").put(update);
testRouter.route("/deletear").delete(deletear);

export default testRouter;

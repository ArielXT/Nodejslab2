import { Router } from "express";
import { index, login, signup , showuser , reset, update, deletear } from "./controller.js";

const testRouter = Router();
testRouter.route("/").get(index);
testRouter.route("/login").post(login);
testRouter.route("/signup").post(signup);
testRouter.route('/showuser/:id').get(showuser);
testRouter.route("/reset/:id").post(reset);
testRouter.route("/update/:id").put(update);
testRouter.route("/deletear/:id").delete(deletear);

export default testRouter;
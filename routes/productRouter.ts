import express from "express";
import productCtrl from "../controllers/productController";

const productRouter = express.Router();

productRouter.route("/")
    .get(productCtrl.get)
    .post(productCtrl.create)

productRouter.route("/:id")
    .get(productCtrl.getOne)
    .put(productCtrl.update)
    .delete(productCtrl.delete)

export default productRouter;
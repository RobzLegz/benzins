import express from "express";
import uploadCtrl from "../controllers/uploadController";
import uploadImage from "../middleware/uploadImage";

const uploadRouter = express.Router();

uploadRouter.route("/")
    .post(uploadImage, uploadCtrl.upload)

export default uploadRouter;
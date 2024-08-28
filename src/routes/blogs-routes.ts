import express, { Response, Request } from "express";
import { createNewBlog, getBlogs } from "../controllers/blogs-controller";

const router = express.Router();

router.get("/blogs", getBlogs);

router.post("/blogs", createNewBlog);

export default router;

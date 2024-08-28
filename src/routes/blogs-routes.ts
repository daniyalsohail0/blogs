import express from "express";
import {
  createNewBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} from "../controllers/blogs-controller";

const router = express.Router();

router.get("/blogs", getBlogs);

router.get("/blogs/:permalink", getBlog);

router.post("/blogs", createNewBlog);

router.put("/blogs/:permalink", updateBlog);

router.delete("/blogs/:permalink", deleteBlog);

export default router;

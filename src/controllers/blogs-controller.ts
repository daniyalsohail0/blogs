import { Request, Response } from "express";
import BlogModel from "../models/blogs-model";

export const createNewBlog = async (req: Request, res: Response) => {
  try {
    const {
      author,
      title,
      description,
      keywords,
      metaTags,
      metaDescription,
      permalink,
      content,
      featuredImage,
      categories,
    } = req.body;

    const blog = new BlogModel({
      author,
      title,
      description,
      keywords,
      metaTags,
      metaDescription,
      permalink,
      content,
      featuredImage,
      categories,
    });

    await blog.save();

    res.status(200).json({ success: true, data: { blog } });
  } catch (error) {
    console.log(error);
  }
};

export const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await BlogModel.find().select([
      "title",
      "description",
      "author",
      "featuredImage",
      "categories",
      "permalink"
    ]);

    res.status(200).json({ success: true, data: { blogs } });
  } catch (error) {
    console.log(error);
  }
};

const getBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const updateBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const deleteBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

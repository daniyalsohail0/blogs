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
      comments,
    } = req.body;

    let existingPermalink = await BlogModel.findOne({ permalink });

    if (existingPermalink) {
      return res.status(400).json({
        success: false,
        message:
          "Please change the URL. Permalink already exists. Permalinks are supposed to be unique.",
      });
    }

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
      comments,
    });

    await blog.save();

    res.status(200).json({ success: true, data: { blog } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error." });
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
      "permalink",
    ]);

    res.status(200).json({ success: true, data: { blogs } });
  } catch (error) {
    console.log(error);
  }
};

export const getBlog = async (req: Request, res: Response) => {
  try {
    // Assuming permalink comes from req.params or req.query, depending on your route setup
    const permalink = req.params.permalink || req.body.permalink;

    // Validate the permalink (optional, but recommended)
    if (!permalink) {
      return res.status(400).json({ success: false, message: "Permalink is required." });
    }

    const blog = await BlogModel.findOne({ permalink });

    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog post not found." });
    }

    res.status(200).json({ success: true, data: { blog } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { permalink } = req.params;

    // Validate the permalink
    if (!permalink) {
      return res.status(400).json({ success: false, message: "Permalink is required." });
    }

    const {
      author,
      title,
      description,
      keywords,
      metaTags,
      metaDescription,
      content,
      featuredImage,
      categories,
      comments,
    } = req.body;

    // Find and update the blog post
    const updatedBlog = await BlogModel.findOneAndUpdate(
      { permalink },
      {
        author,
        title,
        description,
        keywords,
        metaTags,
        metaDescription,
        content,
        featuredImage,
        categories,
        comments,
      },
      { new: true } // Returns the updated document
    );

    if (!updatedBlog) {
      return res.status(404).json({ success: false, message: "Blog post not found." });
    }

    res.status(200).json({ success: true, data: { updatedBlog } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { permalink } = req.params;

    // Validate the permalink
    if (!permalink) {
      return res.status(400).json({ success: false, message: "Permalink is required." });
    }

    // Find and delete the blog post
    const deletedBlog = await BlogModel.findOneAndDelete({ permalink });

    if (!deletedBlog) {
      return res.status(404).json({ success: false, message: "Blog post not found." });
    }

    res.status(200).json({ success: true, message: "Blog post deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

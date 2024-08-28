import { Schema, Document, Model, model } from "mongoose";

// Define the Blog interface
export interface Blog extends Document {
  author: string;
  title: string;
  description: string;
  keywords: string[];
  metaTags: string[];
  metaDescription: string;
  permalink: string;
  content: string;
  featuredImage: string;
  categories: string[];
  comments: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Define the Blog schema
const blogSchema = new Schema<Blog>(
  {
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    keywords: {
      type: [String],
      required: true,
    },
    metaTags: {
      type: [String],
      required: true,
    },
    metaDescription: {
      type: String,
      required: true,
    },
    permalink: {
      type: String,
      unique: true,
      required: true
    },
    content: {
      type: String,
      required: true,
    },
    featuredImage: {
      type: String,
      required: true,
    },
    categories: {
      type: [String],
      required: true,
    },
    comments: {
      type: [String],
    }
  },
  {
    timestamps: true,
  }
);

// Create the Blog model
const BlogModel: Model<Blog> = model<Blog>("Blog", blogSchema);

export default BlogModel;

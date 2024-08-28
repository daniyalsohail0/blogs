import { Schema, Document, Model, model } from "mongoose";

interface Comment extends Document {
  author: string;
  comment: string;
  editHistory: {
    prevComment: string;
    prevUpdatedDate: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}

const commentSchema = new Schema<Comment>(
  {
    author: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    editHistory: {
      prevComment: {
        type: String,
        required: false, // This can be optional if there's no previous comment
      },
      prevUpdatedDate: {
        type: Date,
        required: false, // This can be optional as well
      },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the Comment model
const CommentModel: Model<Comment> = model<Comment>("Comment", commentSchema);

export default CommentModel;

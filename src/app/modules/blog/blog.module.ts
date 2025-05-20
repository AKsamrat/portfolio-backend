// models/Project.ts
import mongoose, { Schema, model } from 'mongoose';
import { IBlog } from './blog.interface';

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String },
    description: { type: String },
    category: { type: String },
    image: { type: String },
  },
  {
    timestamps: true, // Automatically handles createdAt and updatedAt
  }
);

const Blog = mongoose.models.Blog || model<IBlog>('Blog', blogSchema);
export default Blog;

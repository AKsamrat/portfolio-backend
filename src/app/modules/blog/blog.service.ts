import { IImageFile } from "../../interface/IImageFile";
import { IBlog } from "./blog.interface";
import Blog from "./blog.module";


const createBlog = async (payload: IBlog, file: IImageFile) => {

  console.log(file)
  if (file && file.path) {
    payload.image = file.path;
  }

  const result = await Blog.create(payload);
  return result
}
const getAllBlog = async () => {
  const result = await Blog.find();
  return result
}
const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id);
  return result
}
const updateBlog = async (payload: Partial<IBlog>, id: string) => {

  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,           // return the updated document

  });
  return result;
};
const deleteBlog = async (id: string) => {
  const result = await Blog.findOneAndDelete({ _id: id });
  return result
}
export const blogService = {
  createBlog,
  getAllBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog
}
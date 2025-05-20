import { IImageFile } from "../../interface/IImageFile";
import { IProject } from "./project.interface"
import Project from "./project.model";

const createProject = async (payload: IProject, file: IImageFile) => {

  console.log(file)
  if (file && file.path) {
    payload.image = file.path;
  }

  const result = await Project.create(payload);
  return result
}
const getAllProject = async () => {
  const result = await Project.find();
  return result
}
const getSingleProject = async (id: string) => {
  const result = await Project.findById(id);
  return result
}
const updateProject = async (payload: Partial<IProject>, id: string) => {

  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,           // return the updated document

  });
  return result;
};
const deleteProject = async (id: string) => {
  const result = await Project.findOneAndDelete({ _id: id });
  return result
}
export const projectService = {
  createProject,
  getAllProject,
  updateProject,
  deleteProject,
  getSingleProject
}
import { IImageFile } from "../../interface/IImageFile";
import { ISkill } from "./skill.interface";
import Skill from "./skill.module";



const createSkill = async (payload: ISkill, file: IImageFile) => {

  console.log(file)
  if (file && file.path) {
    payload.image = file.path;
  }

  const result = await Skill.create(payload);
  return result
}
const getAllSkill = async () => {
  const result = await Skill.find();
  return result
}
const getSingleSkill = async (id: string) => {
  const result = await Skill.findById(id);
  return result
}

const updateSkill = async (payload: Partial<ISkill>, id: string) => {

  const result = await Skill.findByIdAndUpdate(id, payload, {
    new: true,           // return the updated document

  });
  return result;
};
const deleteSkill = async (id: string) => {
  const result = await Skill.findOneAndDelete({ _id: id });
  return result
}
export const skillService = {
  createSkill,
  getAllSkill,
  updateSkill,
  deleteSkill,
  getSingleSkill

}
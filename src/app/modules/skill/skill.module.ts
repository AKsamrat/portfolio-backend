import mongoose, { Schema, model } from 'mongoose';
import { ISkill } from './skill.interface';


const skillSchema = new Schema<ISkill>(
  {
    title: { type: String },
    image: { type: String },
  },
  {
    timestamps: true, // Automatically handles createdAt and updatedAt
  }
);

const Skill = mongoose.models.Skill || model<ISkill>('Skill', skillSchema);
export default Skill;
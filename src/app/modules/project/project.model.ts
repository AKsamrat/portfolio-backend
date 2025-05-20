// models/Project.ts
import mongoose, { Schema, model } from 'mongoose';
import { IProject } from './project.interface';



const projectSchema = new Schema<IProject>(
  {
    title: { type: String },
    description: { type: String },
    frontEnd: { type: String },
    backEnd: { type: String },
    link: { type: String },
    image: { type: String },
  },
  {
    timestamps: true, // Automatically handles createdAt and updatedAt
  }
);

const Project = mongoose.models.Project || model<IProject>('Project', projectSchema);
export default Project;

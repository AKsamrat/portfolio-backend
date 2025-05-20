import { Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { projectService } from "./project.service";
import { IImageFile } from "../../interface/IImageFile";

const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await projectService.createProject(req.body, req.file as IImageFile)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project created successfully',
    data: result,
  });

}
)
const getAllProject = catchAsync(async (req: Request, res: Response) => {
  const result = await projectService.getAllProject()
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project retrived successfully',
    data: result,
  });

})
const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await projectService.getSingleProject(id)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project retrived successfully',
    data: result,
  });

}
)
const updateProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body
  const file = req.file
  if (file && file.path) {
    payload.image = file.path;
  }
  const result = await projectService.updateProject(payload, id)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project update successfully',
    data: result,
  });

})
const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await projectService.deleteProject(id)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project deleted successfully',
    data: result,
  });

})
export const projectController = {
  createProject,
  getAllProject,
  updateProject,
  deleteProject,
  getSingleProject
}
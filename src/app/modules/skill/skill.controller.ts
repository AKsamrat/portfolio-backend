import { Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";

import { IImageFile } from "../../interface/IImageFile";
import { skillService } from "./skill.service";


const createSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await skillService.createSkill(req.body, req.file as IImageFile)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Skill created successfully',
    data: result,
  });

}
)
const getAllSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await skillService.getAllSkill()
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Skill retrived successfully',
    data: result,
  });

})
const getSingleSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await skillService.getSingleSkill(id)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Skill retrived successfully',
    data: result,
  });

}
)

const updateSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body
  const file = req.file
  if (file && file.path) {
    payload.image = file.path;
  }
  const result = await skillService.updateSkill(payload, id)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Skill update successfully',
    data: result,
  });

})
const deleteSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await skillService.deleteSkill(id)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Skill deleted successfully',
    data: result,
  });

})
export const skillController = {
  createSkill,
  getAllSkill,
  updateSkill,
  deleteSkill,
  getSingleSkill

}
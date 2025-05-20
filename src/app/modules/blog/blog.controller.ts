import { Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";

import { IImageFile } from "../../interface/IImageFile";
import { blogService } from "./blog.service";

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await blogService.createBlog(req.body, req.file as IImageFile)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });

}
)
const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await blogService.getAllBlog()
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog retrived successfully',
    data: result,
  });

})
const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await blogService.getSingleBlog(id)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog retrived successfully',
    data: result,
  });

}
)
const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body
  const file = req.file
  if (file && file.path) {
    payload.image = file.path;
  }
  const result = await blogService.updateBlog(payload, id)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog update successfully',
    data: result,
  });

})
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await blogService.deleteBlog(id)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  });

})
export const blogController = {
  createBlog,
  getAllBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog
}
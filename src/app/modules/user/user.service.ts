import { IUser, UserRole } from './user.interface';
import User from './user.model';
import AppError from '../../errors/appError';
import { StatusCodes } from 'http-status-codes';
import QueryBuilder from '../../builder/QueryBuilder';
import { UserSearchableFields } from './user.constant';
import mongoose from 'mongoose';
import { AuthService } from '../auth/auth.service';




// Function to register user
const registerUser = async (userData: IUser) => {
   const session = await mongoose.startSession();

   try {
      session.startTransaction();

      // Check if the user already exists
      const existingUser = await User.findOne({ email: userData.email }).session(session);
      if (existingUser) {
         throw new AppError(StatusCodes.NOT_ACCEPTABLE, 'Email is already registered');
      }

      // Create the user
      const user = new User(userData);
      const createdUser = await user.save({ session });

      await session.commitTransaction();

      // Log in user after registration
      return await AuthService.loginUser({ email: createdUser.email, password: userData.password });
   } catch (error) {
      if (session.inTransaction()) {
         await session.abortTransaction();
      }
      throw error;
   } finally {
      session.endSession();
   }
};



const getAllUser = async (query: Record<string, unknown>) => {
   const UserQuery = new QueryBuilder(User.find(), query)
      .search(UserSearchableFields)
      .filter()
      .sort()
      .paginate()
      .fields();

   const result = await UserQuery.modelQuery;
   const meta = await UserQuery.countTotal();
   return {
      result,
      meta,
   };
};


const updateUserStatus = async (userId: string) => {
   const user = await User.findById(userId);

   console.log('comes here');
   if (!user) {
      throw new AppError(StatusCodes.NOT_FOUND, 'User is not found');
   }

   user.isActive = !user.isActive;
   const updatedUser = await user.save();
   return updatedUser;
};

export const UserServices = {
   registerUser,
   getAllUser,

   updateUserStatus,

};

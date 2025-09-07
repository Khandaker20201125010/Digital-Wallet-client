import type { TRole } from "./index.interface";

export interface IUser {
  _id: string;
  email: string;
  name: string;
  picture?: string;
  role: TRole;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export type UpdateUserPayload = {
  name?: string;
  picture?: string;
  role?: TRole; 
  isApproved?: boolean; 
};

export interface IUserFilters {
  role?: string;
  isActive?: string;
  isApproved?: string;
  search?: string;
}
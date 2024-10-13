import {
  GetUsersParams,
  GetUsersResponse,
  SearchUsersParams,
  User,
} from "@/types/users";
import { usersService } from "../api-client";

export const getUsers = async (params: GetUsersParams) => {
  return (await usersService.get<GetUsersResponse>("/", { params })).data;
};

export const searchUsers = async (params: SearchUsersParams) => {
  return (await usersService.get<GetUsersResponse>("/search", { params })).data;
};

export const getUser = async (id: string | number) => {
  return (await usersService.get<User>(`/${id}`)).data;
};

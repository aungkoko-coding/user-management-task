import {
  GetUsersParams,
  GetUsersResponse,
  SearchUsersParams,
} from "@/types/users";
import { usersService } from "../api-client";

export const getUsers = async (params: GetUsersParams) => {
  return (await usersService.get<GetUsersResponse>("/", { params })).data;
};

export const searchUsers = async (params: SearchUsersParams) => {
  return (await usersService.get<GetUsersResponse>("/search", { params })).data;
};

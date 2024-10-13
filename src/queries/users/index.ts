import { getUser, getUsers, searchUsers } from "@/services/users";
import { GetUsersParams, SearchUsersParams } from "@/types/users";
import {
  keepPreviousData,
  type QueryOptions,
  useQuery,
} from "@tanstack/react-query";

export const useGetUsers = (
  params: GetUsersParams,
  { enabled = true }: { enabled: boolean }
) => {
  return useQuery({
    queryKey: ["users", params],
    queryFn: () => getUsers(params),
    placeholderData: keepPreviousData,
    enabled,
  });
};

export const useSearchUsers = (
  params: SearchUsersParams,
  { enabled = false }: { enabled: boolean }
) => {
  return useQuery({
    queryKey: ["users", "search", params],
    queryFn: () => searchUsers(params),
    placeholderData: keepPreviousData,
    enabled,
  });
};

export const useUserDetails = (id: string | number) => {
  return useQuery({ queryKey: ["users", id], queryFn: () => getUser(id) });
};

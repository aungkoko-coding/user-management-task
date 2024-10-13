"use client";

import React, { useDeferredValue, useEffect, useState } from "react";
import { Layout } from "antd";

import HeaderAndSearch from "@/components/users/HeaderAndSearch";
import UsersTable from "@/components/users/UsersTable";
import { useGetUsers, useSearchUsers } from "@/queries/users";
import usePagination from "@/lib/hooks/usePagination";
import useDebounce from "@/lib/hooks/useDebounce";

const UsersListPage = () => {
  const [query, setQuery] = useState("");

  const { currentPage, currentPageSize, handlePaginationChange } =
    usePagination();

  const limit = currentPageSize;
  const skip = (currentPage - 1) * currentPageSize;
  const debouncedQuery = useDebounce(query, 500);
  // smooth typing experience since this hook provide feature that defer updating the part of UI
  const deferredQuery = useDeferredValue(query);
  // will defer updating this value since we calculated based on deferred query
  const isTypedQuery = !!deferredQuery;

  const { data: usersData, isFetching: isFetchingUsers } = useGetUsers(
    {
      limit,
      skip,
    },
    { enabled: !isTypedQuery }
  );

  const { data: searchedUsersData, isFetching: isSearchingUsers } =
    useSearchUsers(
      {
        limit,
        skip,
        q: debouncedQuery,
      },
      { enabled: isTypedQuery }
    );

  const handleQueryChange = (query: string) => {
    setQuery(query);
    if (currentPage > 1) {
      handlePaginationChange(1, currentPageSize);
    }
  };

  const totalPages = Math.ceil(
    (isTypedQuery ? searchedUsersData?.total : usersData?.total) ??
      0 / currentPageSize
  );

  return (
    <Layout style={{ maxHeight: "100vh", overflow: "hidden" }}>
      <HeaderAndSearch query={query} onQueryChange={handleQueryChange} />
      <UsersTable
        totalPages={totalPages}
        isLoading={isTypedQuery ? isSearchingUsers : isFetchingUsers}
        users={isTypedQuery ? searchedUsersData?.users : usersData?.users}
      />
    </Layout>
  );
};

export default UsersListPage;

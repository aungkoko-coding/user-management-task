import { User } from "@/types/users";
import { Table } from "antd";
import React, { memo } from "react";
import userTableColumns from "./userTableColumns";
import usePagination from "@/lib/hooks/usePagination";

type Props = {
  totalPages: number;
  isLoading: boolean;
  users: User[] | undefined;
};

// Memoized this component to avoid re-rendering on the query changes
const UsersTable = memo(({ users, totalPages, isLoading }: Props) => {
  const { currentPage, currentPageSize, handlePaginationChange } =
    usePagination();

  return (
    <Table
      rowClassName={"hoverable"}
      columns={userTableColumns}
      dataSource={users}
      onRow={(user) => ({ onClick: () => console.log({ user }) })}
      pagination={{
        total: totalPages,
        current: currentPage,
        pageSize: currentPageSize,
        onChange: handlePaginationChange,
      }}
      loading={isLoading}
      scroll={{ y: "calc(100vh - 190px)" }}
    />
  );
});

export default UsersTable;

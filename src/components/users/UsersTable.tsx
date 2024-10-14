import { User } from "@/types/users";
import { Table } from "antd";
import React, { memo } from "react";
import userTableColumns from "./userTableColumns";
import usePagination from "@/lib/hooks/usePagination";
import { useRouter } from "next/navigation";

type Props = {
  totalPages: number;
  isLoading: boolean;
  users: User[] | undefined;
};

// Memoized this component to avoid re-rendering on the query changes
const UsersTable = memo(({ users, totalPages, isLoading }: Props) => {
  const router = useRouter();
  const { currentPage, currentPageSize, handlePaginationChange } =
    usePagination();

  const navigateToUserDetailsPage = (id: number) => {
    router.push(`/users/${id}`);
  };

  return (
    <Table
      rowClassName={"hoverable"}
      columns={userTableColumns}
      dataSource={users}
      onRow={(user) => ({ onClick: () => navigateToUserDetailsPage(user.id) })}
      pagination={{
        total: totalPages,
        current: currentPage,
        pageSize: currentPageSize,
        onChange: handlePaginationChange,
      }}
      loading={isLoading}
      scroll={{ y: "calc(100vh - 180px)", x: 1000 }}
    />
  );
});

UsersTable.displayName = "UsersTable";

export default UsersTable;

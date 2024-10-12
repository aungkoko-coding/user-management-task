import { Typography, Input, Flex } from "antd";
import React from "react";
import SearchOutlined from "@ant-design/icons/SearchOutlined";

type Props = {
  query: string;
  onQueryChange: (query: string) => void;
};

const HeaderAndSearch = ({ query, onQueryChange }: Props) => {
  return (
    <Flex gap={2} align="center" style={{ padding: "0px 0px" }}>
      <Typography.Title style={{ width: "fit-content", flexShrink: 0 }}>
        Users List
      </Typography.Title>
      <Input
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        size="large"
        style={{ marginLeft: "auto", maxWidth: "300px" }}
        placeholder="Search by name"
        prefix={<SearchOutlined />}
      />
    </Flex>
  );
};

export default HeaderAndSearch;

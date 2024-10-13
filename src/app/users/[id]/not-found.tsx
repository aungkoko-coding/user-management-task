"use client";
import React from "react";
import { Flex, Typography } from "antd";
import { useParams } from "next/navigation";

const UserNotFound = () => {
  const params = useParams();
  return (
    <Flex vertical align="center" justify="center">
      <Typography.Title
        level={1}
        style={{ marginBottom: 0, fontSize: "5rem", color: "red" }}
      >
        404
      </Typography.Title>
      <Typography.Paragraph style={{ fontSize: "2rem" }}>
        Could not find the user with id &quot;{params.id}&quot;.
      </Typography.Paragraph>
    </Flex>
  );
};

export default UserNotFound;

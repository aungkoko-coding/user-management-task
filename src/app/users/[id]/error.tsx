"use client";
import { Button, Flex, Typography } from "antd";
import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <Flex vertical align="start">
      <Typography.Title
        level={1}
        style={{ marginBottom: 0, fontSize: "5rem", color: "red" }}
      >
        Error
      </Typography.Title>
      <Typography.Paragraph style={{ fontSize: "2rem" }}>
        {error.message}
      </Typography.Paragraph>
      <Button onClick={reset} size="large">
        Retry
      </Button>
    </Flex>
  );
};

export default Error;

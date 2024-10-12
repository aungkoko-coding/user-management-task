"use client";
import React from "react";
import { Layout } from "antd";

const ClientLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout>
      <Layout.Content style={{ padding: "0px 2rem", minHeight: "100vh" }}>
        {children}
      </Layout.Content>
    </Layout>
  );
};

export default ClientLayout;

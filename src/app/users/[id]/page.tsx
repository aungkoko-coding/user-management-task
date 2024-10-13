/*
 We can statically generate user details pages using generateStaticParams if this application must be SEO friendly.
*/
"use client";

import React from "react";
import { Button, Flex, Space, Spin, Tag, theme, Typography } from "antd";
import LeftOutlined from "@ant-design/icons/LeftOutlined";
import { notFound, useRouter } from "next/navigation";
import { useUserDetails } from "@/queries/users";
import Image from "next/image";
import PersonalInformation from "@/components/users/details/PersonalInformation";
import Address from "@/components/users/details/Address";
import Work from "@/components/users/details/Work";
import Banking from "@/components/users/details/Banking";
import { placeholderImageUrl } from "@/constants/users";

type Props = {
  params: { id: string };
};

const UserDetailsPage = ({ params: { id } }: Props) => {
  const router = useRouter();

  const {
    token: { colorBgLayout },
  } = theme.useToken();

  const { data: user, isLoading } = useUserDetails(id);

  const goBack = () => {
    router.back();
  };

  if (isLoading) return <Spin fullscreen size="large" />;

  if (!user) notFound();

  const { image, firstName, lastName, role } = user;

  return (
    <div
      style={{
        maxWidth: "700px",
        width: "100%",
        margin: "0 auto",
        padding: "0px 0px 10px 0px",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          paddingTop: 10,
          paddingBottom: 10,
          zIndex: 99,
          backgroundColor: colorBgLayout,
        }}
      >
        <Button variant="text" icon={<LeftOutlined />} onClick={goBack}>
          Back
        </Button>
        <Flex style={{ marginTop: "30px" }} align="center" gap={10}>
          <Image
            src={image}
            alt={`${user.firstName} ${user.lastName}`}
            width={80}
            height={80}
            placeholder="blur"
            blurDataURL={placeholderImageUrl}
            style={{
              objectFit: "cover",
              borderRadius: "100%",
              border: "1px solid rgba(0, 0, 0, 0.3)",
            }}
          />
          <Flex vertical gap={1} align="start">
            <Tag bordered style={{ textTransform: "capitalize" }}>
              {role}
            </Tag>
            <Typography.Title level={3} style={{ marginBottom: 0 }}>
              {firstName} {lastName}
            </Typography.Title>
          </Flex>
        </Flex>
      </div>
      <Space direction="vertical" style={{ width: "100%", marginTop: "30px" }}>
        <PersonalInformation user={user} />
        <Address address={user.address} />
        <Work company={user.company} />
        <Banking bank={user.bank} />
        <Typography.Paragraph>
          The remaining information should be added when making real-world
          application.
        </Typography.Paragraph>
      </Space>
    </div>
  );
};

export default UserDetailsPage;

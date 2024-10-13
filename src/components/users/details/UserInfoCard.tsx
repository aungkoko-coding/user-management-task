import { Card, Col, Flex, Row, Typography } from "antd";
import React from "react";

type Props = {
  title: string;
  body: Array<{
    name: React.ReactNode;
    value: React.ReactNode;
    Icon: React.ElementType;
    valueStyle?: React.CSSProperties;
  }>;
};

const UserInfoCard = ({ title, body }: Props) => {
  return (
    <Card title={title}>
      <Row>
        {body.map(({ name, Icon, value, valueStyle }, index) => (
          <Col key={index} xs={24} md={12}>
            <Flex vertical gap={"5px"}>
              <Typography.Title level={5} style={{ marginBottom: 0 }}>
                <Icon style={{ marginRight: "5px" }} />
                {name}
              </Typography.Title>
              <Typography.Paragraph style={{ ...(valueStyle ?? {}) }}>
                {value}
              </Typography.Paragraph>
            </Flex>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default UserInfoCard;

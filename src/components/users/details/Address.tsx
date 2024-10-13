import React from "react";
import { EnvironmentOutlined, GlobalOutlined } from "@ant-design/icons";
import { User } from "@/types/users";
import UserInfoCard from "./UserInfoCard";

const Address = ({ address }: { address: User["address"] }) => {
  return (
    <UserInfoCard
      title="Address"
      body={[
        { name: "Street", value: address.address, Icon: EnvironmentOutlined },
        {
          name: "City",
          value: `${address.city}, ${address.state}`,
          Icon: EnvironmentOutlined,
        },
        { name: "Country", value: address.country, Icon: GlobalOutlined },
        {
          name: "PostalCode",
          value: address.postalCode,
          Icon: EnvironmentOutlined,
        },
      ]}
    />
  );
};

export default Address;

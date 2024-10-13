import React from "react";
import { ApartmentOutlined, FlagOutlined } from "@ant-design/icons";
import { User } from "@/types/users";
import UserInfoCard from "./UserInfoCard";

const Work = ({ company }: { company: User["company"] }) => {
  return (
    <UserInfoCard
      title="Work"
      body={[
        { name: "Company", value: company.name, Icon: FlagOutlined },
        { name: "Title", value: company.title, Icon: FlagOutlined },
        {
          name: "Department",
          value: company.department,
          Icon: ApartmentOutlined,
        },
      ]}
    />
  );
};

export default Work;

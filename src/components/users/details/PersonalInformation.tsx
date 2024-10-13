import React from "react";
import {
  CalendarOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { User } from "@/types/users";
import dayjs from "dayjs";
import UserInfoCard from "./UserInfoCard";

const PersonalInformation = ({ user }: { user: User }) => {
  return (
    <UserInfoCard
      title="Personal Information"
      body={[
        { name: "Email", value: user.email, Icon: MailOutlined },
        { name: "Phone", value: user.phone, Icon: PhoneOutlined },
        {
          name: "Birth Date",
          value: dayjs(user.birthDate).format("DD MMM YYYY"),
          Icon: CalendarOutlined,
        },
        {
          name: "Gender",
          value: user.gender,
          Icon: UserOutlined,
          valueStyle: { textTransform: "capitalize" },
        },
      ]}
    />
  );
};

export default PersonalInformation;

import Image from "next/image";
import { Typography } from "antd";
import type { TableProps } from "antd";
import { User } from "@/types/users";
import dayjs from "dayjs";

const userTableColumns: TableProps<User>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 100,
  },
  {
    title: "Image",
    dataIndex: "image",
    render: (image, user) => (
      <Image src={image} width={50} height={50} alt={user.firstName} />
    ),
    key: "image",
    width: 100,
  },

  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    width: 150,
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    width: 150,
  },
  {
    title: "Maiden Name",
    dataIndex: "maidenName",
    key: "maidenName",
    render: (maidenName) => maidenName || "-",
    width: 150,
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    className: "capitalize",
    width: 150,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    className: "capitalize",
    width: 150,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 100,
  },
  {
    title: "Birth Date",
    dataIndex: "birthDate",
    key: "birthDate",
    render: (birthDate) => dayjs(birthDate).format("DD MMM YYYY"),
    width: 150,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    render: (address) => (
      <>
        {address.city}, {address.state} ({address.country})
      </>
    ),
    width: 200,
  },
];

export default userTableColumns;

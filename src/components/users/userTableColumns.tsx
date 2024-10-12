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
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Maiden Name",
    dataIndex: "maidenName",
    key: "maidenName",
    render: (maidenName) => maidenName || "-",
    width: 150,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    render: (gender) => (
      <Typography style={{ textTransform: "capitalize" }}>{gender}</Typography>
    ),
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Birth Date",
    dataIndex: "birthDate",
    key: "birthDate",

    render: (birthDate) => (
      <Typography>{dayjs(birthDate).format("DD MMM YYYY")}</Typography>
    ),
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    render: (address) => (
      <Typography>
        {address.city}, {address.state} ({address.country})
      </Typography>
    ),
  },
];

export default userTableColumns;

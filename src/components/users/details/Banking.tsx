import React from "react";
import CreditCardOutlined from "@ant-design/icons/CreditCardOutlined";
import { User } from "@/types/users";
import dayjs from "dayjs";
import UserInfoCard from "./UserInfoCard";

const Banking = ({ bank }: { bank: User["bank"] }) => {
  return (
    <UserInfoCard
      title="Banking"
      body={[
        { name: "Card Type", value: bank.cardType, Icon: CreditCardOutlined },
        {
          name: "Card Number",
          value: bank.cardNumber,
          Icon: CreditCardOutlined,
        },
        {
          name: "Expiration",
          value: dayjs(bank.cardExpire).format("DD MMM YYYY"),
          Icon: CreditCardOutlined,
        },
        { name: "Currency", value: bank.currency, Icon: CreditCardOutlined },
      ]}
    />
  );
};

export default Banking;

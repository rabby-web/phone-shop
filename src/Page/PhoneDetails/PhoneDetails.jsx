import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "../PhoneCart/PhoneCard";

const PhoneDetails = () => {
  const [phone, setPhone] = useState({});
  const { id } = useParams();
  const phones = useLoaderData();
  useEffect(() => {
    const findPhones = phones.find((phone) => phone.id === id);
    setPhone(findPhones);
  }, [id, phones]);
  return (
    <div>
      <PhoneCard phone={phone}></PhoneCard>
    </div>
  );
};

export default PhoneDetails;

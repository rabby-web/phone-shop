import { useLoaderData } from "react-router-dom";
import Phone from "../../Phone/Phone";

const Home = () => {
  const phones = useLoaderData();
  // console.log(phones);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {phones?.map((phone) => (
          <Phone key={phone.id} phone={phone}></Phone>
        ))}
      </div>
    </div>
  );
};

export default Home;

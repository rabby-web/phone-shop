import { useEffect, useState } from "react";
import PhoneCard from "../PhoneCart/PhoneCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noFound, setNoFound] = useState(false);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteItems) {
      setFavorites(favoriteItems);
    } else {
      setNoFound("No Data Found");
    }
  }, []);
  console.log(favorites);
  return (
    <div>
      {noFound ? (
        <p>Phones Add To Favorites</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {favorites.map((phone) => (
            <PhoneCard key={phone.id} phone={phone}></PhoneCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;

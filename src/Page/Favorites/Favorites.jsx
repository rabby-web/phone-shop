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
  const handleRemove = () => {
    localStorage.clear();
    setFavorites([]);
    setNoFound("No Data Found");
  };
  return (
    <div>
      {noFound ? (
        <p className="text-center h-40 text-2xl font-bold flex items-center justify-center">
          Phones Add To Favorites
        </p>
      ) : (
        <div>
          {favorites.length > 0 && (
            <button
              onClick={handleRemove}
              className="py-2 px-4 bg-red-600 text-white rounded-md m-3 block mx-auto"
            >
              Delete All Items
            </button>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {favorites.map((phone) => (
              <PhoneCard key={phone.id} phone={phone}></PhoneCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;

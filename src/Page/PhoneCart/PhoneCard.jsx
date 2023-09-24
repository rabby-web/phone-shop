import Rating from "react-rating";
import swal from "sweetalert";

const PhoneCard = ({ phone }) => {
  const { image, phone_name, brand_name, price, id, rating } = phone || {};
  const handleAddToFavorite = () => {
    const addFavoriteArray = [];
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (!favoriteItems) {
      addFavoriteArray.push(phone);
      localStorage.setItem("favorites", JSON.stringify(addFavoriteArray));
      swal("Good job!", "Products added successfully!", "success");
    } else {
      const isExist = favoriteItems.find((phone) => phone.id === id);
      console.log(isExist);
      if (!isExist) {
        addFavoriteArray.push(...favoriteItems, phone);
        localStorage.setItem("favorites", JSON.stringify(addFavoriteArray));
        swal("Good job!", "Products added successfully!", "success");
      } else {
        swal("Error!", "No duplicate !", "error");
      }
    }
  };
  return (
    <div className="flex items-center justify-center my-5">
      <div className="m-3">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={image}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              Brand: {brand_name} || Price: {price}
            </h6>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {phone_name}
            </h4>

            <p className="mb-8 block font-sans text-sm font-normal leading-relaxed text-gray-700 antialiased">
              Other features that may be found on mobile phones include GPS
              navigation, music (MP3) and video (MP4) playback, RDS radio
              receiver, built-in projector, vibration and other ring options,
              alarms, memo recording, personal digital assistant functions,
              ability to watch streaming video, video download, video calling
            </p>
            <h4 className="text-orange-400">
              <Rating
                initialRating={rating}
                emptySymbol={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                }
                fullSymbol={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                readonly
              />
            </h4>
            <a className="inline-block" href="#">
              <button
                onClick={handleAddToFavorite}
                className="flex bg-red-200 select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Add To Favorite
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;

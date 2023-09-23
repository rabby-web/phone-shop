import React from "react";

const Phone = ({ phone }) => {
  console.log(phone);
  const { image, phone_name, brand_name, price } = phone || {};
  return (
    <div>
      <div className="relative flex w-full m-3 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-lg font-medium leading-relaxed text-blue-gray-900 antialiased">
              {brand_name}
            </p>
            <p className="block font-sans text-lg font-medium leading-relaxed text-blue-gray-900 antialiased">
              {price}
            </p>
          </div>
          <p className="block font-sans text-base font-normal leading-normal text-gray-700 antialiased opacity-75">
            {phone_name}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-blue-600  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Phone;

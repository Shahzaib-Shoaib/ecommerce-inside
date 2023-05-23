import React, { useEffect, useState } from "react";
import packageCatagories from "~/data/packageCatagories";
import packages from "~/data/packages";
import PackageCard from "./PackageCard";

const ServicePackages = () => {
  const [active, setActive] = useState("");
  const [filterCards, setFilterCards] = useState(null);

  useEffect(() => {
    setFilterCards(packages);
  }, []);

  const handleClick = (e) => {
    const btnValue = e.target.value;
    setActive(btnValue);
    const newFilterCards = packages.filter((item) => item.cat === btnValue);
    console.log(newFilterCards);
    if (btnValue === "All") {
      setFilterCards(packages);
    } else {
      setFilterCards(newFilterCards);
    }
  };

  return (
    <div className="wrapper lg:px-[30px] lg:pb-[30px] 2xl:px-[70px] 2xl:pb-[40px] 4xl:px-[100px] 4xl:pb-[60px] mx-auto">
      {/* Categories Buttons */}
      <div className="mb-[30px] flex flex-wrap  items-center  justify-center gap-[15px]">
        {packageCatagories.map((item, id) => {
          return (
            <button
              onClick={(e) => handleClick(e)}
              key={id}
              value={item.name}
              className={`${
                active === item.name
                  ? " border-2 border-darkblue bg-caribbeangreen text-white"
                  : "bg-white"
              }  p-2" flex cursor-pointer items-center justify-center rounded-t-md border-2 border-caribbeangreen px-5  py-[8px]  hover:border-gray-300`}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {/* Package Cards */}
      <div className="container mx-auto">

      
      <div className="grid  grid-cols-1  gap-5  2xl:grid-cols-3">
        {filterCards &&
          filterCards.map((data, id) => {
            return <PackageCard info={data} key={id} />;
          })}
      </div>
    </div>
    </div>
  );
};

export default ServicePackages;

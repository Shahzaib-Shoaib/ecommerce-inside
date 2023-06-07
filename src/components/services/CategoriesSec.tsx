import Image from "next/image";
import React from "react";

type CategoriesSecType = {
  id: string;
  img: string | null;
  name: string;
  desc: string;
}[];

const CategoriesSec = ({
  CategoriesSecData,
}: {
  CategoriesSecData: CategoriesSecType;
}) => {
  return (
    <div className="div_container mx-auto">
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 3xl:grid-cols-4 4xl:grid-cols-4 5xl:grid-cols-4 6xl:grid-cols-4">
        {CategoriesSecData.map((category) => (
          <div className="group col-span-1 bg-[#CCCCCC] hover:bg-caribbeangreen">
            <div className="content flex flex-col items-center p-5">
              {category.img && (
                <Image
                  src={category.img}
                  alt={category.name}
                  width={80}
                  height={80}
                  className="mb-4"
                />
              )}
              <p className="mb-3 text-center font-bold group-hover:text-white">
                {category.name}
              </p>
              <p className="text-center font-normal text-[#666] group-hover:text-white">
                {category.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSec;

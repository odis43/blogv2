import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  img: StaticImageData;
  title: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <button className="flex-col">
      <div className="w-80 h-80 sm:w-96 sm:h-96 bg-blue-600 bg-opacity-30 rounded-tl-lg rounded-tr-lg border-2 border-black hover:bg-opacity-50">
        <Image src={props.img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-80 h-12 sm:w-96 sm:h-9 bg-white rounded-bl-lg rounded-br-lg border-l-2 border-r-2 border-b-2 border-black flex items-center">
        <div className="ml-2 font-bold text-lg">{props.title}</div>
      </div>
    </button>
  );
};

export default Card;

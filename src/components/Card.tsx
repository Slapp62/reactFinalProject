import { Card, Button } from "flowbite-react";
import { FaPhone } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { Tcards } from "../data/Types";

export function CardComp({ card } : { card: Tcards }) {
  

  return (
    <Card className="flex my-2 w-[350px]">
      <div className="w-full">
        <img src={card.image.url} alt="" className="object-cover w-full h-[200px]" />
      </div>

      <div className="flex flex-col gap-1 flex-grow-1 justify-around">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-none ">{card.title}</h3>
        <h4 className="font-normal text-gray-700 dark:text-gray-400 leading-none ">{card.subtitle}</h4>
        <hr />
        <p>{card.description}</p>
        <ul className="list-disc pl-5 dark:text-slate-300">
          <li >{card.phone}</li>
          <li>{card.email}</li>
        </ul>
      </div>
      

      <div className="flex justify-end">
        <Button className="px-3 bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-sky-700 dark:text-sky-500"><FaRegHeart size={30} /></Button>
        <Button className="px-3 bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-sky-700 dark:text-sky-500"><FaHeart size={30} /></Button>
        <Button className="px-3 bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-sky-700 dark:text-sky-500"><FaPhone size={30}/></Button>
      </div>
      
    </Card>
  );
};


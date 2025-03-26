import { CardType } from "../data/cardData";
import { Card, Button } from "flowbite-react";

import { FaPhone } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

export function CardComp({ card } : { card: CardType }) {

  return (
    <Card
      className="max-w-1/5 my-10"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={card.image}
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-none">{card.title}</h3>
      <h4 className="font-normal text-gray-700 dark:text-gray-400 leading-none">{card.subtitle}</h4>
      <hr />
      <ul className="list-disc pl-5 dark:text-slate-300">
        <li >{card.phone}</li>
        <li>{card.address}</li>
        <li>{card.cardNumber}</li>
      </ul>

      <div className="flex justify-end">
        <Button className="px-3 bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-sky-700 dark:text-sky-500"><FaRegHeart size={30} /></Button>
        <Button className="px-3 bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-sky-700 dark:text-sky-500"><FaHeart size={30} /></Button>
        <Button className="px-3 bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-sky-700 dark:text-sky-500"><FaPhone size={30}/></Button>
      </div>
      
    </Card>
  );
}


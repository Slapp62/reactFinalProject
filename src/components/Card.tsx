import { CardType } from "../data/cardData";
import { Card, Button } from "flowbite-react";

import { MdLocalPhone } from "react-icons/md";

export function CardComp({ card } : { card: CardType }) {

  return (
    <Card
      className="max-w-sm my-10"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={card.image}
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-none">{card.title}</h3>
      <h4 className="font-normal text-gray-700 dark:text-gray-400 leading-none">{card.subtitle}</h4>
      <hr />
      <ul className="list-none dark:text-slate-300">
        <li >{card.phone}</li>
        <li>{card.address}</li>
        <li>{card.cardNumber}</li>
      </ul>
      <Button className="w-fit ml-auto rounded-full bg-sky-600"><MdLocalPhone size={30} className="text-slate-100" /></Button>
    </Card>
  );
}


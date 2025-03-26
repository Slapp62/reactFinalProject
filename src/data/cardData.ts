export type CardType = {
  image: string;
  title: string;
  subtitle: string;
  phone: string;
  address: string;
  cardNumber: string;
};

export const cardData: CardType[] = [
    {
      image: "../../images/river.jpg",
      title: "1st Card title",
      subtitle: "1st Card subtitle",
      phone: "123-456-7890",
      address: "234 Brooklyn, NY",
      cardNumber: "12345678",
    },
    {
      image: "../../images/river.jpg",
      title: "2nd Card title",
      subtitle: "2nd Card subtitle",
      phone: "123-456-7890",
      address: "725 Queens, NY",
      cardNumber: "534565456",
    },
    {
      image: "../../images/river.jpg",
      title: "3rd Card title",
      subtitle: "3rd Card subtitle",
      phone: "123-456-7890",
      address: "979 Manhattan, NY",
      cardNumber: "3456876456",
    },
  ];
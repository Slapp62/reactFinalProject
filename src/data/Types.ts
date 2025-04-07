export type Tcards = {
    _id: number;
    title: string;
    subtitle: string;
    description: string;
    phone: number;
    email: string;
    web: string;
    image: {
      url:string;
      _id: number;
    }
};

export type TPaginationProps = {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
};


// export const cardData: Tcards[] = 
//     const [cards, setCards] = useState<Tcards[]>([]);

//   const getCards = async () => {
//     const response = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards");
//     setCards(response.data);
//   }

//   useEffect(() => {
//     getCards();
//   }, [cards])
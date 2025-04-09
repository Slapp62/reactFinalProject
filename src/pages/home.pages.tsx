import { motion } from "framer-motion";
import { CardComp } from "../components/Card";
import { CarouselComp } from "../components/Carousel";
import { PageComp } from "../components/pagination";
import { useState, useEffect } from "react";
import { Tcards } from "../data/Types";
import axios from "axios";

export default function Home() {
    // Get and set cards
    const getCards = async () => {
        return await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards");
    }

    const [cards, setCards] = useState<Tcards[]>([]);

    useEffect(() => {
        const loadCards = async () => {
            const response = await getCards();
            setCards(response.data);
            console.log(response.data);
        };

        loadCards();
    }, []);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page: number) => setCurrentPage(page);
    const cardsPerPage = 12;

    const startIndex = (currentPage - 1) * cardsPerPage;
    const paginatedCardsArr = cards.slice(startIndex, startIndex + cardsPerPage);
  
    return (
        <main className="flex flex-col flex-1 gap-3 p-1">
            <div>
                <CarouselComp/>
            </div>

            <div className="flex flex-wrap justify-evenly w-5/6 m-auto items-stretch gap-4">
                {paginatedCardsArr.map((card, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}>

                    <CardComp key={index} card={card} />

                    </motion.div>
                ))}
            </div>
          
            <div className="my-6">
                <PageComp
                currentPage={currentPage}
                onPageChange={onPageChange}
                totalPages={Math.ceil(cards.length / cardsPerPage)} />
            </div>
        </main>
      );
}
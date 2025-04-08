import "./index.css";

import { useEffect, useState } from "react";
import { Tcards } from "./data/Types";
import { Nav } from "./components/Nav";
import { CardComp } from "./components/Card";
import { CarouselComp } from "./components/Carousel";
import { FooterComp } from "./components/footer";
import { PageComp } from "./components/pagination";
import {Login} from "./components/loginModal";
import { getCards } from "./data/api";
import { ToastContainer } from 'react-toastify';
import { motion } from "framer-motion";



function App() {
  
  const [loginOpen, setLoginOpen] = useState(false);
  const [cards, setCards] = useState<Tcards[]>([]);
  
  useEffect(() => {
    const fetchCards = async () => {
      const response = await getCards();
      setCards(response.data);
    };

    fetchCards();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);

  const cardsPerPage = 12;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const paginatedCardsArr = cards.slice(startIndex, startIndex + cardsPerPage);

  return (
    <>
      <ToastContainer aria-label={undefined} />
      <div className="flex flex-col min-h-screen bg-slate-200 dark:bg-black">
        <nav className="sticky top-0 z-50">
          <Nav onLoginClick={() => setLoginOpen(true)} />
          <Login show={loginOpen} onClose={() => setLoginOpen(false)} />
        </nav>

        <main className="flex flex-col flex-1 gap-3 p-1">
          <div>
            <CarouselComp/>
          </div>

          <div className="flex flex-wrap justify-evenly w-5/6 m-auto items-stretch">
            {paginatedCardsArr.map((card, index) => (
              <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="items-stretch">

              <CardComp key={index} card={card} />

              </motion.div>
            ))}
          </div>
          
          <div>
            <PageComp
            currentPage={currentPage}
            onPageChange={onPageChange}
            totalPages={Math.ceil(cards.length / cardsPerPage)} />
          </div>
        </main>
        
        <footer>
          <FooterComp />
        </footer>
      </div>
      
    </>
    
  );
}

export default App;

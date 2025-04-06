import "./index.css";

import { useEffect, useState } from "react";
import { Tcards } from "./data/Types";
import { Nav } from "./components/Nav";
import { CardComp } from "./components/Card";
import { CarouselComp } from "./components/Carousel";
import { FooterComp } from "./components/footer";
import { PageComp } from "./components/pagination";
import {Login} from "./components/loginModal";
import getCards from "./data/api";
import { ToastContainer } from 'react-toastify';



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

          <div className="flex flex-wrap justify-evenly gap-2 w-3/4 m-auto items-stretch">
            {cards.map((card, index) => (
              <CardComp key={index} card={card}/>
            ))}
          </div>
          
          <div>
            <PageComp/>
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

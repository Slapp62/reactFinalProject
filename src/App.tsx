import "./index.css";
import { cardData } from "./data/cardData";

import { Nav } from "./components/Nav";
import { CardComp } from "./components/Card";
import { CarouselComp } from "./components/Carousel";
import { FooterComp } from "./components/footer";
// import {Hook, App2} from "./hooks";
// import Square from "./components/exercise2";


function App() {
  

  return (
    <>
      
      <div className="flex flex-col min-h-screen bg-slate-200 dark:bg-black">
        <nav className="sticky top-0 z-50"><Nav /></nav>

        <main className="flex flex-col flex-1 gap-3 p-1">
          <div>
            <CarouselComp/>
          </div>

          <div className="flex justify-evenly gap-3">
            {cardData.map((card, index) => (
              <CardComp key={index} card={card} />
            ))}
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

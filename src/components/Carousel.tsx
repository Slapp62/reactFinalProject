import { Carousel } from "flowbite-react";
import river from "../assets/images/river.jpg";
import forest from "../assets/images/forest-bg.jpg";
import mountains from "../assets/images/mountains-bg.jpg";
import office from "../assets/images/office1.jpg";
import darkOffice from "../assets/images/dark-office.jpg";

export function CarouselComp() {
  
  const carouselTheme = {
    root: {
      base: "relative h-full w-full",
      leftControl: "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl: "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"
    },
    indicators: {
      active: {
        off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-white dark:bg-gray-800"
      },
      base: "h-3 w-3 rounded-none",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    item: {
      base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full shrink-0 transform cursor-default snap-center",
        on: "w-full shrink-0 transform cursor-grab snap-center"
      }
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70",
      icon: "h-5 w-5 text-white sm:h-6 sm:w-6 dark:text-gray-800"
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory rounded-none overflow-y-hidden overflow-x-hidden scroll-smooth ",
      snap: "snap-x"
    }
  };
  
  

  return (
    <div className="relative h-[500px]" >

      <div className="absolute z-10 translate-x-full translate-y-full flex items-center justify-center w-1/3 h-1/3 bg-slate-300 dark:bg-gray-900 opacity-90 rounded-md">
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
          Create a Card!
        </h1>
      </div>


      <Carousel 
        slideInterval={5000}
        pauseOnHover 
        theme={carouselTheme}
        className=""
      >
        <img src={river} alt="river" />
        <img src={forest} alt="forest" />
        <img src={mountains} alt="mountains" />
        <img src={office} alt="office"/>
        <img src={darkOffice} alt="dark office"/>
      </Carousel>
      
    </div>
  );
}

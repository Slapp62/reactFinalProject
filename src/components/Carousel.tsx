
import { Carousel } from "flowbite-react";

export function CarouselComp() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden" >

      <div className="absolute z-10 translate-x-full translate-y-full flex items-center justify-center w-1/3 h-1/3 bg-slate-300 dark:bg-gray-900 opacity-90 rounded-md">
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
          Create a Card!
        </h1>
      </div>


      <Carousel slideInterval={5000} className="overflow-hidden whitespace-nowrap">
        <img src="/images/river.jpg" alt="river" />
        <img src="/images/forest-bg.jpg" alt="forest" />
        <img src="/images/mountains-bg.jpg" alt="mountains" />
        <img src="/images/office1.jpg" alt="office"/>
        <img src="/images/dark-office.jpg" alt="dark office"/>
      </Carousel>
      
    </div>
  );
}

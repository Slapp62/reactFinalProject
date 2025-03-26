
import { Carousel } from "flowbite-react";

export function CarouselComp() {
  return (
    <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-[500px] pt-10 overflow-x-hidden" >

      <div className="absolute z-10 translate-x-full translate-y-full flex items-center justify-center w-1/3 h-1/3 bg-slate-300 dark:bg-gray-900 opacity-90 rounded-md">
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
          Create a Card!
        </h1>
      </div>


      <Carousel slideInterval={5000}>
        <img src="/images/river.jpg" alt="river" className="w-full h-auto"/>
        <img src="/images/forest-bg.jpg" alt="..." className="w-full h-auto" />
        <img src="/images/mountains-bg.jpg" alt="..." className="w-full h-auto" />
        <img src="/images/office1.jpg" alt="..." className="w-full h-auto"/>
        <img src="/images/dark-office.jpg" alt="..." className="w-full h-auto"/>
      </Carousel>
      
    </div>
  );
}

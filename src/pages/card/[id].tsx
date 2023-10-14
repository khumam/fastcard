import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Base from "u/components/base";
import CardStack from "u/components/cardstack";
import CarouselStack from "u/components/carousel";
import { type Material } from "u/interfaces/material";
import { api } from "u/utils/api";

const Card: NextPage = () => {
  const router = useRouter();
  const [isCarousel, setIsCarousel] = useState(true);
  const { data, isLoading } = api.cardRouter.get.useQuery({id: router.query.id as string});
  console.log(isLoading);

  const handleBack = () => {
    router.back();
  }

  const handleIsCarousel = () => {
    setIsCarousel(!isCarousel);
  }
  
  return (
    <Base>
      <div className="bg-slate-50">
        <div className="px-6 md:px-unset md:container md:mx-auto py-8">
          <button className="mb-6 text-slate-600 text-lg rounded flex items-center gap-3" onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All cards
          </button>
          <h1 className="text-5xl font-bold text-slate-700 mb-3">{data?.title}</h1>
          <p className="text-slate-500 text-lg">{data?.description}</p>
          <div className="flex gap-3">
            <button className="bg-slate-500 mt-6 text-white py-2 px-6 rounded flex gap-3" onClick={handleIsCarousel}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
              </svg>
              {isCarousel ? 'Card stack view' : 'Carousel view'}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 w-full h-px"></div>
      <div className=" bg-slate-100 py-16">
        {isCarousel
          ?  <CarouselStack materials={data?.materials as unknown as Material[]}></CarouselStack>
          :  <CardStack materials={data?.materials as unknown as Material[]}></CardStack>
        }
      </div>
    </Base>
  );
}

export default Card;
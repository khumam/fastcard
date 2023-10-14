/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable  @typescript-eslint/non-nullable-type-assertion-style */

import { type NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import Content from "../content";
import { type Material } from "u/interfaces/material";
import { Mousewheel } from "swiper/modules";

import "swiper/css";
import 'swiper/css/pagination';
import { useCallback, useRef } from "react";

interface Props {
  materials: Material[] | undefined
}

const CarouselStack: NextPage<Props> = ({
  materials
}) => {
  const mainSwiperRef = useRef<any>(null);

  const handleMainNext = useCallback(() => {
    if (!mainSwiperRef.current) return;
    mainSwiperRef.current.swiper.slideNext();
  }, []);

  const handleMainPrev = useCallback(() => {
    if (!mainSwiperRef.current) return;
    mainSwiperRef.current.swiper.slidePrev();
  }, []);

  return (
    <div className="container-fluid md:container md:mx-auto px-6 md:px-unset cursor-pointer">
      <div>
        <Swiper
          init={false}
          ref={mainSwiperRef}
          centeredSlides
          mousewheel
          slidesPerView={1}
          spaceBetween={10}
          modules={[Mousewheel]}
          breakpoints={{
            640: {
              slidesPerView:1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}>
          {
            materials?.map((material) => {
              return <SwiperSlide key={material.id} className="h-full">
                <Content material={material}></Content>
              </SwiperSlide>
            })
          }
        </Swiper>
      </div>
      <div className="w-full flex justify-end items-center pt-5 gap-4 md:hidden">
        <button className="bg-zinc-300 text-zinc-800 px-6 py-2 rounded" onClick={handleMainPrev}>Prev</button>
        <button className="bg-zinc-300 text-zinc-800 px-6 py-2 rounded" onClick={handleMainNext}>Next</button>
      </div>
    </div>
  );
}

export default CarouselStack;
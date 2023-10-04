import { type NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import Content from "../content";
import { type Material } from "u/interfaces/material";
import { Mousewheel } from "swiper/modules";

import "swiper/css";
import 'swiper/css/pagination';

interface Props {
  materials: Material[] | undefined
}

const CarouselStack: NextPage<Props> = ({
  materials
}) => {
  return (
    <div className="container-fluid md:container md:mx-auto px-6 md:px-unset cursor-pointer">
      <Swiper
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
        }}
      >
        {
          materials?.map((material) => {
            return <SwiperSlide key={material.id} className="h-full">
              <Content material={material}></Content>
            </SwiperSlide>
          })
        }
      </Swiper>
    </div>
  );
}

export default CarouselStack;
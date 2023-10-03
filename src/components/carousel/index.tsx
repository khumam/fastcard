import { type NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Material } from "@prisma/client";
import Content from "../content";

import "swiper/css";
import 'swiper/css/pagination';

interface Props {
  materials: Material[] | undefined
}

const CarouselStack: NextPage<Props> = ({
  materials
}) => {
  return (
    <div className="container mx-auto cursor-pointer">
      <Swiper
        centeredSlides
        slidesPerView={2}
        spaceBetween={30}>
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
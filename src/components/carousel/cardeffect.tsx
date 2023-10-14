/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable  @typescript-eslint/non-nullable-type-assertion-style */

import { type NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Code, type Material } from "@prisma/client";
import { EffectFlip } from 'swiper/modules';
import { useCallback, useRef } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import "swiper/css";
import 'swiper/css/effect-flip';

interface Props {
  material: Material | undefined
  code: Code | undefined
}

const CarouselCardEffect: NextPage<Props> = ({
  material,
  code
}) => {
  const swiperRef = useRef<any>(null);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  return (
    <Swiper
      init={false}
      ref={swiperRef}
      className="doubleswiper"
      effect={'flip'}
      modules={[EffectFlip]}>
        <SwiperSlide className="">
        <div className="bg-white p-10 rounded border border-zinc-200 flex flex-col justify-between gap-5 min-h-[390px] overflow-auto">
          <div>
            <h1 className="text-4xl font-medium text-slate-600 mb-4">{material?.title}</h1>
            <p className="font-normal dium text-lg text-slate-400">{material?.content}</p>
          </div>
          <div className="w-full flex items-end gap-1 justify-end pt-8">
            <button onClick={handleNext} className="text-zinc-500 flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
              <p>flip!</p>
            </button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="bg-white p-10 rounded border border-zinc-200 flex flex-col justify-between gap-5" onClick={handlePrev}>
            <div>
              <h1 className="text-2xl font-medium text-slate-600 mb-3">{code?.title}</h1>
              <SyntaxHighlighter style={materialDark} showLineNumbers wrapLongLines language={code?.language}>{code?.codes as string}</SyntaxHighlighter>
            </div>
            <div className="w-full flex items-end gap-1 justify-end pt-8">
              <button onClick={handlePrev} className="text-zinc-500 flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <p>flip!</p>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  );
}

export default CarouselCardEffect;
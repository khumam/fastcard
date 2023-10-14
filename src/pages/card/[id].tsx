import { type NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Base from "u/components/base";
import CardStack from "u/components/cardstack";
import CarouselStack from "u/components/carousel";
import Loading from "u/components/loading";
import { type Material } from "u/interfaces/material";
import { api } from "u/utils/api";
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Card: NextPage = () => {
  const router = useRouter();
  const [isCarousel, setIsCarousel] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const { data, isLoading } = api.cardRouter.get.useQuery({ id: router.query.id as string });
  const visitor = api.visitorRouter.get.useQuery({ id: router.query.id as string });
  const currentUrl = "https://fastcard.dev/card/" + data?.id;

  const handleBack = () => {
    router.back();
  }

  const handleIsCarousel = () => {
    setIsCarousel(!isCarousel);
  }

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }
  
  return isLoading ? (<Loading />) :  (
    <Base>
      <div className="bg-slate-50 border-b border-slate-300">
        <div className="px-6 md:px-unset md:container md:mx-auto py-8">
          <button className="mb-6 text-slate-600 text-lg rounded flex items-center gap-3" onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All cards
          </button>
          <h1 className="text-5xl font-bold text-slate-700 mb-3">{data?.title}</h1>
          <p className="text-slate-500 text-lg">{data?.description}</p>
          <div className="flex gap-3 mt-6">
            <button className="bg-slate-500 hover:bg-slate-600 text-white py-2 px-6 rounded flex gap-3" onClick={handleIsCarousel}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
              </svg>
              <span className="hidden md:block">{isCarousel ? 'Card stack view' : 'Carousel view'}</span>
            </button>
            <Link href="https://github.com/khumam/fastcard" target="_blank" className="bg-amber-400 hover:bg-amber-500 text-slate-800 py-2 px-6 rounded flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
              <span className="hidden md:block">Suggest changes</span>
            </Link>
          </div>
        </div>
        <div className="md:container mx-auto">
          <div className="border-t border-l border-r border-slate-300 rounded-t px-6 md:px-3 py-3 grid grid-cols-1 md:flex md:justify-between md:items-center">
            <div className="flex gap-4 items-center mb-4 md:mb-0 justify-center md:justify-start">
              <span className="text-slate-600">{data?.materials.length} cards</span>
              <span>·</span>
              <span className="text-slate-600">{visitor?.data?.total} reads</span>
              <span>·</span>
              <span className="text-slate-600">0 shares</span>
            </div>
            <div className="flex justify-center md:justify-normal">
              <CopyToClipboard text={currentUrl} onCopy={handleCopy}>
                <button className={`flex ${isCopied ? 'text-emerald-600 hover:text-emerald-800' : 'text-slate-600 hover:text-slate-800'} gap-2 items-center`}>
                  {
                    isCopied
                      ? <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Link copied
                      </>
                      : <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                        </svg>
                        Share this cards
                      </>
                  }
                </button>
              </CopyToClipboard>
            </div>
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
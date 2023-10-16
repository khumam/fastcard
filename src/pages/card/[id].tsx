import { type NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Base from "u/components/base";
import CardStack from "u/components/cardstack";
import Loading from "u/components/loading";
import { api } from "u/utils/api";
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Card: NextPage = () => {
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);
  const { mutate } = api.shareRouter.upsert.useMutation();
  const card = api.cardRouter.get.useQuery({ slug: router.query.id as string});
  const visitor = api.visitorRouter.get.useQuery({ id: card?.data?.id as unknown as string });
  const sharedata = api.shareRouter.get.useQuery({ id: card?.data?.id as unknown as string });
  const currentUrl = "https://fastcard.dev/card/" + card?.data?.slug;

  const handleBack = () => {
    router.back();
  }

  const handleCopy = () => {
    handleShare();
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  const handleShare = () => {
    mutate({ id: router.query.id as string });
  }
  
  return card?.isLoading ? (<Loading />) :  (
    <Base title={card?.data?.title} description={card?.data?.description}>
      <div className="bg-slate-50 border-b border-slate-300">
        <div className="px-6 md:px-unset md:container md:mx-auto py-8">
          <button className="mb-6 text-slate-600 text-lg rounded flex items-center gap-3" onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All cards
          </button>
          <h1 className="text-5xl mb-3 font-bold">{card?.data?.title}</h1>
          <p className="text-slate-700 text-lg">{card?.data?.description}</p>
          <div className="flex gap-3 mt-6">
            <Link href="https://github.com/khumam/fastcard" target="_blank" className="bg-amber-400 hover:bg-amber-500 text-slate-800 py-2 px-6 rounded flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              <span className="hidden md:block no-underline font-medium">Suggest changes</span>
            </Link>
          </div>
        </div>
        <div className="md:container mx-auto">
          <div className="border-t border-l border-r border-slate-300 rounded-t px-6 md:px-3 py-3 grid grid-cols-1 md:flex md:justify-between md:items-center">
            <div className="flex gap-4 items-center mb-4 md:mb-0 justify-center md:justify-start">
              <span className="text-slate-600">{(card?.data?.materials as unknown as string).split("\\").length} cards</span>
              <span>·</span>
              <span className="text-slate-600">{visitor?.data?.total ?? 0} reads</span>
              <span>·</span>
              <span className="text-slate-600">{sharedata?.data?.total ?? 0} shares</span>
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
        <CardStack materials={card?.data?.materials as unknown as string}></CardStack>
      </div>
    </Base>
  );
}

export default Card;
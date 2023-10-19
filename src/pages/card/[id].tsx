import { type NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Base from "u/components/base";
import CardStack from "u/components/cardstack";
import { api } from "u/utils/api";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MessageSquare, Upload, CheckCircle, ArrowLeft } from 'lucide-react';


const Card: NextPage = () => {
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);
  const { mutate } = api.shareRouter.upsert.useMutation();
  const card = api.cardRouter.get.useQuery({ slug: router.query.id as string});
  const visitor = api.visitorRouter.get.useQuery({ id: card?.data?.id as unknown as string });
  const sharedata = api.shareRouter.get.useQuery({ id: card?.data?.id as unknown as string });
  const currentUrl = "https://fastcard.dev/card/" + card?.data?.slug;
  const materials = card?.data?.materials as unknown as string;

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
    mutate({ id: card?.data?.id as unknown as string });
  }
  
  return (
    <Base
      title={ card?.data?.title + " | Fastcard Developer Guide" } 
      description={ card?.data?.description as unknown as string }
      url={"https://www.fastcard.dev/card/" + card?.data?.slug}
      image="https://www.fastcard.dev/fastcard.png"
      altImage="Fastcard.dev helps you understand the basic knowledge about everything in the developer world. We as community have also built this platform to guide you if you already know the roadmap for your journey. Start exploring, or you can also contribute"
    >
      <div className="bg-slate-50 border-b border-slate-300">
        <div className="px-6 md:px-unset md:container md:mx-auto py-8">
          <button className="mb-6 text-slate-600 text-lg rounded flex items-center gap-3" onClick={handleBack}>
            <ArrowLeft />
            All cards
          </button>
          <h1 className="text-5xl mb-3 font-bold">{card?.data?.title}</h1>
          <p className="text-slate-700 text-lg">{card?.data?.description}</p>
          <div className="flex gap-3 mt-6">
            <Link href="https://github.com/khumam/fastcard" target="_blank" className="bg-amber-400 hover:bg-amber-500 text-slate-800 py-2 px-6 rounded flex gap-3">
              <MessageSquare />
              <span className="hidden md:block no-underline font-medium">Suggest changes</span>
            </Link>
          </div>
        </div>
        <div className="md:container mx-auto">
          <div className="border-t border-l border-r border-slate-300 rounded-t px-6 md:px-3 py-3 grid grid-cols-1 md:flex md:justify-between md:items-center">
           <div className="flex gap-4 items-center mb-4 md:mb-0 justify-center md:justify-start">
              <span className="text-slate-600">{materials ? materials.split("\\").length : 0} cards</span>
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
                        <CheckCircle />
                        Link copied
                      </>
                      : <>
                        <Upload />
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
      <CardStack materials={materials as unknown as string}></CardStack>
      </div>
    </Base>
  );
}

export default Card;
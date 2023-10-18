import { type NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Base from "u/components/base";
import CardStack from "u/components/cardstack";
import Loading from "u/components/loading";
import { api } from "u/utils/api";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MessageSquare, Upload, CheckCircle, ArrowLeft } from 'lucide-react';
import { Helmet } from "react-helmet";
import LoadingTitle from "u/components/loading/loadingtitle";
import LoadingCardStats from "u/components/loading/loadingcardstats";
import LoadingCardMaterial from "u/components/loading/loadingcardmaterial";


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
    mutate({ id: card?.data?.id as unknown as string });
  }
  
  return (
    <Base>
      {
        !card?.isLoading &&
        <Helmet>
          <title>{ card?.data?.title } | Fastcard Developer Guide</title>
          <meta name="description" content={ card?.data?.description }/>
          <meta property="og:url" content="https://fastcard.dev"/>
          <meta property="og:title" content={ card?.data?.title  + " | Fastcard Developer Guide" } />
          <meta property="og:description" content={ card?.data?.description }/>
          <meta property="og:image" content="https://fastcard.dev/favicon.png"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="twitter:domain" content="https://fastcard.dev"/>
          <meta property="twitter:url" content="https://fastcard.dev"/>
          <meta name="twitter:title" content={ card?.data?.title  + " | Fastcard Developer Guide" }/>
          <meta name="twitter:description" content={ card?.data?.description }/>
          <meta name="twitter:image" content="https://fastcard.dev/favicon.png"></meta>
        </Helmet>
      }
      <div className="bg-slate-50 border-b border-slate-300">
        <div className="px-6 md:px-unset md:container md:mx-auto py-8">
          <button className="mb-6 text-slate-600 text-lg rounded flex items-center gap-3" onClick={handleBack}>
            <ArrowLeft />
            All cards
          </button>
          {
            card?.isLoading
              ? <LoadingTitle />
              : <>
                <h1 className="text-5xl mb-3 font-bold">{card?.data?.title}</h1>
                <p className="text-slate-700 text-lg">{card?.data?.description}</p>
              </>
          }
          <div className="flex gap-3 mt-6">
            <Link href="https://github.com/khumam/fastcard" target="_blank" className="bg-amber-400 hover:bg-amber-500 text-slate-800 py-2 px-6 rounded flex gap-3">
              <MessageSquare />
              <span className="hidden md:block no-underline font-medium">Suggest changes</span>
            </Link>
          </div>
        </div>
        <div className="md:container mx-auto">
          <div className="border-t border-l border-r border-slate-300 rounded-t px-6 md:px-3 py-3 grid grid-cols-1 md:flex md:justify-between md:items-center">
            {
              card?.isLoading
                ? <LoadingCardStats />
                :  <div className="flex gap-4 items-center mb-4 md:mb-0 justify-center md:justify-start">
                  <span className="text-slate-600">{(card?.data?.materials as unknown as string).split("\\").length} cards</span>
                  <span>·</span>
                  <span className="text-slate-600">{visitor?.data?.total ?? 0} reads</span>
                  <span>·</span>
                  <span className="text-slate-600">{sharedata?.data?.total ?? 0} shares</span>
                </div>
            }
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
        {
          card?.isLoading
            ? <LoadingCardMaterial />
            : <CardStack materials={card?.data?.materials as unknown as string}></CardStack>
        }
      </div>
    </Base>
  );
}

export default Card;
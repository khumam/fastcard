import { type NextPage } from "next";
import { useRouter } from "next/router";
import Base from "u/components/base";
import CarouselStack from "u/components/carousel";
import { api } from "u/utils/api";

const Card: NextPage = () => {
  const router = useRouter();
  const { data, isLoading } = api.cardRouter.get.useQuery({id: router.query.id as string});
  console.log(data, isLoading);
  
  return (
    <Base>
      <div className="bg-zinc-50">
        <div className="container mx-auto py-8">
          <button className="mb-6 text-zinc-600 rounded flex gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All cards
          </button>
          <h1 className="text-3xl font-bold text-zinc-700 mb-2">{data?.title}</h1>
          <p className="text-zinc-500">{data?.description}</p>
          <div className="flex gap-3">
            <button className="bg-amber-500 mt-6 text-white py-2 px-6 rounded flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="bg-zinc-200 w-full h-px"></div>
      <div className=" bg-zinc-100 py-16">
        <CarouselStack materials={data?.materials}></CarouselStack>
      </div>
    </Base>
  );
}

export default Card;
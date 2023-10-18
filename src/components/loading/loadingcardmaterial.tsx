import { type NextPage } from "next";

const LoadingCardMaterial: NextPage = () => {
  return (
    <div className="md:container md:mx-auto animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-0">
        <div className="bg-slate-300/20 border rounded min-h-[390px] overflow-auto maincard h-full"></div>
        <div className="bg-slate-300/20 border rounded min-h-[390px] overflow-auto maincard h-full"></div>
      </div>
    </div>
  );
}

export default LoadingCardMaterial;
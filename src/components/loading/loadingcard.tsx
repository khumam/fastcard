import { type NextPage } from "next";

const LoadingCard: NextPage = () => {
  return (
    <div className="animate-pulse">
      <div className="flex items-center">
        <div className="text-slate-500 text-lg whitespace-nowrap py-2 px-8 rounded border border-slate-700/60 border-1">
          <div className="h-7  w-36 rounded-full"></div>
        </div>
        <div className="h-[0.7px] bg-slate-700/60 w-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="bg-slate-500/10 h-12 w-full rounded mt-4"></div>
      </div>
    </div>
  );
}

export default LoadingCard;
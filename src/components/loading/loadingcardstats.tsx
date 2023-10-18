import { type NextPage } from "next";

const LoadingCardStats: NextPage = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-slate-300/50 h-5 w-56 animate-pulse"></div>
    </div>
  );
}

export default LoadingCardStats;
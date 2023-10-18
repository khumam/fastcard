import { type NextPage } from "next";

const LoadingTitle: NextPage = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-slate-300/50 h-20 mb-3 rounded w-52"></div>
      <div className="bg-slate-300/50 h-5 rounded w-full"></div>
    </div>
  );
}

export default LoadingTitle;
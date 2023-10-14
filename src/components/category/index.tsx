import { type NextPage } from "next";

interface Props {
  name: string
}

const CategoryStack: NextPage<Props> = ({
  name
}) => {
  return (
    <div className="flex items-center">
      <span className="text-slate-500 text-lg whitespace-nowrap py-2 px-8 rounded border border-slate-700/60 border-1">{name}</span>
      <div className="h-[0.7px] bg-slate-700/60 w-full"></div>
    </div>
  );
}

export default CategoryStack;
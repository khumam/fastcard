import { type NextPage } from "next";
import { useRouter } from "next/router";
import { type MouseEvent } from "react";

interface Props {
  id: string
  name: string
}

const Card: NextPage<Props> = ({
  id,
  name
}) => {
  const router = useRouter();
  const handleOnMouseMove = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    const { currentTarget: target } = event;
    const rect = target.getBoundingClientRect(),
      x = event.clientX - rect.left,
      y = event.clientY - rect.top;
    
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const goToDetail = (id: string): void => {
    void router.push('/card/' + id);
  }

  return (
    <div className="relative text-lg cursor-pointer bg-slate-800/50 border border-slate-700 py-3 px-5 rounded flex items-center flex-col md:flex-row gap-4 card w-full" onMouseMove={(event) => handleOnMouseMove(event)} onClick={() => goToDetail(id)}>
      <div className="text-center md:text-left">
        <h1 className="text-slate-400">{name}</h1>
      </div>
    </div>
  );
}

export default Card;
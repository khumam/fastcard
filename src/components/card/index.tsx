import { type NextPage } from "next";
import { type MouseEvent } from "react";
import { api } from "u/utils/api";
import LatestIcon from "./newcard";

interface Props {
  id: string
  name: string
  slug: string
  isNew: boolean
}

const Card: NextPage<Props> = ({
  id,
  name,
  slug,
  isNew
}) => {
  const { mutate } = api.visitorRouter.upsert.useMutation();
  const handleOnMouseMove = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    const { currentTarget: target } = event;
    const rect = target.getBoundingClientRect(),
      x = event.clientX - rect.left,
      y = event.clientY - rect.top;
    
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleVisitorClick = () => {
    mutate({id});
  }

  return (
    <a href={"card/" + slug}>
      <div className="relative text-lg cursor-pointer bg-slate-800/50 border border-slate-700 py-3 px-5 rounded flex justify-between items-center gap-4 card w-full" onMouseMove={(event) => handleOnMouseMove(event)} onClick={handleVisitorClick}>
        <div className="text-left">
          <h1 className="text-slate-400">{name}</h1>
        </div>
        {
          isNew
          ? <LatestIcon />
            : <></>
        }
        
      </div>
    </a>
  );
}

export default Card;
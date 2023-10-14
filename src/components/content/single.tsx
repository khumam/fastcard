import { type NextPage } from "next";
import Markdown from "react-markdown";
import { type Material } from "u/interfaces/material";

interface Props {
  material: Material
}

const ContentSingle: NextPage<Props> = ({
  material
}) => {
  return (
    <div className="bg-white p-10 border border-zinc-200 rounded min-h-[390px] overflow-auto">
      <h1 className="text-4xl font-medium text-slate-600 mb-4">{material.title}</h1>
      <p className="font-normal text-lg text-slate-400"><Markdown>{material.content}</Markdown></p>
    </div>
  );
}

export default ContentSingle;
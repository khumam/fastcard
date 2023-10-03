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
    <div className="bg-white p-10 h-full border border-zinc-200 rounded">
      <h1 className="text-2xl font-medium text-gray-600 mb-3">{material.title}</h1>
      <p className="font-normal text-md text-gray-400"><Markdown>{material.content}</Markdown></p>
    </div>
  );
}

export default ContentSingle;
import { type NextPage } from "next";
import Markdown from "react-markdown";

interface Props {
  material: string
}
const Content: NextPage<Props> = ({
  material
}) => {
  return (
    <div className="bg-white px-10 border border-zinc-200 rounded min-h-[390px] overflow-auto maincard h-full">
      <Markdown>{material}</Markdown>
    </div>
  );
}

export default Content;
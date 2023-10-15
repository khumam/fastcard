import { type NextPage } from "next";
import Content from "../content";

interface Props {
  materials: string | undefined
}
const CardStack: NextPage<Props> = ({
  materials
}) => {
  const cards: string[] = materials?.split("\\") as unknown as string[];

  return (
    <div className="md:container md:mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-0">
        {
          cards?.map((item) => {
            return (<div key={item}>
              <Content material={item}></Content>
            </div>);
          })
        }
      </div>
    </div>
  );
}

export default CardStack;
import { type NextPage } from "next";
import { type Material } from "u/interfaces/material";
import Content from "../content";

interface Props {
  materials: Material[] | undefined
}
const CardStack: NextPage<Props> = ({
  materials
}) => {
  return (
    <div className="md:container md:mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-0">
        {
          materials?.map((material) => {
            return (<div key={material.id}>
              <Content material={material}></Content>
            </div>);
          })
        }
      </div>
    </div>
  );
}

export default CardStack;
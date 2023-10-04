import { type NextPage } from "next";
import CarouselCardEffect from "../carousel/cardeffect";
import { type Material } from "u/interfaces/material";

interface Props {
  material: Material
}

const ContentDouble: NextPage<Props> = ({
  material
}) => {
  return (
    <div>
      <CarouselCardEffect material={material} code={material.code}></CarouselCardEffect>
    </div>
  );
}

export default ContentDouble;
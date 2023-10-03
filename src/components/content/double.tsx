import { type Material } from "@prisma/client";
import { type NextPage } from "next";
import CarouselCardEffect from "../carousel/cardeffect";

interface Props {
  material: Material
}

const ContentDouble: NextPage<Props> = ({
  material
}) => {
  return (
    <div className="h-full">
      <CarouselCardEffect material={material} code={material.code}></CarouselCardEffect>
    </div>
  );
}

export default ContentDouble;
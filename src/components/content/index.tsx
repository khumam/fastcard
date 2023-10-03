import { type Material } from "@prisma/client";
import { type NextPage } from "next";
import ContentSingle from "./single";
import ContentDouble from "./double";

interface Props {
  material: Material
}
const Content: NextPage<Props> = ({
  material
}) => {
  return (material.codeId == null)
    ? <ContentSingle material={material}></ContentSingle>
    : <ContentDouble material={material}></ContentDouble>
}

export default Content;
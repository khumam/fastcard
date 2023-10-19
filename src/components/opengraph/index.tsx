import { type NextPage } from "next";
import { Helmet } from "react-helmet";

interface Props {
  title: string
  description: string
  url: string
  image: string
  altImage: string
}

const OpenGraph: NextPage<Props> = ({
  title,
  description,
  url,
  image,
  altImage
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={altImage} />


    </Helmet>
  );
}

export default OpenGraph;
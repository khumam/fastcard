import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface Props {
  children: React.ReactNode[] | React.ReactNode
}

const Base: NextPage<Props> = ({
  children
}) => {
  return (
    <>
      <Head>
        <title>Flashcard</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="description" content="I am a Web Developer and looking for sharing. I am expert and working with HTML,CSS,JavaScript, PHP and MySql for more than 2 years experience."/>
        <meta property="og:url" content="https://khumam.id"/>
        <meta property="og:title" content="Khoerul Umam"/>
        <meta property="og:description" content="Hi I'm a web developer. Love sharing and learn something new. Hopefully we can be a friend."/>
        <meta property="og:image" content="https://khumam.mo.cloudinary.net/photo.jpeg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="khumam.id"/>
        <meta property="twitter:url" content="https://khumam.id"/>
        <meta name="twitter:title" content="Khoerul Umam"/>
        <meta name="twitter:description" content="Hi I'm a web developer. Love sharing and learn something new. Hopefully we can be a friend."/>
        <meta name="twitter:image" content=""></meta>
      </Head>
      <main className="p-5 md:p-0">
        <div className="bg-bg-slate-900">
          <nav className="container mx-auto py-5 flex justify-between items-center">
            <div>
              <Link href="https://khumam.id">
                <Image src="/icons/logo.svg" alt="Flashcard" width={22} height={22}></Image>
              </Link>
            </div>
            <ul className="hidden md:flex items-center justify-center gap-6 text-zinc-500">
              <li><Link className="hover:text-indigo-600" href="#">Cards</Link></li>
              <li><Link className="hover:text-indigo-600" href="#">Roadmaps</Link></li>
              <li><Link className="hover:text-indigo-600" href="#">Guides</Link></li>
              <li><Link className="hover:text-indigo-600" href="#">Best Practices</Link></li>
            </ul>
            <button className="hidden hover:text-white md:block px-5 py-3 bg-indigo-600 hover:bg-indigo-700 font-medium text-zinc-100 rounded">Contribute</button>
          </nav>
        </div>
        {children}
        <div className="text-center py-12">
          <p className="text-zinc-500">Copyrights &copy; Khoerul Umam 2023</p>
        </div>
      </main>
    </>
  );
}

export default Base;
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
        <title>Fastcard | Developer Guide</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="description" content="Fastcard.dev helps you understand the basic knowledge about everything in the developer world."/>
        <meta property="og:url" content="https://fastcard.dev"/>
        <meta property="og:title" content="Developer Fastcard"/>
        <meta property="og:description" content="Fastcard.dev helps you understand the basic knowledge about everything in the developer world."/>
        <meta property="og:image" content="https://fastcard.dev/favicon.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="fastcard.dev"/>
        <meta property="twitter:url" content="https://fastcard.dev"/>
        <meta name="twitter:title" content="Developer Fastcard"/>
        <meta name="twitter:description" content="Fastcard.dev helps you understand the basic knowledge about everything in the developer world."/>
        <meta name="twitter:image" content=""></meta>
      </Head>
      <main className="p-5 md:p-0">
        <div className="bg-bg-slate-900">
          <nav className="container mx-auto py-5 flex justify-between items-center">
            <div>
              <Link href="https://fastcard.dev">
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
          <p className="text-zinc-500">Copyrights &copy; Fastcard 2023</p>
        </div>
      </main>
    </>
  );
}

export default Base;
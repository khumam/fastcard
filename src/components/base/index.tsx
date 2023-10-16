import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Github } from 'lucide-react';
import { Menu, X } from 'lucide-react';

interface Props {
  children: React.ReactNode[] | React.ReactNode
  title: string | undefined
  description: string | undefined
}

const Base: NextPage<Props> = ({
  children,
  title = null,
  description = null
}) => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(true);
  const handleNavbar = () => {
    setIsNavbarHidden(!isNavbarHidden);
  }

  return (
    <>
      <Head>
        <title>Fastcard | Developer Guide</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="description" content={description ?? "Fastcard.dev helps you understand the basic knowledge about everything in the developer world."}/>
        <meta property="og:url" content="https://fastcard.dev"/>
        <meta property="og:title" content={title ?? "Developer Fastcard"} />
        <meta property="og:description" content={description ?? "Fastcard.dev helps you understand the basic knowledge about everything in the developer world."}/>
        <meta property="og:image" content="https://fastcard.dev/favicon.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="fastcard.dev"/>
        <meta property="twitter:url" content="https://fastcard.dev"/>
        <meta name="twitter:title" content={title ?? "Developer Fastcard"}/>
        <meta name="twitter:description" content={description ?? "Fastcard.dev helps you understand the basic knowledge about everything in the developer world."}/>
        <meta name="twitter:image" content="https://fastcard.dev/favicon.png"></meta>
        <script async src="https://analytics.eu.umami.is/script.js" data-website-id="c2fb6441-988f-401a-aa65-a77c9ab0977e"></script>
      </Head>
      <main>
        <div className="bg-bg-slate-900">
          <div className="md:container md:mx-auto">
            <nav className="py-8 flex justify-between items-center px-6 md:px-0">
              <div>
                <Link href="https://fastcard.dev" className="flex gap-4 items-center">
                  <Image src="/icons/logo.svg" alt="Flashcard" width={30} height={30}></Image>
                  <h1 className="text-slate-400 text-xl">Fastcard</h1>
                </Link>
              </div>
              <ul className="hidden md:flex items-center justify-center gap-6 text-slate-500">
                <li><Link className="hover:text-indigo-600 text-xl" href="#">Cards</Link></li>
                <li><Link className="hover:text-indigo-600 text-xl" href="#">Roadmaps</Link></li>
                <li><Link className="hover:text-indigo-600 text-xl" href="#">Guides</Link></li>
                <li><Link className="hover:text-indigo-600 text-xl" href="#">Best Practices</Link></li>
              </ul>
              <Link href="https://github.com/khumam/fastcard/issues/new/choose" target="_blank" className="hidden hover:text-white md:block px-5 py-3 bg-indigo-800 hover:bg-indigo-700 font-medium text-slate-100 rounded-full">Contribute</Link>
              <button className="text-white block md:hidden text-xl" onClick={handleNavbar}>
                <Menu />
              </button>
              <div className="md:hidden bg-gradient-to-tr from-slate-800 to-slate-950 h-screen w-full z-10 fixed top-0 left-0 p-6" hidden={isNavbarHidden}>
                <div className="text-slate-300 flex justify-end mb-16 mt-3" onClick={handleNavbar}>
                  <X />
                </div>
                <div className="">
                  <ul className="flex flex-col items-center justify-center gap-6 text-slate-500">
                    <li><Link className="hover:text-indigo-600 text-xl" href="#">Cards</Link></li>
                    <li><Link className="hover:text-indigo-600 text-xl" href="#">Roadmaps</Link></li>
                    <li><Link className="hover:text-indigo-600 text-xl" href="#">Guides</Link></li>
                    <li><Link className="hover:text-indigo-600 text-xl" href="#">Best Practices</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {children}
        <div className="bg-slate-200 px-8 py-16 md:p-24">
          <div className="md:container mx-auto flex flex-col gap-4 justify-center text-center">
            <h1 className="text-6xl text-slate-800 font-bold">Community</h1>
            <p className="text-slate-500 text-lg">We want to share from the community to the community various things related to developers, programming, engineering, and other related topics.</p>
            <div className="flex w-full justify-center mt-6">
              <Link href="https://github.com/khumam/fastcard" target="_blank" className="py-2 px-6 rounded-full border border-slate-500 text-slate-600 hover:bg-slate-300 flex justify-center gap-4 items-center">
                <Github />
                Join to our community
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 py-16 md:container md:mx-auto px-6 md:px-0">
          <div className="text-center">
            <div className="flex gap-2 items-center mb-4 justify-center">
              <Link href="https://fastcard.dev" className="flex gap-4 items-center">
                <Image src="/icons/logo.svg" alt="Flashcard" width={30} height={30}></Image>
                <h1 className="text-slate-200 text-xl">Fastcard.dev</h1>
              </Link>
              <h1 className="text-xl text-slate-300">by<Link href="https://github.com/khumam" className="bg-blue-700 text-white ml-2 py-1 px-2 rounded hover:bg-blue-800">@khumam</Link></h1>
            </div>
            <div className="md:container">
              <p className="text-slate-500 text-lg">Community created cards, articles, resources and journeys to help you understanding developers, programming, engineering, and other related topics. Inspired by roadmap.sh</p>
            </div>
            <div className="flex mt-4 text-slate-400 text-center w-full justify-center">
              <span>&copy; Fastcard 2023</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Base;
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  children: React.ReactNode[] | React.ReactNode
}

const Base: NextPage<Props> = ({
  children
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
      <main>
        <div className="bg-bg-slate-900">
          <div className="md:container md:mx-auto">
            <nav className="py-8 flex justify-between items-center px-6 md:px-0">
              <div>
                <Link href="https://fastcard.dev">
                  <Image src="/icons/logo.svg" alt="Flashcard" width={30} height={30}></Image>
                </Link>
              </div>
              <ul className="hidden md:flex items-center justify-center gap-6 text-zinc-500">
                <li><Link className="hover:text-indigo-600 text-xl" href="#">Cards</Link></li>
                <li><Link className="hover:text-indigo-600 text-xl" href="#">Roadmaps</Link></li>
                <li><Link className="hover:text-indigo-600 text-xl" href="#">Guides</Link></li>
                <li><Link className="hover:text-indigo-600 text-xl" href="#">Best Practices</Link></li>
              </ul>
              <button className="hidden hover:text-white md:block px-5 py-3 bg-indigo-800 hover:bg-indigo-700 font-medium text-slate-100 rounded">Contribute</button>
              <button className="text-white block md:hidden text-xl" onClick={handleNavbar}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
              </button>
              <div className="md:hidden bg-gradient-to-tr from-slate-800 to-slate-950 h-screen w-full z-10 fixed top-0 left-0 p-8" hidden={isNavbarHidden}>
                <div className="text-slate-500 flex justify-end mb-16" onClick={handleNavbar}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="">
                  <ul className="flex flex-col items-center justify-center gap-6 text-zinc-500">
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
        <div className="text-center py-12">
          <p className="text-zinc-500">Copyrights &copy; Fastcard 2023</p>
        </div>
      </main>
    </>
  );
}

export default Base;
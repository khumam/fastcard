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
              <Link href="https://github.com/khumam/fastcard" target="_blank" className="hidden hover:text-white md:block px-5 py-3 bg-indigo-800 hover:bg-indigo-700 font-medium text-slate-100 rounded-full">Contribute</Link>
              <button className="text-white block md:hidden text-xl" onClick={handleNavbar}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
              </button>
              <div className="md:hidden bg-gradient-to-tr from-slate-800 to-slate-950 h-screen w-full z-10 fixed top-0 left-0 p-8" hidden={isNavbarHidden}>
                <div className="text-slate-500 flex justify-end mb-16" onClick={handleNavbar}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
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
                <svg width="30px" height="30px" viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                  <g fill="#161614">
                  <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/>
                  <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/>
                  </g>
                </svg>
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
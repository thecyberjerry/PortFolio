import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ weight: ['300'], subsets: ['latin'] })
const Navbar = (props) => {
  const router = useRouter();
  const active = (path) => {
    return router.asPath === path;
  }
  return (
    <div className={`bg-black shadow-2xl ${montserrat.className}`}>
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
              src="/images/White logo - no background.png"
              width={250}
              height={250}
              alt="Picture of the author"
            />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center md:space-x-36">
            <Link href="/" className={`mr-5 hover:text-yellow-500 cursor-pointer hover:-translate-y-1  border-4 border-transparent transition ${active("/") && "border-b-yellow-300"}`} >{props.first}</Link>
            <Link href="/about" className={`mr-5 hover:text-yellow-500 cursor-pointer hover:-translate-y-1 border-4 border-transparent  transition ${active("/about") && "border-b-yellow-300"}`}  >{props.second}</Link>
            <Link href="/blogs" className={`mr-5 hover:text-yellow-500 cursor-pointer hover:-translate-y-1  border-4 border-transparent transition ${active("/blogs") && "border-b-yellow-500"}`}  >{props.fourth}</Link>
            <Link href="/contact" className={`mr-5 hover:text-yellow-500 cursor-pointer hover:-translate-y-1  border-4 border-transparent transition ${active("/contact") && "border-b-yellow-300"}`}  >{props.third}</Link>
          </nav>
          <button className="hover:translate-x-2 inline-flex items-center transition border-2 border-yellow-500 py-1 px-3 focus:outline-none hover:bg-yellow-500 rounded text-base mt-4 md:mt-0"><Link href='mailto:himanshusharma2719@gmail.com'>{props.email}</Link>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
Navbar.defaultProps =
{
  first: "Home",
  second: "About",
  third: "Contact",
  fourth: "Blogs",
  email: "Email Me"
}
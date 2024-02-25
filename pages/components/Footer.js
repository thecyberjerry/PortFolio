import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ weight: ['300'], subsets: ['latin'] })

const Footer = () => {
  return (
    <div>
      <hr />
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <footer className={`text-white body-font bg-black ${montserrat.className}`}>
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <Image
              src="/images/White logo - no background.png"
              width={250}
              height={250}
              alt="Picture of the author"
            />
            <p className="mt-2 text-sm text-white-500">Explore my portfolio for blogs, hire and collaborate opportunities, and discover my tech stack expertise. Get in touch!</p>
          </div>
          <div className="flex-grow flex justify-center items-center   flex-wrap md:pr-20 -mb-10 md:text-left text-center  order-first ">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white-900 tracking-widest text-lg mb-3 border-2 border-transparent border-b-yellow-500">SITEMAP</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/" className=" hover:text-yellow-500 atext-white-600 hover:text-white-800">Home</Link>
                </li>
                <li>
                  <Link href="/about" className=" hover:text-yellow-500 atext-white-600 hover:text-white-800">About</Link>
                </li>
                <li>
                  <Link href="/contact" className=" hover:text-yellow-500 atext-white-600 hover:text-white-800">Contact</Link>
                </li>
                <li>
                  <Link href="/submitbug" className=" hover:text-yellow-500 atext-white-600 hover:text-white-800">Submit a Bug</Link>
                </li>
                <li>
                  <Link className="hover:text-yellow-500 text-white-600 hover:text-white-800" href='mailto:himanshusharma2719@gmail.com'>Email</Link>
                </li>
              </nav>
            </div>

          </div>
        </div>
        <div className="bg-[#1c1c1c]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-yellow-500 text-sm text-center sm:text-left">© 2024 Himanshu.Folio —
              <a href="https://instagram.com/himanshupandat19" rel="noopener noreferrer" className="text-white ml-1" target="_blank">Made with ❤️  by @himanshupandat19 </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href="https://instagram.com/himanshupandat19" target='_blank' className="ml-3 text-white">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
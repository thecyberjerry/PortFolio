import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
const montserrat = Montserrat({ weight: ['300'], subsets: ['latin'] })

export default function blogs({ repo }) {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  const [blogdata, setblogdata] = useState(repo)
  return (
    <>
      <div className={`${montserrat.className}`}>
        <Head>
          <title>Blogs</title>

        </Head>
        <Navbar />
        <div className='text-center text-3xl md:text-6xl  flex flex-col items-center justify-center'>
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://lottie.host/f75888e7-3fb1-4fe0-9e48-c8897ac00192/koNWY68iOu.json"
            style={{ width: "300px", height: "300px" }}
          ></lottie-player>
          <p className='border-4 border-transparent border-b-yellow-300'>Some of my blogs</p>
        </div>
        <hr className='my-10' />
        {blogdata && blogdata.map((item) => {
          return (<>
            <section className="text-gray-600 my-28 body-font" key={item.slug}>
              <div className="container px-5 mx-auto">
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                  <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                    <i className="text-[4rem] fa-solid fa-blog"></i>
                  </div>
                  <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 className="text-gray-900 text-3xl  title-font font-medium mb-2">{item.title}</h2>
                    <p className="leading-relaxed text-base">{item.desc.slice(0, 150)}...</p>
                    <p className='text-sm  py-5'>By {item.author + " on" + item.date}</p>
                    <Link href={`/allblogs/${item.slug}`} className="mt-3 text-yellow-500 inline-flex items-center cursor-pointer">Read Blog
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </>
          )
        })}

        <Footer />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/fetchblogs')
  const repo = await res.json()
  return { props: { repo } }
}
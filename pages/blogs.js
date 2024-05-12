import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Aos from "aos";
import 'aos/dist/aos.css'

const montserrat = Montserrat({ weight: ['300'], subsets: ['latin'] });

export default function Blogs({ repo }) {
  useEffect(() => {
    Aos.init();
  }, [])
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  const [blogdata, setBlogData] = useState(repo);
  useEffect(() => {
    fetch("api/fetchblogs").then((data) => { return data.json() }).then((response) => { return setBlogData(response) })
  }, [])
  return (
    <>
      <div className={`${montserrat.className}`}>
        <Head>
          <title>Blogs</title>
        </Head>
        <Navbar />
        <div data-aos="fade-in" className='text-center text-3xl md:text-6xl  flex flex-col items-center justify-center'>
          <lottie-player
            id="firstLottie"
            autoplay
            loop
            mode="normal"
            src="https://lottie.host/f75888e7-3fb1-4fe0-9e48-c8897ac00192/koNWY68iOu.json"
            style={{ width: "300px", height: "300px" }}
          ></lottie-player>
          <p className='border-4 border-transparent border-b-yellow-300'>Some of my blogs</p>
        </div>
        <hr className='my-10' />
        {!blogdata?<div className='my-3 justify-center flex flex-col items-center'><Image src="/images/loading.gif" height={100} width={100} className='md:w-44'></Image>
        <p>Fetching Blogs...</p></div>:<div>{blogdata && blogdata.map((item) => (
          <section data-aos="fade-up" className="text-gray-600 my-28 body-font" key={item.slug}>
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
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}</div>}
        
        <Footer />
      </div>
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/api/fetchblogs');
//   const repo = await res.json();
//   return { props: { repo } };
// }

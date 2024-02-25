import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ weight: ['300'], subsets: ['latin'] });

export default function Blog({ data }) {
  const [blog, setBlog] = useState(data); // Corrected useState function name

  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <>
      <Navbar />
      <div className={`${montserrat.className}  flex text-left`}>
        <div>
          {blog &&
            <div>
              <Head>
                <title>{blog.title} | By {blog.author}</title>
              </Head>
              <div className=' flex justify-center text-3xl pt-14 font-bold text-center'>
                {blog.title}
              </div>
              <div className='px-10 py-10  md:px-64' dangerouslySetInnerHTML={createMarkup(blog.content)}>
                {/* {blog.content} */}
              </div>
              <div className='flex text-center justify-end px-20 md:px-64'>
                -By {blog.author} on {blog.date}
                <br />
              </div>
            </div>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { blog } = context.query;
  const res = await fetch(`http://localhost:3000/api/getblog?blog=${blog}`);
  const data = await res.json();
  if (res.status === 404) {
    return {
      redirect: {
        permanent: false,
        destination: '/blogs'
      }
    };
  }
  return { props: { data } };
}

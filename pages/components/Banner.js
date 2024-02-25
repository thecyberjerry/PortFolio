import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ weight: ['300'], subsets: ['latin'] })
const Banner = () => {
    return (<>

        <Head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" /></Head>
        <div className={`${montserrat.className}  py-1 shadow-2xl`}>
            <div className=" bg-gray-50 flex items-center ">
                <section className="w-full bg-cover bg-center py-32" style={{ backgroundImage: "url('/images/yellowbanner.jpg')" }}>
                    <div className="container mx-auto text-center text-white">
                        <h1 className="text-5xl font-medium mb-6">Welcome to My Portfolio</h1>
                        <p className="text-2xl mb-12 text-black ">I am Himanshu A Frontend Developer and A Designer <i className="fa-solid fa-code"></i> <span>
                        </span></p>
                        <Link href="/blogs" className="bg-black text-white py-4 px-12 rounded-full hover:bg-white hover:text-black  transition">View Blogs</Link>
                        <br />
                        <span className='relative top-10 text-3xl space-x-10'><a  target="_blank" href='https://linkedin.com/in/thecyberjerry'><i className="hover:-translate-y-2 cursor-pointer transition fa-brands fa-linkedin"></i></a><a target="_blank"  href='https://instagram.com/himanshupandat19'><i className="hover:-translate-y-2 cursor-pointer transition fa-brands fa-instagram"></i></a><a target="_blank"  href='https://twitter.com/thecyberjerry'><i className="hover:-translate-y-2 cursor-pointer transition fa-brands fa-twitter"></i></a><a target="_blank"  href='https://github.com/thecyberjerry'><i className="hover:-translate-y-2 cursor-pointer transition fa-brands fa-github"></i></a></span>
                    </div>
                </section>
            </div>
        </div>

    </>
    )
}

export default Banner
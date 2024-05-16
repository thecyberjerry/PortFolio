import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Aos from "aos";
import 'aos/dist/aos.css'
import Typewriter from 'typewriter-effect';
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ weight: ['300'], subsets: ['latin'] })
const Banner = () => {
    const [toggleType, settoggleType] = useState(false)
    useEffect(() => {
        Aos.init();
        if (typeof window !== "undefined") {
            settoggleType(true)
        }
    }, [])

    return (<>

        <Head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" /></Head>
        <div data-aos="fade-in" className={`${montserrat.className}  py-1 shadow-2xl`}>
            <div className=" bg-gray-50 flex items-center ">
                <section className="w-full bg-cover bg-center py-32" style={{ backgroundImage: "url('/images/yellowbanner.jpg')" }}>
                    <div className="container mx-auto text-center text-white">
                        <h1 className="text-5xl font-medium mb-6">Welcome to My Portfolio</h1>
                        <p className="text-4xl leading-normal mb-12 text-black ">I am Himanshu A Frontend

                            {toggleType ? <Typewriter
                                options={{
                                    strings: ['Developer', 'Designer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /> : ""}
                            

                            <i className="fa-solid fa-code"></i> <span>
                            </span></p>
                        <Link href="https://drive.google.com/file/d/1_CFiiHyWv1KqsW9BHM7sVptUpRZqgNl1/view?usp=sharing" target='_blank' className="bg-black text-white py-4 px-12 rounded-full hover:bg-white hover:text-black hover:border border-black transition">View Resume</Link>
                        <br />
                        <span className='relative top-10 text-3xl space-x-10'><a target="_blank" href='https://linkedin.com/in/thecyberjerry'><i className="hover:-translate-y-2 cursor-pointer transition fa-brands fa-linkedin"></i></a><a target="_blank" href='https://instagram.com/himanshupandat19'><i className="hover:-translate-y-2 cursor-pointer transition fa-brands fa-instagram"></i></a><a target="_blank" href='https://twitter.com/thecyberjerry'><i className="hover:-translate-y-2 cursor-pointer transition fa-brands fa-twitter"></i></a><a target="_blank" href='https://github.com/thecyberjerry'><i className="hover:-translate-y-2 cursor-pointer transition fa-brands fa-github"></i></a></span>
                    </div>
                </section>
            </div>
        </div>

    </>
    )
}

export default Banner
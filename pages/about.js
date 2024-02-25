import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
const montserrat = Montserrat({ weight: ['300'], subsets: ['latin'] });

export default function About() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <title>About</title>

            </Head>
            <div>
                <Navbar />
                <div className={` flex justify-center items-center flex-col gap-10 text-justify p-10 ${montserrat.className}`}>
                    <h1 className='text-2xl md:text-3xl border-4 border-transparent border-b-yellow-500'>About Me <i className="fa-regular fa-user"></i></h1>
                    <p className='md:mx-96 font-medium md:w-full xl:w-auto'>As a recent graduate with a Bachelor&apos;s in Computer Applications, I am excited to launch my career as a Frontend Developer. Proficient in HTML, CSS, and JavaScript, I possess a solid foundation in Next.js and considerable expertise in Tailwind CSS, empowering me to tackle frontend tasks with ingenuity and accuracy. <br /><br />

                        My engagement in bug hunting through platforms like HackerOne and Bugcrowd has refined my abilities to detect and address vulnerabilities, fostering a fundamental grasp of web application security. Moreover, my exposure to backend operations and APIs bolsters my adaptability in web development.<br /><br />

                        Fueled by a fervor for continual growth, I am dedicated to staying updated on industry trends and technologies. With a proven ability to acclimate to various work environments, I am well-positioned to deliver meaningful contributions to any team. Prepared to embark on this thrilling journey, I am eager to bring my expertise and passion to a vibrant workplace.</p>
                </div>
                <hr />
                <section className={`text-gray-600 body-font ${montserrat.className}`}>
                    <div className="container px-5 py-12 mx-auto flex flex-wrap shadow-2xl rounded-3xl">
                        <div className="flex flex-wrap w-full">
                            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-32 md:text-xl">
                                <div className="flex relative pb-12">
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Secondary Education</h2>
                                        <p className="leading-relaxed">Scored Overall 66% from Anand Public School from CBSE Board</p>
                                    </div>
                                </div>
                                <div className="flex relative pb-12">
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Senior Secondary Education</h2>
                                        <p className="leading-relaxed">Scored Overall 63% from Anand Public School from CBSE Board.</p>
                                    </div>
                                </div>
                                <div className="flex relative pb-12">
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <circle cx="12" cy="5" r="3"></circle>
                                            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Bachelor's in Computer Application</h2>
                                        <p className="leading-relaxed">Graduated with an overall 69% from Tilak Raj Chadha Institute of management and technology from Kurukshetra University.</p>
                                    </div>
                                </div>
                                <div className="flex relative">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Enhancing Skills</h2>
                                        <p className="leading-relaxed">Currently gaining and enhancing skills and brushing proficiency in frontend tech-stack like: HTML, CSS,TAILWIND-CSS, Javascript, ReactJS &amp; NextJS.</p>
                                    </div>
                                </div>
                            </div>
                            <img className="lg:w-3/5 md:w-1/2 object-contain  object-center rounded-lg md:mt-0 mt-12" src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="step" />

                        </div>
                    </div>
                </section>
                <section className={`text-gray-600 body-font ${montserrat.className}`}>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed text-lg">With a fervent drive to constantly learn and a remarkable ability to adapt to diverse work settings, I am actively seeking opportunities within organizations where I can not only refine my skills but also gain valuable experience while contributing to the developmental aspects of the organization. My commitment to personal and professional growth is unwavering, and I am eager to embark on this journey of mutual advancement and success.</p>
                            <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-8 mb-6"></span>
                            <h2 className="text-gray-900  title-font tracking-wider text-sm font-bold">Himanshu Sharma</h2>
                            <p className="text-gray-500">Frontend Developer and Designer</p>
                        </div>
                    </div>
                    <hr />
                </section>
                <Footer />


            </div>

        </>
    );
}

import React, { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const montserrat = Montserrat({ weight: ['300'], subsets: ['latin'] })

export default function Contact() {
    const [error, setError] = useState(false)
    const formRef = useRef(null);
    const submitform = async (e) => {
        e.preventDefault();
        try {
            const data =
            {
                name: e.currentTarget.name.value,
                email: e.currentTarget.email.value,
                msg: e.currentTarget.msg.value,
                phone: e.currentTarget.phone.value,
                subject: e.currentTarget.subject.value
            }
            if (data.phone.length !== 10) {
                throw new Error("Invalid Phone Number")
            }
            else {
                setError(false)
            }
            const response = await toast.promise(
                 fetch('/api/contact',
                    {
                        method: 'POST',
                        body: JSON.stringify(data)
                    }),
                {
                    pending: 'Sending Message',
                    success: 'Message sent 👌',
                    error: 'Some error occured please try again... 🤯'
                }
            );
            const res = await response.json()
            formRef.current.reset()
        }
        catch (err) {
            setError(true)
        }
    }
    return (
        <>
            <ToastContainer />
            <div>
                <Navbar />
                <Head>
                    <title>Contact</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                </Head>
                <section className={` text-gray-600 body-font relative  md:h-[55rem] xl:h-full xl:p-20 items-center justify-center flex ${montserrat.className}`}>
                    <div className="container px-5 py-24 mx-auto ">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900   ">Contact Me <i className="fa-brands fa-rocketchat"></i></h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">Feel Free to use the contact form to contact.</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto ">
                            <div className="flex flex-wrap -m-2  justify-center">
                                <form action="" className=' flex w-full flex-wrap' onSubmit={submitform} ref={formRef}>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name<sup>*required</sup></label>
                                            <input required type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone<sup>*required</sup></label>
                                            <input required type="text" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            <p className="text-xs text-red-500">{error ? "Invalid Number" : ""}</p>
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email<sup>*required</sup></label>
                                            <input required type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="subject" className="leading-7 text-sm text-gray-600">Subject<sup>Optional</sup></label>
                                            <input type="subject" id="subject" name="subject" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message<sup>*required</sup></label>
                                            <textarea required id="message" name="msg" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <button className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Send</button>
                                    </div>
                                </form>
                                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                    <p className="leading-normal my-5 ">
                                        Follow Here:
                                    </p>
                                    <span className="inline-flex">
                                        <a href='https://twitter.com/thecyberjerry' className="cursor-pointer ml-4 text-yellow-500 hover:-translate-y-2 transition">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a href='https://instagram.com/himanshupandat19' className="cursor-pointer ml-4 text-yellow-500 hover:-translate-y-2 transition">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div></>
    )
}

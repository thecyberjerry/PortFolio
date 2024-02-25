import Head from "next/head";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"
import Footer from "./components/Footer";
import { Montserrat } from 'next/font/google'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const montserrat = Montserrat({ weight: ['300'], subsets: ['latin'] })


export default function Home() {
  useEffect(() => {
    Aos.init(
    );
  }, [])
  
  return (
    <>
      <Navbar />
      <Banner />
      <Head><title>Home</title></Head>
      <section className={`text-gray-600 body-font ${montserrat.className}`}>
        <div className="container px-5 py-24 mx-auto">
          <div  className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">TechStack I work on</h1>
              <div className="h-1 w-20 bg-yellow-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Proficient in HTML and CSS, with a strong command of Tailwind CSS for efficient styling. I possess intermediate skills in JavaScript and a basic understanding of Next.js for dynamic web development. Additionally, I have experience in penetration testing of web applications at an intermediate level, contributing to a well-rounded understanding of web security. Continuously honing my skills in this tech stack, I am committed to staying updated with the latest trends and advancements, ensuring my ability to deliver high-quality solutions in both frontend development and web security realms.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div data-aos="fade-up" className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-contain object-center mb-6" src="next.svg" alt="content" />
                <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">Proficiency- Beginner</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">NEXT-JS</h2>
                <p className="leading-relaxed text-base">Next.js is a versatile framework that enables efficient server-side rendering and seamless client-side routing, enhancing the performance and scalability of web applications.</p>
              </div>
            </div>
            <div data-aos="fade-up" className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-contain  object-center mb-6" src="images/tailwind-css-icon.svg" alt="content" />
                <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">Proficiency- Intermediate</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">TAILWIND</h2>
                <p className="leading-relaxed text-base">Tailwind CSS streamlines web development with a utility-first approach, enabling rapid styling and customization of user interfaces through pre-defined utility classes.</p>
              </div>
            </div>
            <div data-aos="fade-up" className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-contain object-center mb-6" src="images/html.png" alt="content" />
                <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">Proficiency- Professional</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">HTML</h2>
                <p className="leading-relaxed text-base">HTML (Hypertext Markup Language) serves as the backbone of web development, providing the structure and content for websites and applications.</p>
              </div>
            </div>
            <div data-aos="fade-up" className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-contain  object-center mb-6" src="images/css.png" alt="content" />
                <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">Proficiency- Intermediate</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">CSS</h2>
                <p className="leading-relaxed text-base">CSS (Cascading Style Sheets) is instrumental in styling HTML elements, allowing for the customization of layout, colors, fonts, and overall presentation on the web.</p>
              </div>
            </div>
            <div data-aos="fade-up" className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-contain object-center mb-6" src="images/javascript-39397.png" alt="content" />
                <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">Proficiency- Beginner</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">JAVASCRIPT</h2>
                <p className="leading-relaxed text-base">JavaScript empowers interactive and dynamic web experiences, facilitating client-side scripting for functionalities like form validation, animations, and DOM manipulation.</p>
              </div>
            </div>
            <div data-aos="fade-up" className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-contain object-center mb-6" src="images/web-security.png" alt="content" />
                <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">Proficiency- Intermediate</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Web Security</h2>
                <p className="leading-relaxed text-base">Web security is crucial for protecting user data and ensuring the integrity of web applications by implementing encryption, authentication, and secure coding practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section  data-aos="fade-up" className={`text-gray-600 body-font ${montserrat.className}`}>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img alt="feature" className="object-cover object-center h-full w-full" src="images/pcbanner.png" />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Ready to work</h2>
                <p className="leading-relaxed text-base">Prepared and enthusiastic to contribute, I am eager to tackle challenges head-on, leveraging my skills and expertise to drive success.</p>

              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Good Communication</h2>
                <p className="leading-relaxed text-base">With humility and politeness, I prioritize effective communication to foster understanding and collaboration, ensuring productive interactions and positive relationships.</p>

              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Eager to learn new things</h2>
                <p className="leading-relaxed text-base">Driven by a thirst for knowledge, I embrace new opportunities for growth, constantly seeking to expand my skills and expertise in pursuit of excellence.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

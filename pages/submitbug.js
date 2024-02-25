import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
const montserrat = Montserrat({ weight: ['300'], subsets: ['latin'] })

export default function submitbug() {
    return (
        <>
            <Navbar />
            <Head>
                <title>Submit a Bug</title>
            </Head>
            <div className={`${montserrat.className}  flex-col flex p-5 md:p-24  `}>
                <div className='flex'>
                    <h1 className='text-2xl md:text-3xl border-b-yellow-300 border-4 border-transparent'>Responsible Disclosure</h1>
                </div>
                <div className='p-5 text-justify'><p>Responsible disclosure refers to the ethical practice of reporting discovered vulnerabilities or security issues in software, systems, or networks to the respective organization or vendor, in a manner that prioritizes the protection of users and the security of the affected system. This process involves notifying the responsible party about the identified flaw without publicly disclosing it prematurely, allowing the organization time to develop and release patches or fixes to mitigate the vulnerability. Responsible disclosure typically follows a structured approach, where the discoverer provides detailed information about the issue, including its potential impact and any suggested remediation steps. By adhering to responsible disclosure principles, security researchers aim to promote collaboration, transparency, and the timely resolution of security vulnerabilities, ultimately contributing to the overall improvement of cybersecurity posture and the protection of digital ecosystems.</p></div>
                <div className='flex'>
                    <h1 className='text-xl md:text-2xl border-b-yellow-300 border-4 border-transparent'>Guidelines:</h1>
                </div>
                <div className='p-5 text-justify'>
                    <ol className='list-decimal p-4'>
                        <li className='p-2'>First mention that you have found a BUG</li>
                        <li className='p-2'>Write a well-defined and clear POC</li>
                        <li className='p-2'>Mention type of BUG</li>
                        <li className='p-2'>Section where it arise</li>
                        <li className='p-2'>Working POC and reproducible steps</li>
                        <li className='p-2'>No Monetary Rewards</li>
                        <li className='p-2'>Hall Of Fame</li>
                    </ol>
                </div>
                <div className='flex'>
                    <h1 className='text-xl md:text-2xl border-b-yellow-300 border-4 border-transparent'>Rewards:</h1>
                </div>
                <div className='p-5 text-justify'><p>
                    At the core of my commitment to safeguarding the security and reliability of my portfolio is a deep appreciation for the efforts of security researchers and ethical hackers who diligently uncover and report potential vulnerabilities. While I currently do not offer monetary rewards for such contributions, I extend my sincere gratitude through the following means:

                    Firstly, I will provide an official appreciation letter to express my gratitude and formally recognize your invaluable contribution to the security of my portfolio. This letter serves as a testament to your expertise and dedication in ensuring a safe online environment for all users.

                    Additionally, your name will be prominently featured in my Hall of Fame, a distinguished section dedicated to honoring individuals who responsibly disclose security vulnerabilities. This public acknowledgment not only underscores your commitment to cybersecurity but also highlights your pivotal role in enhancing the overall security posture of my portfolio.

                    Furthermore, by participating in my responsible disclosure program, you become an integral part of my trusted network of security researchers. This affiliation may lead to potential future opportunities, such as collaboration on beta testing of new features or projects, where your insights and expertise will be highly valued.

                    Your contributions play a vital role in upholding the security and integrity of my portfolio, ensuring a positive and secure user experience for all visitors. I extend my heartfelt appreciation for your dedication and commend you for making a meaningful difference in fostering a safer online environment. Together, we can continue to strive towards creating a more secure digital landscape for everyone.</p></div>
                <div className='flex'>
                    <h1 className='text-xl md:text-2xl border-b-yellow-300 border-4 border-transparent'>Legal Protections:</h1>
                </div>
                <div className='p-5 text-justify'><p>The Portfolio Owner and Recipient hereby agree to a Responsible Disclosure Agreement to safeguard the disclosure of the Portfolio Owner&apos;s personal portfolio. The Recipient commits to handling such information confidentially and promptly notifying the Portfolio Owner of any discovered vulnerabilities or issues. Disclosure to third parties is strictly prohibited without explicit written consent from the Portfolio Owner. The Portfolio Owner agrees not to take legal action against the Recipient for disclosures made in accordance with this Agreement. The Recipient pledges not to exploit any discovered vulnerabilities for personal gain or malicious purposes. The Portfolio Owner indemnifies and holds harmless the Recipient from claims arising from the personal portfolio, except in cases of gross negligence or willful misconduct by the Recipient. This Agreement is governed by the laws of the respective jurisdiction and constitutes the entire understanding between the parties. Modifications require written consent from both parties.
                    <br />
                </p></div>
                <div className='p-5 text-justify'>
                    <ol className='list-decimal p-4'>
                        <li className='p-2'>We will use your personal data to contact you</li>
                        <li className='p-2'>Your personal data or contact information will be stored to us for any further legal investigation as per INDIAN Government rules</li>
                        <li className='p-2'>We won&apos;t disclose your personal information publicly except to authorities.</li>
                    </ol>
                </div>
                <div className='flex'>
                    <h1 className='text-xl md:text-2xl border-b-yellow-300 border-4 border-transparent'>Miscs:</h1>
                </div>
                <div className='p-5 text-justify'><p>By participating in our responsible disclosure program, you agree to abide by the terms and conditions of this policy. We appreciate your cooperation in helping us maintain the security of our systems and protect our users.
                </p></div>
                <div>
                    <p>If you have any questions or concerns about our responsible disclosure policy, please contact us <Link href="/contact" className='text-blue-800 font-bold'>here</Link>.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

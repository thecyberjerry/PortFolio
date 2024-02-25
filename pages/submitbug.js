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
                <div className='p-5 text-justify'><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae dolorum debitis dolorem cupiditate, nihil illum facere recusandae optio voluptas neque animi repudiandae possimus? Reprehenderit molestias nostrum doloremque illo est sint, et repellendus repudiandae dolorem unde nam veniam velit fuga maiores culpa dolores. Quisquam quidem hic eaque, sit dignissimos voluptatibus adipisci omnis deleniti unde exercitationem, fugiat ab odit, id similique fugit reprehenderit vero a debitis aperiam harum aliquid? Atque dolorem, culpa excepturi cumque voluptatem maiores ad perspiciatis hic earum maxime quas ipsum nulla! Nemo praesentium id ex ad mollitia sint asperiores, sit ab. Sequi soluta cumque sunt ducimus inventore nihil itaque.</p></div>
                <div className='flex'>
                    <h1 className='text-xl md:text-2xl border-b-yellow-300 border-4 border-transparent'>Legal Protections:</h1>
                </div>
                <div className='p-5 text-justify'><p>The Portfolio Owner and Recipient hereby agree to a Responsible Disclosure Agreement to safeguard the disclosure of the Portfolio Owner's personal portfolio. The Recipient commits to handling such information confidentially and promptly notifying the Portfolio Owner of any discovered vulnerabilities or issues. Disclosure to third parties is strictly prohibited without explicit written consent from the Portfolio Owner. The Portfolio Owner agrees not to take legal action against the Recipient for disclosures made in accordance with this Agreement. The Recipient pledges not to exploit any discovered vulnerabilities for personal gain or malicious purposes. The Portfolio Owner indemnifies and holds harmless the Recipient from claims arising from the personal portfolio, except in cases of gross negligence or willful misconduct by the Recipient. This Agreement is governed by the laws of the respective jurisdiction and constitutes the entire understanding between the parties. Modifications require written consent from both parties.
                    <br />
                    </p></div>
                <div className='p-5 text-justify'>
                    <ol className='list-decimal p-4'>
                        <li className='p-2'>We will use your personal data to contact you</li>
                        <li className='p-2'>Your personal data or contact information will be stored to us for any further legal investigation as per INDIAN Government rules</li>
                        <li className='p-2'>We won't disclose your personal information publicaly except authorities.</li>
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

import Image from 'next/image'

import Link from 'next/link';

import { useRouter } from 'next/navigation'

import React from 'react'




const Footer = ({ user, type = 'desktop' }: FooterProps) => {

    const router = useRouter();

    return (
<div><div><p style={{color: '#0179fe'}}>Log Out Below</p></div>
        <footer className="footer">
            

            <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>

                <p className="text-xl font-bold text-blue-700">

                    {'S'}

                </p>

            </div>




            <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>

                <h1 className="text-14 truncate text-gray-700 font-semibold">

                    {'Spencer Faught'}

                </h1>

                <p className="text-14 truncate font-normal text-gray-600">

                    {'demo@gmail.com'}

                </p>

            </div>




            <div className="footer_image flex" >

                <Link href={'./sign-in'}>
                  <Image src="icons/logout.svg" fill alt="jsm" />
                </Link>

            </div>

        </footer>
        </div>

    )

}




export default Footer
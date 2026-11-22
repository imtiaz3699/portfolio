'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import PortfolioButton from './Buttons/PortfolioButton'
import Link from 'next/link'
import { usePathname } from "next/navigation";

function PortfolioNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname();
    const links = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'Services',
            href: '/services',
        },
        {
            name: 'Work',
            href: '',
        },
        {
            name: 'Process',
            href: '',
        },
        {
            name: 'About',
            href: '',
        },
        {
            name: 'Careers',
            href: '',
        },
    ]
    return (
        <nav className="w-full border-b border-[#262626]">
            <div className='py-5 w-full flex flex-row items-center justify-between border-b border-[#262626] container px-2.5 md:px-0  mx-auto'>
                <div className='flex flex-row items-center gap-3'>
                    <Image src='/portfoliologo.png' alt="Portfolio Logo" width={60} height={60} />
                    <p className='font-bold text-2xl xl:3xl text-white'>Squre Up</p>
                </div>
                <div className='flex-row items-center hidden lg:flex '>
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} className={`text-[18px] font-barlow font-semibold text-white hover:bg-[#262626] ${pathname === link.href ? 'bg-[#262626]' : ''}  h-13.75 w-25.75 rounded-lg hover:text-portfolioPrimary transition-colors duration-300 flex items-center justify-center`}>
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className='hidden lg:flex'>
                    <PortfolioButton btnText="Contact Us" primary />
                </div>
                {/* mobile dropdown */}
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='block lg:hidden'>
                    <Image src="/hamburgerPortfolio.png" alt="" width={46} height={46} />

                </div>

            </div>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${isMenuOpen
                    ? "max-h-[500px] border-t border-[#262626] opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col gap-2 px-2.5 py-4">

                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`rounded-lg px-4 py-3 font-barlow text-[17px] font-semibold text-white transition-colors duration-300 hover:bg-[#262626] hover:text-portfolioPrimary ${pathname === link.href ? "bg-[#262626] text-portfolioPrimary" : ""
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Mobile Contact Button */}
                    <div className="mt-2">
                        <PortfolioButton btnText="Contact Us" primary />
                    </div>

                </div>

                
            </div>
        </nav>
    )
}

export default PortfolioNavbar

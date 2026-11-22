'use client'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { usePathname } from "next/navigation";
import BillingHero from '../components/PortfolioComponents/BillingManagementSystem/BillingHero';
function LandingPage() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Help",
      href: "/",
    },
    {
      name: "About",
      href: "/",
    },
  ]
  return (
    <div className='w-full'>
      <nav className='flex flex-row items-center justify-between w-full bg-[#06496E] py-1 px-10'>
        <div className='w-[100px] h-[100px] flex items-center justify-center'>
          <Image src='/billingBook.png' alt='' width={100} height={100} />
        </div>
        <div className='flex-row items-center gap-10 hidden md:flex'>
          <p className='font-bold text-[30px] leading-auto text-white cursor-pointer hover:underline'>Home</p>
          <p className='font-bold text-[30px] leading-auto text-[#8AABBD] cursor-pointer hover:underline'>Help</p>
          <p className='font-bold text-[30px] leading-auto text-[#8AABBD] cursor-pointer hover:underline'>About</p>
        </div>
        <div>
          <button onClick = {() => setIsOpen(!isOpen)}>Button</button>
        </div>
      </nav>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${isOpen
          ? "max-h-[500px] border-t border-[#262626] bg-red opacity-100"
          : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-2 px-2.5 py-4">

          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-4 py-3 font-barlow text-[17px] font-semibold text-white transition-colors duration-300 hover:bg-[#262626] hover:text-portfolioPrimary ${pathname === link.href ? "bg-[#262626] text-portfolioPrimary" : ""
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>


      </div>
      <BillingHero/>      
    </div>
  )
}

export default LandingPage

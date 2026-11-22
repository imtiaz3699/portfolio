'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/navigation";

function BillingHero() {
    const router = useRouter();
    const handleLogin = () => {
        router.push("/billing-management-system/login-main");
    };
    return (
        <>
            <div className='py-[100px] lg:py-[200px] px-[20px] md:px-[70px] flex flex-col items-center lg:flex-row justify-between container mx-auto'>
                <div className="flex flex-col gap-[45px]" >
                    <div className='flex flex-col items-start '>
                        <p className='font-regular text-[48px] '>ONLINE</p>
                        <p className='font-regular text-[48px] '>Records and <span>Bills</span></p>
                        <p>We Manage, Monitor and Maintain!</p>
                    </div>
                    <div className='w-full md:w-[521px]'>
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna sit
                        aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <button onClick = {handleLogin} className='cursor-pointer w-[171px] h-[68px] rounded-[8px] bg-[#C4C4C4] shadow-xl font-medium text-[24px] text-black '>Start now</button>
                </div>
                <div>
                    <Image src="/herosectionbilling.png" alt="" width={800} height={550} />
                </div>
            </div>
            <div className='bg-[#06496E] py-[48px] w-full flex flex-col items-center justify-center'>
                <div className='flex flex-row items-center gap-[50px]'>
                    <div className='flex items-center justify-center border border-[#1400FF] w-[61.8px] h-[52.27]'>
                        <Image src='/x.png' alt='' width={30} height={20} />
                    </div>
                    <div className='flex items-center justify-center border border-[#1400FF] w-[61.8px] h-[52.27]'>
                        <Image src='/facebook.png' alt='' width={30} height={20} />
                    </div>
                    <div className='flex items-center justify-center border border-[#1400FF] w-[61.8px] h-[52.27]'>
                        <Image src='/instagram.png' alt='' width={30} height={20} />
                    </div>
                </div>
                <div className='text-[24px] font-normal text-white text-center'>Exclusive for College © 2021 | All Rights Reserved.</div>
            </div>
        </>
    )
}

export default BillingHero

'use client'
import PortfolioAuthInput from '@/app/components/PortfolioComponents/Inputs/PortfolioAuthInput'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'


function BillingSignup() {
    const router = useRouter()
    return (
        <div className='flex flex-row items-center justify-center w-full border '>
            <div className='max-w-[1200px] shadow-xl w-full flex flex-row items-stretch justify-between px-5 rounded-[20px] py-[20px]'>
                <div className='flex flex-col items-start w-full'>
                    <div className='flex flex-col items-center'>
                        <Image
                            src="/cashier.png"
                            alt=""
                            width={265}
                            height={300}
                        />
                        <p className='font-bold text-[35px] leading-auto'>Registrar/Cashier Sign Up</p>
                    </div>
                    <div className='flex flex-col items-start gap-[20px] w-full'>
                        <p className="text-[28px] font-semibold ">Personal Information</p>
                        <PortfolioAuthInput placeholder='First name' />
                        <PortfolioAuthInput placeholder='Last Name' />
                        <PortfolioAuthInput placeholder='Middle Name' />
                        <PortfolioAuthInput placeholder='Contact Number' />
                        <p className='text-[28px] semibold '>Account Information</p>
                        <PortfolioAuthInput placeholder='Employee Number' />
                        <PortfolioAuthInput placeholder='Username' />
                        <PortfolioAuthInput placeholder='Password' />
                        <PortfolioAuthInput placeholder='Confirm Password' />
                        <PortfolioAuthInput placeholder='Email' />

                    </div>
                </div>
                <div className="max-w-[421px] pb-3 w-full bg-[#8AABBD] rounded-r-[15px] rounded-l-[10px] flex flex-col items-center  justify-between">
                    <div className='flex flex-col items-center'>
                        <Image
                            src="/unilogo.png"
                            alt=""
                            width={238}
                            height={275}
                        />
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-bold text-[45px] leading-auto text-center">
                                University Example
                            </p>

                            <p className="font-normal text-[25px] leading-auto text-center">
                                "Where dreams really come true"
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center gap-4 mt-20 pb-10'>
                        <p className='text-[25px] font-normal leading-auto '>Already have an account?</p>
                        <button
                            onClick={() => router.push("/billing-management-system/login-main")}
                            className='w-[300px] bg-[#2F80ED] rounded-[8px] text-[36px] font-semibold text-white text-center cursor-pointer '>
                            Login
                        </button>
                    </div>
                    <div className = 'flex flex-col items-center justify-center'>
                    <button
                        onClick={() => router.push("/billing-management-system/login-main")}
                        className='w-[300px] bg-[#2F80ED] rounded-[8px] text-[36px] font-semibold text-white text-center cursor-pointer '>
                        Signup
                    </button>
                    <p className = ''>By clicking Sign Up, you agree to our Terms and Condition and you have read our Privacy Policy.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BillingSignup

import PortfolioAuthInput from '@/app/components/PortfolioComponents/Inputs/PortfolioAuthInput'
import Image from 'next/image'
import React from 'react'

function LoginStudent({ onClose }: { onClose: any }) {
    return (
        <>


            <div className='flex flex-row items-stretch w-full h-full'>
                <div className='px-2 bg-[#8AABBD] !h-[700px] flex flex-col items-center justify-center rounded-l-[15px] rounded-r-[7px] gap-[33px] '>

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
                <div className='pl-[50px] pr-[20px] w-full'>
                    <div className="flex flex-col items-center gap-2">
                        <Image
                            src="/student.png"
                            alt=""
                            width={265}
                            height={300}
                        />

                        <p className="font-bold text-[48px] leading-auto">
                            Student
                        </p>
                    </div>


                    <div className="flex flex-col items-center gap-[30px] ">

                        <PortfolioAuthInput placeholder="Username" />

                        <PortfolioAuthInput placeholder="Password" />

                        <button className="bg-[#2F80ED] rounded-xl shadow-xl w-[240px] h-[91px] text-[36px] font-semibold leading-auto text-white">
                            Login
                        </button>

                        <p className="mb-3 text-left font-normal text-[30px] text-[#145DEC] hover:underline cursor-pointer">
                            Forgot Password
                        </p>

                    </div>
                </div>
            </div>

            {/* <div className="relative rounded-[15px] h-full shadow-xl flex flex-row items-stretch justify-between border border-red-600 max-w-[1200px] w-full">

                
                <div className="px-2 bg-[#8AABBD] flex flex-col items-center justify-center rounded-l-[15px] gap-[33px] h-full">
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

                
                <div className="flex flex-col items-center justify-between h-full">

                    
                    <div className="flex flex-row items-start justify-between w-full">

                        <div></div>

                        <div className="flex flex-col items-center gap-2">
                            <Image
                                src="/student.png"
                                alt=""
                                width={265}
                                height={300}
                            />

                            <p className="font-bold text-[48px] leading-auto">
                                Student
                            </p>
                        </div>

                        <div className="mr-5 cursor-pointer">
                            <Image
                                src="/redClose.png"
                                alt=""
                                width={85}
                                height={85}
                            />
                        </div>

                    </div>

                    <div className="flex flex-col items-center gap-[30px] w-full">

                        <PortfolioAuthInput placeholder="Username" />

                        <PortfolioAuthInput placeholder="Password" />

                        <button className="bg-[#2F80ED] rounded-xl shadow-xl w-[240px] h-[91px] text-[36px] font-semibold leading-auto text-white">
                            Login
                        </button>

                        <p className="mb-3 text-left font-normal text-[30px] text-[#145DEC] hover:underline cursor-pointer">
                            Forgot Password
                        </p>

                    </div>

                </div>

            </div> */}
        </>
    )
}

export default LoginStudent

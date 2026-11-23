import SearchBilling from '@/app/components/PortfolioComponents/SearchBilling'
import StudentInfoForm from '@/app/components/PortfolioComponents/StudentInfoForm'
import React from 'react'

function Registration() {
    const navLinks = [
        {
            name: "Dashboard",
            url: "",
        },
        {
            name: "History",
            url: "",
        },
        {
            name: "Reports",
            url: "",
        },
        {
            name: "Transactions",
            url: "",
        },
        {
            name: "Registration",
            url: "",
        },
    ]
    return (
        <div className='flex items-center justify-center w-full'>
            <div className='flex flex-col items-start w-[1300px]'>
                <div>
                    <p className='text-[25px] font-normal'>College Name</p>
                    <p className='text-[20px] font-normal'>Address</p>
                    <p className='text-[20px] font-normal'>Zip Code</p>
                </div>
                <div className='bg-[#06496E] flex flex-row items-center justify-center w-full py-[15px] gap-[30px] mt-[30px]'>
                    {
                        navLinks.map((element, idx) => {
                            return <div className={`font-bold text-[24px]  ${element.name === 'Registration' ? "text-[#19B9DC]" : "text-white"} `}>{element.name}</div>
                        })
                    }
                </div>
                <div className='px-[100px] w-full'>
                    <div className='flex flex-row items-center justify-between mt-[30px] '>
                        <div className='flex flex-row items-center gap-[10px]'>
                            <div className='w-[230px] h-[210px] bg-[#06496E] shadow-3xl'></div>
                            <div className='flex flex-col items-center'>
                                <p className='font-normal text-[36px] leading-auto'>Denver Pulido</p>
                                <p className='text-[24px] '>Registrar</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center '>
                            <div className='w-[244px] border border-black shadow-xl flex flex-col items-center '>
                                <button className='font-bold text-[18px] text-[#06496E] h-[60px] cursor-pointer'>Logout</button>
                                <div className='h-[1px] bg-black w-full '></div>
                                <button className='font-bold text-[18px] text-[#06496E] h-[60px] cursor-pointer'>Change Password</button>
                            </div>
                            <p className='text-[#06496E] text-[24px]'>12:40 PM 4/11/2021</p>
                        </div>
                        
                    </div>
                    <SearchBilling/>
                    <StudentInfoForm/>
                </div>
            </div>

        </div>
    )
}

export default Registration

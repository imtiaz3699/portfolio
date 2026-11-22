'use client'
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Modal } from 'antd';
import LoginStudent from '@/app/components/PortfolioComponents/auth/StudentLogin';
import RegistrarLogin from '@/app/components/PortfolioComponents/auth/RegistrarLogin';
import CashierLogin from '@/app/components/PortfolioComponents/auth/CashierLogin';
function LoginiMain() {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = React.useState("");
    return (
        <div className='flex items-center justify-center '>
            <div className='flex flex-col items-center justify-between w-full max-w-[1200px] h-auto bg-[#8AABBD] rounded-[15px]  pt-[100px] pb-[20px] px-[50px] h-screen'>
                <div className='w-full flex flex-row items-center gap-[30px] w-full'>
                    <div className='flex flex-row items-center '>
                        <Image src='/uniLogo.png' alt="" width={238} height={275} />
                    </div>
                    <div className='flex flex-col items-starst'>
                        <p className='font-bold text-[55px] leading-auto text-black'>University Example</p>
                        <p className='font-normal text-[30px] leading-auto text-black'>“Where dreams really come true”</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='flex flex-row items-center gap-3'>
                            <p className='text-[#1E9ADF] text-[24px] leading-auto underline'>Help</p>
                            <p className='text-[#1E9ADF] text-[24px] leading-auto underline'>About Us</p>
                        </div>
                        <div className='flex flex-col items-start gap-[12px]'>
                            <p className='flex flex-row items-center gap-[22px]'>
                                <Image src='/email.png' alt="" width={37.94} height={39.4} />
                                <span className='font-normal text-[24px] leading-auto text-black'>College@gmail.com</span>
                            </p>
                            <p className='flex flex-row items-center gap-[22px]'>
                                <Image src='/phone.png' alt="" width={37.94} height={39.4} />
                                <span className='font-normal text-[24px] leading-auto text-black'>(045) 6060-701</span>
                            </p>
                            <p className='flex flex-row items-center gap-[22px]'>
                                <Image src='/location.png' alt="" width={37.94} height={39.4} />
                                <span className='font-normal text-[24px] leading-auto text-black'>Tarlac City | 2307</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-10'>
                    <p className='font-normal text-[36px] leading-auto '>Login as:</p>
                    <div className='flex flex-row items-center gap-[50px]'>
                        <div onClick={() => setIsModalOpen("student")} className='flex flex-col items-center gap-10 hover:shadow-xl p-2 rounded-xl cursor-pointer'>
                            <Image src='/student.png' alt="" width={100} height={100} />
                            <p className='text-[#298329] font-bold text-[36px]  '>Student</p>
                        </div>
                        <div onClick={() => setIsModalOpen("registrar")} className='flex flex-col items-center gap-10 hover:shadow-xl p-2 rounded-xl cursor-pointer'>
                            <Image src='/registrar.png' alt="" width={100} height={100} />
                            <p className='text-[#298329] font-bold text-[36px]  '>Registrar</p>
                        </div>
                        <div onClick = {() => setIsModalOpen("cashier")} className='flex flex-col items-center gap-10 hover:shadow-xl p-2 rounded-xl cursor-pointer'>
                            <Image src='/cashier.png' alt="" width={100} height={100} />
                            <p className='text-[#298329] font-bold text-[36px]  '>Cashier</p>
                        </div>
                    </div>
                </div>
                <p className="text-[36px] font-normal leading-auto">Exclusive for College © All rights reserved.</p>
            </div>

            <Modal
                open={isModalOpen === "student"}

                footer={null}
                className='!max-w-[1200px] !w-full '

                closeIcon={<div onClick={() => setIsModalOpen("")}> <Image
                    src="/redClose.png"
                    alt=""
                    width={85}
                    height={85}
                /></div>}
            >
                <LoginStudent onClose={() => setIsModalOpen("")} />
            </Modal>
            <Modal
                open={isModalOpen === "registrar"}
                footer={null}
                closeIcon={<div onClick={() => setIsModalOpen("")}> <Image
                    src="/redClose.png"
                    alt=""
                    width={85}
                    height={85}
                /></div>}
                centered
                className='!max-w-[1200px] !w-full !max-h-[810px] !h-full'
            >
                <RegistrarLogin />
            </Modal>
            <Modal
                open={isModalOpen === "cashier"}
                
                footer={null}
                closeIcon={<div onClick={() => setIsModalOpen("")}> <Image
                    src="/redClose.png"
                    alt=""
                    width={85}
                    height={85}
                /></div>}
                
                className='!max-w-[1200px] !w-full !max-h-[810px] !h-full'
            >
                <CashierLogin />
            </Modal>

        </div>
    )
}

export default LoginiMain

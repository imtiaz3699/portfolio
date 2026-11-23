'use client'
import React from 'react'
import BillingInput from './Inputs/BillingInputWithLabel'
import Checkbox from 'antd/es/checkbox/Checkbox'
import StudentTable from './RegistrationTable'
import Modal from 'antd/es/modal/Modal'
import AddStudent from './AddStudent'
import Image from 'next/image'
import Success from './CasualModal/Success'
function StudentInfoForm() {
    const [addStudent, setAddStudent] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    return (
        <>
            <div className='mt-[65px] w-full border-[1px] border-[#56CCF2] shadow-2xl px-[18px] py-[8px]'>
                <p className='text-[#06496E] border-b border-[#06496E]'>Student’s Information</p>
                <div className='w-full flex flex-row items-stretched gap-[10px] mt-[30px] '>
                    <div className='border-[2px] border-[#1E9ADF] flex flex-col px-[30px] gap-[10px]  py-[10px]'>
                        <BillingInput label="Name" />
                        <BillingInput label="Student Number" />
                        <BillingInput label="College" />
                        <BillingInput label="Major" />
                        <BillingInput label="Year Level" />
                        <BillingInput label="Section" />
                    </div>
                    <div className='border-[2px] border-[#1E9ADF] flex flex-col px-[30px] gap-[10px] py-[10px]'>
                        <BillingInput label="Address" />
                        <div className='flex flex-row items-center gap-[30px]'>
                            <div className='flex flex-row items-center'>
                                <p>Sex</p>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="sex" value="male" />
                                        Male
                                    </label>

                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="sex" value="female" />
                                        Female
                                    </label>
                                </div>
                            </div>
                            <BillingInput label="Age" />
                        </div>
                        <BillingInput label="Mobile Number" />
                        <BillingInput label="Civil Status" />
                        <BillingInput label="Birthdate" />
                        <BillingInput label="Email" />
                    </div>
                    <div className='border-[2px] border-[#1E9ADF] flex flex-col justify-between  gap-[10px] pt-[10px] min-w-[238px] '>
                        <div className='flex flex-col gap-[20px] px-[10px]'>
                            <div className='flex flex-row items-center gap-[30px]'>
                                <Checkbox className='border-red-500' />
                                <p className='font-bold text-[18px] leading-auto'>Form 137</p>
                            </div>
                            <div className='flex flex-row items-center gap-[30px]'>
                                <Checkbox className='border-red-500' />
                                <p className='font-bold text-[18px] leading-auto'>Form 138</p>
                            </div>
                            <div className='flex flex-row items-center gap-[30px]'>
                                <Checkbox className='border-red-500' />
                                <p className='font-bold text-[18px] leading-auto'>PSA Certificate</p>
                            </div>
                            <div className='flex flex-row items-center gap-[30px]'>
                                <Checkbox className='[&_.ant-checkbox-inner]:!border-red-500' />
                                <p className='font-bold text-[18px] leading-auto'>Good Moral</p>
                            </div>

                        </div>
                        <div className='w-full bg-[#06496E] h-[36px] flex items-center justify-center text-white font-bold text-[12px]'>Edit requirements</div>
                    </div>
                </div>

            </div>
            <div className='flex flex-row items-center gap-[20px] mt-[40px]'>
                <button
                    onClick={() => setAddStudent(true)}
                    className='cursor-pointer w-[200px] text-center h-[60px] bg-[#FFF9F9] border border-black shadow-2xl'>
                    Add
                </button>
                <button className='w-[200px] text-center h-[60px] bg-[#FFF9F9] border border-black shadow-2xl'>Remove</button>
                <button className='w-[200px] text-center h-[60px] bg-[#FFF9F9] border border-black shadow-2xl'>Update</button>
                <button className='w-[200px] text-center h-[60px] bg-[#FFF9F9] border border-black shadow-2xl'>Save</button>
                <button className='w-[200px] text-center h-[60px] bg-[#FFF9F9] border border-black shadow-2xl'>List of students</button>
            </div>
            <div className='mt-[40px] w-full'>
                <p className='text-[#06496E] text-[24px] pb-[16px] border-b border-[#06496E] font-semibold '>Student Registration</p>
                <p className='text-[#06496E] text-[18px] leading-auto font-semibold'>COLLEGE</p>
                <div className='flex flex-row items-start w-full'>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex flex-row items-center gap-[14px]'>
                            <button className='w-[90px] h-[56px] shadow-2xl text-center cursor-pointer'>BSBA</button>
                            <button className='w-[90px] h-[56px] shadow-2xl text-center cursor-pointer'>BSC</button>
                        </div>
                        <div className='flex flex-row items-center gap-[14px]'>
                            <button className='w-[90px] h-[56px] shadow-2xl text-center cursor-pointer'>BSBA</button>
                            <button className='w-[90px] h-[56px] shadow-2xl text-center cursor-pointer'>BSC</button>
                        </div>
                        <div className='flex flex-row items-center gap-[14px]'>
                            <button className='w-[90px] h-[56px] shadow-2xl text-center cursor-pointer'>BSBA</button>
                            <button className='w-[90px] h-[56px] shadow-2xl text-center cursor-pointer'>BSC</button>
                        </div>
                        <div className='flex flex-row items-center gap-[14px]'>
                            <button className='w-[90px] h-[56px] shadow-2xl text-center cursor-pointer'>BSBA</button>
                            <button className='w-[90px] h-[56px] shadow-2xl text-center cursor-pointer'>BSC</button>
                        </div>
                        <div className='flex flex-row items-center gap-[14px]'>
                            <button className='w-[90px] h-[56px] shadow-2xl text-center'>BSBA</button>
                            <button className='w-[90px] h-[56px] shadow-2xl text-center'>BSC</button>
                        </div>
                    </div>
                    <div className='w-full'>
                        <StudentTable />
                    </div>
                </div>
            </div>
            <Modal
                open={addStudent}
                footer={null}
                closeIcon={<div onClick={() => setAddStudent(false)}> <Image
                    src="/redClose.png"
                    alt=""
                    width={85}
                    height={85}
                /></div>}
                centered
                title={<div className='text-center text-[32px] text-white'>Add Student</div>}
                className="!w-[1000px] "
            >
                <AddStudent onClose={() => {setAddStudent(false);setIsSuccess(true)}} />
            </Modal>
            <Success isOpen={isSuccess} onClose = {() => setIsSuccess(false)} />
        </>

    )
}

export default StudentInfoForm

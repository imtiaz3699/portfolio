'use client'
import React from 'react'
import BillingInput from './Inputs/BillingInputWithLabel'

function AddStudent({ onClose }: { onClose: any }) {
    return (
        <>

            <div className=' bg-white rounded-[10px] py-[15px] px-[66px]'>
                <p className='text-[24px] font-normal leading-auto text-black'>Personal Information</p>
                <div className='flex flex-row items-start gap-[66px] mt-[22px]'>
                    <div className='flex flex-col items-start gap-[14px] w-1/2'>
                        <BillingInput label="First Name" addStudent />
                        <BillingInput label="Last Name" addStudent />
                        <BillingInput label="Middle Name" addStudent />
                        <BillingInput label="Address" addStudent />
                        <BillingInput label="Student Number" addStudent />
                        <BillingInput label="Year Level" addStudent />
                        <BillingInput label="Section" addStudent />
                    </div>
                    <div className='flex flex-col items-start gap-[14px] w-1/2'>
                        <BillingInput label="Date of Birth" addStudent />
                        <div className='flex flex-row items-center gap-[30px]'>
                            <BillingInput label="Age" addStudent />
                            <div className='flex flex-row items-center'>
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

                        </div>
                        <BillingInput label="Phone Number" addStudent />
                        <BillingInput label="Email Address" addStudent />
                        <BillingInput label="Course" addStudent />
                        <BillingInput label="Major" addStudent />
                        <div className='flex items-center justify-end w-full'>
                            <button onClick={() => {onClose()}}
                                className='bg-[#8AABBD] font-semibold w-[146px] h-[55px] rounded-[30px] text-[24px] '>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddStudent

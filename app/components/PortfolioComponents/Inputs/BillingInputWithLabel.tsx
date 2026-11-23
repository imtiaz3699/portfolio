import React from 'react'

function BillingInput({ label, addStudent }: { label: string, addStudent?: boolean }) {
  return (
    <>
      {
        addStudent ? <div className='flex flex-row items-center gap-[35px] w-full'>
          <label className='w-[120px] font-semibold text-[18px] leading-auto text-black text-nowrap'>{label}</label>
          <input className='w-full border border-[#06496E] h-[29.75px]  bg-[#E5E5E5] rounded-[8px]' />
        </div> : <div className='flex flex-row items-center gap-[35px]'>
          <label className='font-normal text-[18px] leading-auto text-black text-nowrap'>{label}</label>
          <input className='border border-[#56CCF2] h-[29.75px] w-full' />
        </div>
      }
    </>

  )
}

export default BillingInput

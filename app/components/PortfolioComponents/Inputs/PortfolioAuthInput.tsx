import React from 'react'

function PortfolioAuthInput({ placeholder }: { placeholder?: string }) {
    return (
        <input className='outline-none border-b border-black max-w-[550px] w-full text-[30px] placeholder:text-[30px] placeholder:text-[#B8ABAB] pl-[20px]' placeholder={placeholder} />
    )
}

export default PortfolioAuthInput

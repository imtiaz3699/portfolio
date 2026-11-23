import React from 'react'

function SearchBilling() {
  return (
    <div className = 'w-full flex flex-row items-center gap-[10px] mt-[50px]'>
        <button className = 'bg-[#06496E] rounded-[10px] font-bold text-[24px] text-white w-[160px] h-[48.99px]'>Search</button>
        <input className = 'border-[2px] border-[#06496E] w-full h-[52px] rounded-[10px]' />
    </div>
  )
}

export default SearchBilling

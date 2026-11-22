import Image from 'next/image'
import React from 'react'
import PortfolioAuthInput from '../../Inputs/PortfolioAuthInput'

function ForgetPassword({backToLogin} : {backToLogin:any}) {
  return (
    <div className=''>
      <div className='flex flex-row items-center gap-10 bg-[#8AABBD] rounded-[10px] px-5'>
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
      <div className = 'flex flex-col items-center gap-[10px] mt-[30px]'>
        <PortfolioAuthInput placeholder="Enter your email...." />
        <button  className = 'w-[300px] h-[38px] bg-[#2F80ED] rounded-[10px] text-white font-bold text-[20px] mt-[20px]'>Submit</button>
        <div>--------------------------<span> OR</span>--------------------------</div>
        <p onClick = {backToLogin} className = 'hover:underline text-[15px] text-[#2F80ED] cursor-pointer'>Login</p>
      </div>
    </div>
  )
}

export default ForgetPassword

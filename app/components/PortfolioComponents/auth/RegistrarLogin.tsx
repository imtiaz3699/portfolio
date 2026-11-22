'use client'
import Image from 'next/image'
import React from 'react'
import PortfolioAuthInput from '../Inputs/PortfolioAuthInput'
import {useRouter} from 'next/navigation'
function RegistrarLogin() {
    const router = useRouter();
  return (
    <div className='flex flex-col md:flex-row items-center'>

      <div className='w-full md:w-[500px] bg-[#8AABBD] rounded-l-[15px] rounded-r-[7px] flex flex-col items-center px-5'>
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

        <div className='flex flex-col items-center mt-20 pb-10'>
          <p className='text-[25px] font-normal leading-auto '>Don’t have an account yet?</p>
          <button onClick = {() => router.push("/billing-management-system/signup")} className='w-[300px] bg-[#2F80ED] rounded-[8px] text-[36px] font-semibold text-white'>Sign Up</button>
        </div>
      </div>

      <div className='pl-[50px] pr-[20px] w-full'>

        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/registrar.png"
            alt=""
            width={265}
            height={300}
          />

          <p className="font-bold text-[48px] leading-auto">
            Registrar
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
  )
}

export default RegistrarLogin

import React from 'react'

function PortfolioButton({primary, secondary, btnText}:{btnText:string, primary?:boolean, secondary?:boolean}) {
  return (
    <button className = {`w-27  md:w-33.75 h-11.25 md:h-14.75 rounded-lg font-barlow font-medium text-[14px] md:text-[18px]  ${primary ? 'bg-portfolioPrimary text-portfolioBg' : 'bg-[#262626] text-white'}`}>
      {btnText ?? "Button"}
    </button>
  )
}

export default PortfolioButton

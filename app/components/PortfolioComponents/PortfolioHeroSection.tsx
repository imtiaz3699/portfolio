import Image from 'next/image'
import React from 'react'
import PortfolioButton from './Buttons/PortfolioButton'

function PortfolioHeroSection() {
  const icons = [
    { name: "Zapier", src: "/zapier.png" },
    { name: "Shopify", src: "/shopify.png" },
    { name: "Zoom", src: "/zoom.png" },
    { name: "Slack", src: "/slack.png" },
    { name: "Amazon", src: "/amazon.png" },
    { name: "Adobe", src: "/adobe.png" },
  ];
  return (
    <>
      <div className='container px-2.5 md:px-0 mx-auto h-full'>
        <div className="h-119 flex flex-col items-center justify-center w-full gap-10">

          <h1 className='font-barlow font-bold text-[40px] md:text-[60px] text-white text-center w-full lg:w-[40%]' >A digital Product Studio That Will Work.</h1>

          <input
            type="text"
            placeholder="For startups, enterprise leaders, Media & Publishers, Social Good"
            className='w-full lg:w-[40%] bg-[#262626] border border-[#262626] py-3 md:py-5 rounded-lg px-5 text-white' />
          <div className='flex flex-row items-center justify-center gap-2.5'>
            <PortfolioButton btnText="Our Works" secondary />
            <PortfolioButton btnText="Contact Us" primary />
          </div>
        </div>



      </div>
      <div className = 'border-y border-[#262626]'>
      <div className="w-full  overflow-hidden py-8 container mx-auto ">

        <div className="flex w-max animate-marquee">

          {/* First set */}
          <div className="flex shrink-0 items-center gap-12 pr-12">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex h-15 w-62.25 shrink-0 items-center justify-center"
              >
                <Image
                  src={icon.src}
                  alt={icon.name}
                  width={100}
                  height={55}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set */}
          <div
            aria-hidden="true"
            className="flex shrink-0 items-center gap-12 pr-12"
          >
            {icons.map((icon, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex h-15 w-62.25 shrink-0 items-center justify-center"
              >
                <Image
                  src={icon.src}
                  alt=""
                  width={100}
                  height={55}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
      </div>
      
    </>
  )
}

export default PortfolioHeroSection

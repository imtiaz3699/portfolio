import React from 'react'
import Image from "next/image";
function OurServices() {
  const services = [
    {
      icon: "/design.png",
      name: "Desig",
      description: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
    },
    {
      icon: "/engineer.png",
      name: "Engineering",
      description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
    },
    {
      icon: "/projectManagement.png",
      name: "Project Management",
      description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
    },
  ]
  return (
    <>
      <div className="container relative mx-auto h-58 flex items-center justify-center">
        <Image
          src="/ourservices.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-10 flex flex-col gap-3.5 items-center justify-center">
          <p className='text-[48px] text-white font-semibold font-barlow text-center'>Our Services</p>
          <p className='text-[18px] text-white font-regular font-barlow text-center'>Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
        </div>

      </div>
      <div className='container mx-auto flex flex-col lg:flex-row '>
        {
          services.map((service, index) => (
            <div  key = {index} className='border border-[#262626] p-7.5 lg:p-12.5 flex flex-col items-start'>
              <Image src={service.icon} alt={service.name} width={50} height={50} />
              <p className='text-[24px] text-white font-semibold font-barlow mt-5'>{service.name}</p>
              <p className='text-[18px] text-white font-regular font-barlow mt-2.5'>{service.description}</p>
              <div className='cursor-pointer bg-[#262626] w-full text-center mt-5 lg:mt-6.5  py-4.5 rounded-xl text-white font-barlow font-medium '>Learn More</div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default OurServices

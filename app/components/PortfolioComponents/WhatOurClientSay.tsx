import React from 'react'
import Image from "next/image";
function WhatOurClientSay() {
    // whatourclientsays
    const clientSays = [
        {
            title: "SquareUp has been Instrumental in Transforming our Online Presence. ",
            message: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
            name: "John Smith",
            position: "CEO of Chic Boutique",
            image: "/Profile1.png"
        },
        {
            title: "Working with SquareUp was a breeze.",
            message: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
            name: "Sarah Johnson",
            position: "Founder of HungryBites.",
            image: "/Profile2.png"
        },
        {
            title: "SquareUp developed a comprehensive booking and reservation system for our event management company",
            message: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
            name: "Mark Thompson",
            position: "CEO of EventMasters",
            image: "/Profile3.png"
        },
        {
            title: "ProTech Solutions turned to SquareUp to automate our workflow",
            message: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
            name: "Laura Adams",
            position: "COO of ProTech Solutions.",
            image: "/Profile4.png"
        },
        {
            title: "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
            message: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
            name: "Michael Anderson",
            position: "Founder of Dream Homes Realty.",
            image: "/Profile5.png"
        },
        {
            title: "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
            message: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
            name: "Emily Turner",
            position: "CEO of FitLife Tracker",
            image: "/Profile6.png"
        },
    ]
    return (
        <>
            <div className="container relative mx-auto h-auto py-2 flex items-center justify-center">
                <Image
                    src="/whatourclientsays.png"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="relative z-10 flex flex-col gap-3.5 items-center justify-center">
                    <p className='text-[48px] text-white font-semibold font-barlow text-center'>What our Clients say About us ?</p>
                    <p className='text-[18px] text-white font-regular font-barlow text-center w-full md:w-[40%]'>At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us</p>
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-2 py-[100px] '>
                {
                    clientSays.map((client, index) => {
                        return <div key={index} className='flex flex-col items-start gap-[24px] max-w-[638px] w-full border-b border-gray-300 p-6'>
                            <p className='font-barlow font-medium text-[28px] leading-[150%] text-[#D8FF99]'>{client.title}</p>
                            <p className='font-barlow font-medium text-[18px] leading-[150%] text-[#E6E6E6]'>{client.message}</p>
                            <div className='flex flex-row items-center justify-between p-[20px] w-full max-w-[638px] border border-gray-700 rounded-[8px]'>
                                <div className='flex flex-row items-center gap-[18px]'>
                                    <Image src={client.image} alt={client.name} width={60} height={60} className='rounded-full' />
                                    <div className='flex flex-col '>
                                        <p className='font-barlow font-medium text-[20px] leading-[120%] text-[#E6E6E6]'>{client.name}</p>
                                        <p className='font barlow font-regular text-[18px] leading-[150%] text-[#E6E6E6]'>{client.position}</p>
                                    </div>
                                </div>
                                <button className='bg-gray-600 bg-transparent px-[20px] py-[18px] text-white border-gray-600 border rounded-[8px]'>Open Website</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default WhatOurClientSay

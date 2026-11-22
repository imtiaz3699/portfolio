import Image from 'next/image'
import React from 'react'

function FAQ() {
    const faqData = [
        {
            question:"What services does SquareUp provide?",
            answer:"SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
        },
        {
            question:"Do you offer ongoing support and maintenance after the project is completed?",
            answer:"SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
        },
        {
            question:"How can SquareUp help my business?",
            answer:"",
        },
        {
            question:"How involved will I be in the project development process?",
            answer:"",
        },
        {
            question:"What industries does SquareUp work with?",
            answer:"",
        },
        {
            question:"Can you help with website or app maintenance and updates?",
            answer:"",
        },
        {
            question:"How long does it take to complete a project with SquareUp?",
            answer:"",
        },
    ]
    return (
        <>
            <div className='container relative mx-auto h-58 flex items-center justify-center'>
                <Image
                    src="/faqbg.png"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="relative z-10 flex flex-col gap-3.5 items-center justify-center">
                    <p className='text-[48px] text-white font-semibold font-barlow text-center'>Frequently Asked Questions</p>
                    <p className='text-[18px] text-white font-regular font-barlow text-center'>Still you have any questions? Contact our Team via hello@squareup.com</p>
                </div>
            </div>
            <div className = 'container mx-auto py-[30px] md:py-[60px] lg:py-[80px] border-y border-gray-600'>

            </div>
        </>
    )
}

export default FAQ

"use client"
import React, { useEffect } from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';
import { ServiceBenefit } from '@/types/Service';
import Image from 'next/image';

interface ServiceBenefitProps {
    benefits: ServiceBenefit[],
    title?: string | React.ReactNode
}

const ServiceBenefitSection: React.FC<ServiceBenefitProps> = ({
    benefits,
    title = <p className='text-4xl font-medium text-gray-800 dark:text-gray-200'>Benefit of <span className='text-primary font-semibold'>Website</span> for <br /> Your Business</p>
}) => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className='p-10 my-10' data-aos="fade-up" >
            {title}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 mt-10'>
                {benefits && benefits.map((item, idx) => (
                    <div key={idx} className='flex flex-col gap-3'>
                        <div className='w-12 h-12 relative'>
                            <Image
                                src={item.icon}
                                alt={item.title}
                                fill
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-medium text-gray-700 dark:text-gray-300'>{item.title}</p>
                            <p className='text-xs font-light text-gray-400 line-clamp-2'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServiceBenefitSection
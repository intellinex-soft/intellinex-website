import { Service } from '@/types/Service'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ServiceProps {
    data: Service,
    className?: string
}

const ServiceSection: React.FC<ServiceProps> = ({ data, className }) => {
    return (
        <div data-aos="fade-up" className={clsx('p-10 md:rounded-4xl grid grid-cols-1 lg:grid-cols-2 gap-3', className)}>
            <div className='relative h-[400px]' >
                <Image
                    src={data.thumbnail}
                    fill
                    alt={data.title}
                    loading='lazy'
                    className='rounded-3xl'
                    objectFit='cover'
                />
            </div>
            <div className='p-4 px-10'>
                <p className='text-xs text-primary font-medium'>{data.title}</p>
                <p className='text-4xl text-gray-800 font-medium mt-2'>{data.headeline}</p>
                <p className='text-xs text-gray-500 font-light leading-5 mt-2'>{data.description}</p>
                <div className='mt-5'>
                    <Link href={data.href} className='button-inx'>
                        Get Started!
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection
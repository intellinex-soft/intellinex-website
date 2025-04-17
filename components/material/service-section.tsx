import { Service } from '@/types/Service'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

enum Direction {
    LEFT = "left",
    RIGHT = "right"
}

interface ServiceProps {
    data: Service;
    className?: string;
    direction?: "left" | "right"
}

const ServiceSection: React.FC<ServiceProps> = ({ data, className, direction = Direction.LEFT }) => {
    if (direction === Direction.LEFT) {
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
                <div className='lg:p-4 lg:px-10 max-lg:mt-5'>
                    <p className='text-xs text-primary font-medium '>{data.title}</p>
                    <p className='text-4xl text-gray-800 font-medium mt-2 dark:text-gray-200'>{data.headeline}</p>
                    <p className='text-xs text-gray-500 font-light leading-5 mt-2'>{data.description}</p>
                    <div className='mt-5'>
                        <Link href={data.href} className='button-inx'>
                            Get Started!
                        </Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div data-aos="fade-up" className={clsx('p-10 md:rounded-4xl grid grid-cols-1 lg:grid-cols-2 gap-3', className)}>
                <div className='lg:p-4 lg:px-10 max-lg:mb-5'>
                    <p className='text-xs text-primary font-medium'>{data.title}</p>
                    <p className='text-4xl text-gray-800 font-medium mt-2 dark:text-gray-200'>{data.headeline}</p>
                    <p className='text-xs text-gray-500 font-light leading-5 mt-2'>{data.description}</p>
                    <div className='mt-5'>
                        <Link href={data.href} className='button-inx'>
                            Get Started!
                        </Link>
                    </div>
                </div>
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
            </div>
        )
    }
}

export default ServiceSection
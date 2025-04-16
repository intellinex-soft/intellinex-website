import { Service } from '@/types/Service'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ServiceCard({ data, indx }: { data: Service, indx: number }) {
    return (
        <div data-aos="fade-up"
            data-aos-duration={`${indx + 1}50`} className='bg-gray-50 dark:bg-primary/5 p-6 rounded-md flex flex-col gap-3'>
            <div dangerouslySetInnerHTML={{ __html: data.icon }} className='w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center p-2' />
            <div>
                <p className='text-lg font-semibold text-primary'>{data.title}</p>
                <p className='text-xs font-medium text-gray-600 line-clamp-2 mt-2'>{data.description}</p>
                <Link href={data.href} className='flex'>
                    <div className='flex items-center gap-x-2 mt-3 transition-all duration-200 ease-in-out hover:gap-x-4 group'>
                        <span className='text-primary text-xs transition-all duration-200 ease-in-out group-hover:underline'>Learn more</span>
                        <ChevronRight size={14} className='text-primary' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

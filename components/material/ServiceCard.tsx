import { Service } from '@/types/Service'
import React from 'react'

export default function ServiceCard({ data }: { data: Service }) {
    return (
        <div className='bg-primary/5 p-6 rounded-md flex flex-col gap-3'>
            <div dangerouslySetInnerHTML={{ __html: data.icon }} className='w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center p-2' />
            <div>
                <p className='text-lg font-semibold text-gray-900 dark:text-gray-300'>{data.title}</p>
                <p className='text-xs font-medium text-primary/50 line-clamp-2 mt-2'>{data.description}</p>
            </div>
        </div>
    )
}

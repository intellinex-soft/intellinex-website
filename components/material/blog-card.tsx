import { Eye } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Blog } from '@/types/blog'

const BlogCardCom = ({ data }: { data: Blog }) => {
    return (
        <Link href={`/blog-detail?id=${data.id}`} >
            <div className='rounded-2xl overflow-hidden bg-primary/5'>
                <div className='relative w-full h-[170px]' >
                    <Image
                        src={data.thumbnail}
                        alt={data.title}
                        fill
                        loading='lazy'
                    />
                </div>
                <div className='pt-2 pb-4 px-3'>
                    <div className='flex items-center gap-1 mb-2' >
                        <Eye size={14} color='#888' />
                        <span className='text-xs text-gray-500'>{data.views}</span>
                    </div>
                    <p className='line-clamp-2 text-sm text-primary font-medium'>{data.title}</p>
                    <p className='line-clamp-2 text-xs text-gray-400 mt-2' >{data.short_content}</p>
                </div>
            </div>
        </Link>
    )
}

export default BlogCardCom
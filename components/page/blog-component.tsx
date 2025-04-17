import React from 'react'
import { Blog } from '@/types/blog'
import dynamic from 'next/dynamic'
import { Skeleton } from '../ui/skeleton'

const BlogCardCom = dynamic(() => import("../material/blog-card"), {
    loading: () => <Skeleton className='h-[300px]' />
})

const BlogPageComponenrt = ({ data }: { data: Blog[] }) => {
    return (
        <section className='container mx-auto mb-10'>
            <div className='' >
                <p className='text-xl text-gray-800 mb-5 font-medium dark:text-gray-100'>Latest Blogs</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
                    {data.map((item, idx) => (
                        <BlogCardCom data={item} idx={idx} key={idx} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default BlogPageComponenrt
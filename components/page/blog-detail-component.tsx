import { Blog } from '@/types/blog'
import Image from 'next/image'
import React from 'react'
import moment from "moment";
import BlogBreedcrumb from '../material/blog-breadcrumb';
import { Eye } from 'lucide-react';

function BlogDetailComponent({ data }: { data: Blog }) {
    const postDate = moment(data.created_at).format("MMM DD, YYYY [|] HH:mm A")
    return (
        <section className='mt-20 mb-10' >
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-10' >
                    <div className='col-span-8'>
                        <div className='flex flex-col gap-y-2' >
                            <BlogBreedcrumb />
                            <h2 className='text-2xl font-semibold'>{data.title}</h2>
                            <div className='flex items-center gap-4' >
                                <div className='flex items-center gap-2' >
                                    <Image
                                        src={data.author!.profile}
                                        alt={data.author!.name}
                                        width={20}
                                        height={20}
                                        loading='lazy'
                                        className='rounded'
                                        blurDataURL='data:...'
                                        placeholder='blur'
                                    />
                                    <p className='text-sm font-medium uppercase text-gray-700'>{data.author?.name}</p>
                                </div>
                                <div className='w-1 h-1 rounded-full bg-gray-600' />
                                <span className='text-xs text-gray-500'>{postDate}</span>
                                <div className='w-1 h-1 rounded-full bg-gray-600' />
                                <div className='flex items-center gap-1'>
                                    <Eye size={14} color='#888888' />
                                    <span className='text-xs text-gray-500'>{data.views}</span>
                                </div>
                            </div>
                        </div>
                        <p className='mt-4 text-sm text-gray-500 font-light leading-6'>{data.short_content}</p>
                        <div className='mt-4 pb-4 border-b border-b-gray-100'>
                            <div dangerouslySetInnerHTML={{ __html: data.content! }} ></div>
                        </div>
                        <div className='mt-4'>
                            <p className='mb-3 font-semibold text-gray-600'>Tags:</p>
                            <div className='flex items-center gap-3' >
                                {data.tags?.map((tag, idx) => (
                                    <div key={idx} className='bg-primary/10 px-3 py-1 rounded'>
                                        <p className='text-primary uppercase text-xs font-medium'>{tag}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='col-span-4'>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetailComponent
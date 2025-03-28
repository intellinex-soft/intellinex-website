import { IProduct } from '@/types/Products'
import Image from 'next/image'
import React from 'react'

const ProductDetailComponent = ({ data }: { data: IProduct }) => {
    return (
        <div className='' >
            <div className='container mx-auto'>
                <div className='flex flex-col items-center' >
                    <Image
                        src={data.logo!}
                        alt={`${data.name}`}
                        width={128}
                        height={128}
                        className='rounded-xl'
                        loading='lazy'
                    />
                    <p className='mt-3 text-2xl font-bold bg-clip-text bg-gradient-to-b text-transparent dark:from-slate-500 dark:to-slate-50 from-slate-500 to-slate-800'>
                        {data.name}
                    </p>
                    <div className='mt-10' >
                        <p className='text-center text-gray-400 max-w-[800px] px-5'>{data.description}</p>
                    </div>
                </div>
                <div className='max-w-[800px] mx-auto' >
                    <h1 className='text-xl font-bold mt-10 text-gray-700 dark:text-gray-200'>Key Features of JobFusion</h1>
                    {data?.features && data.features!.map((item: {
                        id: number;
                        text: string;
                        content: string;
                    }, idx: number) => (
                        <div key={idx} className='mt-4'>
                            <h2 className='text-2xl font-semibold dark:text-gray-300 text-gray-600'>{item.id}. {item.text}</h2>
                            <p className='text-gray-500 text-sm mt-2 leading-7' dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductDetailComponent
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
                        <p className='text-center text-gray-400 max-w-4xl'>{data.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailComponent
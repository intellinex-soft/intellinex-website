import { IProduct } from '@/types/Products'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ item }: { item: IProduct }) => {
    return (
        <div className='rounded-xl dark:bg-primary/10 bg-gray-50 overflow-hidden p-10 relative' >
            <div className='absolute top-3 font-medium dark:text-white text-primary capitalize text-sm -left-14 px-16 -rotate-45 py-3 dark:bg-primary bg-primary/10'>
                {item.type}
            </div>
            <div className='flex items-center justify-center'>
                <Image
                    src={item.logo!}
                    alt={`${item.name}`}
                    width={100}
                    height={100}
                    loading='lazy'
                    className='rounded-xl'
                />
            </div>
            <div className='flex flex-col items-center gap-y-3'>
                <p className='mt-4 md:text-xl font-semibold text-sm'>{item.name}</p>
                <p className='text-center line-clamp-2 text-sm text-gray-500'>{item.description}</p>
                <div className='flex items-center gap-x-3 mt-5'>
                    {item.type === "mobile" ? (
                        <button className='w-30 flex justify-center items-center bg-transparent border border-primary py-2 rounded-full group transition-all duration-200 ease-in-out hover:bg-primary cursor-pointer'>
                            <span className='text-sm font-medium text-primary group-hover:text-white transition-all duration-300 ease-in-out'>Download</span>
                        </button>
                    ) : (
                        <Link href={"/"} className='button-inx flex items-center gap-x-2 flex-1' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg>
                            <span className='text-sm font-medium'>Visit</span>
                        </Link>
                    )}
                    <Link href={`/product/${item.id}`} className='button-inx w-30 flex justify-center items-center'>
                        <span className='text-sm font-medium'>Detail</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
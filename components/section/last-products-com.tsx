"use client"
import { IProduct } from '@/types/Products'
import Image from 'next/image'
import React from 'react'
import { Cover } from '../ui/cover'
import Link from 'next/link'
import AOS from "aos";
import 'aos/dist/aos.css';

const LastProductCom = ({ data }: { data: IProduct }) => {
    React.useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className='mt-20 mb-20'>
            <div className='container mx-auto'>

                <p className='text-sm font-medium text-center text-gray-500' >Product</p>
                <h1 className='text-3xl bg-clip-text text-center text-transparent bg-gradient-to-b from-neutral-500 dark:from-neutral-200 to-neutral-800 font-bold mb-5' >Latest Product</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 mt-10 h-[500px]'>

                    <div className='flex flex-col justify-center md:p-10 gap-y-2' data-aos="fade-right">
                        <Image
                            src={data.logo!}
                            alt={data.name}
                            width={70}
                            height={70}
                            loading='lazy'
                            className='rounded-xl'
                        />
                        <div className='mb-3 mt-5' >
                            <Cover>
                                <p className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b hover:from-gray-600 hover:to-gray-400 from-gray-600 to-gray-800 dark:from-gray-500 dark:to-gray-100 '>{data.name}</p>
                            </Cover>
                        </div>
                        <p className='text-base text-gray-500 dark:text-gray-300 leading-7 pe-10' >{data.description}</p>
                        <div className='flex items-center gap-6 mt-5'>
                            <Link href="/download" className='button-inx' >
                                Download
                            </Link>
                            <Link href={`/product-detail/${data.id}`} className='text-xs py-2 px-4 text-primary border border-primary rounded-full'>
                                Learn more
                            </Link>
                        </div>
                    </div>


                    <div className='' data-aos="fade-left">
                        <div className='relative h-full w-full' >
                            <Image
                                src={data.thumbnail!}
                                alt={data.name}
                                fill
                                loading='lazy'
                                objectFit='contain'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LastProductCom
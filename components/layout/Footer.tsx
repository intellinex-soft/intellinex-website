import { Logo } from '@/public/assets'
import { Service } from '@/types/Service'
import Link from 'next/link'
import React from 'react'

interface IService {
    data: Service[]
}

export default async function Footer({ data }: IService) {

    return (
        <footer className='bg-white dark:bg-primary/5 py-10'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-y-10 lg:grid-cols-6'>
                <div className='flex items-center gap-x-2 col-span-2 self-start'>
                    <div className='relative flex items-center gap-x-2' >
                        <Logo size={24} />
                        <span className='text-primary font-semibold text-lg' >INTELLINEX</span>
                        <span className='border-[0.6px] absolute w-[166px] -left-5 -bottom-3 border-dashed dark:border-gray-800' />
                        <span className='border-[0.6px] absolute w-[166px] -left-5 -top-3 border-dashed dark:border-gray-800' />
                        <span className='border-r-[0.6px] absolute h-16 -right-3 border-dashed dark:border-gray-800' />
                        <span className='border-l-[0.6px] absolute h-16 -left-3 border-dashed dark:border-gray-800' />
                    </div>
                </div>
                <div className='flex flex-col' >
                    <span className='text-xs text-gray-400' >Product</span>
                    <ul className='mt-2' >
                        <li>
                            <Link className='text-sm text-gray-700 dark:text-gray-300' href="/product/detail?id=394ry4yr84t8">
                                JobFusion
                            </Link>
                        </li>
                        <li>
                            <Link className='text-sm text-gray-700 dark:text-gray-300' href="/product/detail?id=394ry4yr84t8">
                                Elves
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <span className='text-xs text-gray-400'>Service</span>
                    <ul className='mt-2' >
                        {data.map((service, idx) => (
                            <li key={idx} className='mb-2'>
                                <Link className='text-sm text-gray-700 dark:text-gray-300' href="/product/detail?id=394ry4yr84t8">
                                    {service.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <span className='text-xs text-gray-400'>Company</span>
                    <ul className='mt-2'>
                        <li className='mb-2' >
                            <Link className='text-sm text-gray-700 dark:text-gray-300' href="/product/detail?id=394ry4yr84t8">
                                About
                            </Link>
                        </li>
                        <li className='mb-2' >
                            <Link className='text-sm text-gray-700 dark:text-gray-300' href="/product/detail?id=394ry4yr84t8">
                                Archivement
                            </Link>
                        </li>
                        <li className='mb-2' >
                            <Link className='text-sm text-gray-700 dark:text-gray-300' href="/product/detail?id=394ry4yr84t8">
                                Expore
                            </Link>
                        </li>
                        <li className='mb-2' >
                            <Link className='text-sm text-gray-700 dark:text-gray-300' href="/product/detail?id=394ry4yr84t8">
                                Blog
                            </Link>
                        </li>
                        <li className='mb-2' >
                            <Link className='text-sm text-gray-700 dark:text-gray-300' href="/product/detail?id=394ry4yr84t8">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <span className='text-xs text-gray-400'>Legal</span>
                    <ul className='mt-2'>
                        <li className='mb-2' >
                            <Link className='text-sm text-gray-700 dark:text-gray-300' href="/product/detail?id=394ry4yr84t8">
                                Terms and Conditions
                            </Link>
                        </li>
                        <li className='mb-2' >
                            <Link className='text-sm text-gray-700 dark:text-gray-300' href="/product/detail?id=394ry4yr84t8">
                                Privacy Policy
                            </Link>
                        </li>
                        <li className='mb-2' >
                            <Link className='text-sm text-gray-700 dark:text-gray-300' href="/product/detail?id=394ry4yr84t8">
                                Cookies Management
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

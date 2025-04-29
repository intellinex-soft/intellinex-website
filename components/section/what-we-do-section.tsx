import Image from 'next/image'
import React from 'react'

const WhatWeDoSection = () => {
    return (
        <div
            className='bg-primary/5 py-16' data-aos="fade-up"
            style={{
                backgroundImage: "url('/assets/background_abstract1.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <section className='container mx-auto'>
                <p className='text-2xl font-semibold text-center'>What We Do</p>
                <div className='grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10 px-10'>
                    <div className='p-5 py-10 border flex flex-col items-center justify-center rounded-lg'>
                        <Image
                            src={"/assets/manage.svg"}
                            alt="Managed IT Services"
                            width={256}
                            height={256}
                            className='object-cover w-10 h-10'
                            priority
                            quality={100}
                            placeholder="blur"
                            blurDataURL="/assets/manage.svg"
                        />
                        <p className='mt-4 font-medium'>Managed IT Services</p>
                        <p className='text-center text-xs mt-2'>Cloud, server, network, security, and ongoing tech support</p>
                    </div>

                    <div className='p-5 py-10 border flex flex-col items-center justify-center rounded-lg'>
                        <Image
                            src={"/assets/software.svg"}
                            alt="Managed IT Services"
                            width={256}
                            height={256}
                            className='object-cover w-10 h-10'
                            priority
                            quality={100}
                            placeholder="blur"
                            blurDataURL="/assets/software.svg"
                        />
                        <p className='mt-4 font-medium'>Custom Software Development</p>
                        <p className='text-center text-xs mt-2'>Web and mobile apps built to solve real business problems</p>
                    </div>

                    <div className='p-5 py-10 border flex flex-col items-center justify-center rounded-lg'>
                        <Image
                            src={"/assets/consulting.svg"}
                            alt="Managed IT Services"
                            width={256}
                            height={256}
                            className='object-cover w-10 h-10'
                            priority
                            quality={100}
                            placeholder="blur"
                            blurDataURL="/assets/consulting.svg"
                        />
                        <p className='mt-4 font-medium'>Tech Consulting</p>
                        <p className='text-center text-xs mt-2'>Digital transformation, infrastructure strategy, IT audits, and system optimization</p>
                    </div>

                    <div className='p-5 py-10 border flex flex-col items-center justify-center rounded-lg'>
                        <Image
                            src={"/assets/infinite.svg"}
                            alt="Managed IT Services"
                            width={256}
                            height={256}
                            className='object-cover w-10 h-10'
                            priority
                            quality={100}
                            placeholder="blur"
                            blurDataURL="/assets/infinite.svg"
                        />
                        <p className='mt-4 font-medium'>DevOps & Automation</p>
                        <p className='text-center text-xs mt-2'>CI/CD, cloud deployment, monitoring, and performance engineering</p>
                    </div>

                    <div className='p-5 py-10 border flex flex-col items-center justify-center rounded-lg'>
                        <Image
                            src={"/assets/rocket.svg"}
                            alt="Managed IT Services"
                            width={256}
                            height={256}
                            className='object-cover w-10 h-10'
                            priority
                            quality={100}
                            placeholder="blur"
                            blurDataURL="/assets/rocket.svg"
                        />
                        <p className='mt-4 font-medium'>Startup Tech Advisory</p>
                        <p className='text-center text-xs mt-2'>Helping founders and teams build scalable, secure, and agile systems from Day 1</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhatWeDoSection
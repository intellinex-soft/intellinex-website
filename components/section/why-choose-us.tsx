import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
    return (
        <section className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div data-aos="fade-right" className='flex flex-col items-start justify-center gap-4'>
                    <p className='text-2xl font-semibold'>Why Choose Us?</p>
                    <p className='text-lg font-medium'>&quot;Your Trusted Partner for IT Solutions&quot;</p>
                    <p className='mt-4 text-sm text-justify'>At <span className='text-base font-semibold text-primary'>INTELLINEX</span>, we are committed to delivering exceptional IT solutions that empower your business. Our team of experts is dedicated to understanding your unique needs and providing tailored services that drive efficiency, innovation, and growth.</p>
                    <p className='mt-2 text-sm text-justify'>With a focus on quality, reliability, and customer satisfaction, we strive to be your trusted partner in navigating the ever-evolving technology landscape. Choose us for our expertise, dedication, and commitment to your success.</p>
                    <div>
                        <p className='mt-2 text-base font-semibold text-justify'>Here is reason:</p>
                        <ul className='mt-2 list-disc list-inside'>
                            <li className='text-sm'>
                                <span className='font-medium'>Small team, big impact</span> - agile, responsive, and client-centered</li>
                            <li className='text-sm'>
                                <span className='font-medium'>Tailored solutions</span> - no templates, just what works for you</li>
                            <li className='text-sm'>
                                <span className='font-medium'>Security first</span> - compliance, protection, and peace of mind</li>
                            <li className='text-sm'><span className='font-medium'>End-to-end partnership</span> - from strategy to execution</li>
                            <li className='text-sm'><span className='font-medium'>Future-ready</span> - we build with scale and sustainability in mind</li>
                        </ul>
                    </div>
                </div>
                <div data-aos="fade-left" className='flex items-center justify-center'>
                    <Image
                        src={"/assets/choose.jpg"}
                        alt="Why Choose Us"
                        width={500}
                        height={500}
                        className='object-cover w-full h-[600px] rounded-lg shadow-lg'
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={100}
                        placeholder="blur"
                        blurDataURL="/assets/choose.jpg"
                    />
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs
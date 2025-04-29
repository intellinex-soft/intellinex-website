import Image from 'next/image'
import React from 'react'

const AboutUsSection = () => {
    return (
        <section className='container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div data-aos="fade-right" className='flex flex-col items-start justify-center gap-4'>
                <p className='text-2xl font-semibold'>About Us</p>
                <p className='text-lg font-medium'>&quot;Empowering Businesses Through Smart Technology Solutions&quot;</p>
                <p className='mt-4 text-sm text-justify'>At <span className='text-base font-semibold text-primary'>INTELLINEX</span>, we are a dynamic IT services and consulting startup founded with a vision to help businesses leverage technology for smarter operations, better efficiency, and scalable growth. With deep expertise across IT infrastructure, software development, and digital transformation, we deliver reliable, forward-thinking solutions tailored to your goals.</p>
                <p className='mt-2 text-sm text-justify'>Our team consists of passionate specialists with a shared commitment to innovation and service excellence. From designing robust IT systems to building cutting-edge software, from supporting digital infrastructure to advising on strategic tech decisions — we serve as your trusted partner in the ever-evolving tech landscape.</p>
            </div>
            <div data-aos="fade-left" className='flex items-center justify-center'>
                <Image
                    src={"/assets/about.jpg"}
                    alt="About Us"
                    width={500}
                    height={500}
                    className='object-cover w-full h-full rounded-lg shadow-lg'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                    placeholder="blur"
                    blurDataURL="/assets/about.jpg"
                    style={{ width: '100%', height: 'auto' }} // Ensures responsive behavior
                />
            </div>
        </section>
    )
}

export default AboutUsSection
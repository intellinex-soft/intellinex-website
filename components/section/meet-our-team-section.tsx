import Image from 'next/image'
import React from 'react'

const MeetOutTeamSection = () => {
    return (
        <section className='container mx-auto mt-10' data-aos="fade-up">
            <p className='text-2xl font-semibold'>Meet Our Team</p>
            <div className='grid grid-cols-1 gap-10 mt-10 md:grid-cols-3 lg:grid-cols-4'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <div className='relative w-full h-[300px] overflow-hidden rounded-lg'>
                        <Image
                            src="/assets/person.png"
                            alt="Team Member 1"
                            className='object-cover object-center w-full h-full bg-gradient-to-b from-primary to-primary/50'
                            width={200}
                            height={200}
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={100}
                            placeholder="blur"
                            blurDataURL="/assets/person.jpg"
                        />
                    </div>
                    <div>
                        <p className='text-lg font-semibold'>Chenter PHAI</p>
                        <p className='text-sm text-gray-500'>CEO & Founder</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeetOutTeamSection
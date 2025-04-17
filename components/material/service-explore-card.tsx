import { Service } from '@/types/Service'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SerciceExploreCard = ({ data }: { data: Service }) => {
    return (
        <div className='rounded-2xl p-5 relative overflow-hidden lg:h-[270px] md:h-[300px] h-[250px] group cursor-pointer'>
            <Image
                src={data.thumbnail}
                alt={data.title}
                fill
                objectFit='cover'
            />
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/45 z-10 group-hover:bg-black/70 transition-all duration-200 ease-linear p-5' >
                <p className='text-sm font-medium text-gray-200'>{data.title}</p>
                <p className='text-white text-xl md:text-2xl font-medium max-w-[80%] mt-2 line-clamp-2'>{data.headeline}</p>
                <div className='mt-10'>
                    <Link href={data.href} className='button-inx'>
                        Explore More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SerciceExploreCard
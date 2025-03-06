import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import { useSwiper } from 'swiper/react'

export default function SwiperButton() {
    const swiper = useSwiper()
    return (
        <div className='mt-10 flex self-end flex-row items-center gap-3 absolute right-0 bottom-0 z-10' >
            <button className='border w-7 h-7 rounded-full flex items-center justify-center cursor-pointer' type='button' onClick={() => swiper.slidePrev()} >
                <ArrowLeft size={15} className='text-gray-400' />
            </button>
            <button className='border w-7 h-7 rounded-full flex items-center justify-center cursor-pointer' type='button' onClick={() => swiper.slideNext()} >
                <ArrowRight size={15} className='text-gray-400' />
            </button>
        </div>
    )
}

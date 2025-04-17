"use client"
import React from 'react'
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperButton from '../ui/swipe-button';
import { Service } from '@/types/Service';
import AOS from "aos";
import 'aos/dist/aos.css';
import dynamic from 'next/dynamic';
import { Skeleton } from '../ui/skeleton';

const ServiceCard = dynamic(() => import("../material/ServiceCard"), {
    ssr: false,
    loading: () => <Skeleton className='p-6' />
})

export default function ServiceHighlightCom({ data }: { data: Service[] }) {
    React.useEffect(() => {
        AOS.init({})
    }, [])
    return (
        <div className='container mx-auto'>
            <p className='text-sm font-medium text-center text-gray-500' >Services</p>
            <h2 className="text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 dark:from-neutral-200 to-neutral-600 font-bold mb-5">
                Our Services
            </h2>
            <div className="mt-20 mb-10">
                <Swiper
                    pagination={{ type: "bullets", clickable: true, }}
                    loop={true}
                    modules={[Autoplay, Navigation, Pagination, A11y]}
                    slidesPerView={2}
                    spaceBetween={20}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                        1536: { slidesPerView: 4 },
                        1920: { slidesPerView: 4 },
                    }}
                    speed={700}
                    className='relative'
                >
                    {data.map((service, indx) => (
                        <SwiperSlide key={service.id} className='mb-20' >
                            <ServiceCard indx={indx} data={service} />
                        </SwiperSlide>
                    ))}
                    {data.length > 4 && (
                        <SwiperButton />
                    )}
                </Swiper>
            </div>
        </div>
    )
}

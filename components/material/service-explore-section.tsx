"use client"
import { Service } from '@/types/Service'
import React, { useEffect } from 'react'
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperButton from '../ui/swipe-button';
import dynamic from 'next/dynamic';
import AOS from "aos";
import 'aos/dist/aos.css';

const ServiceExploreCard = dynamic(() => import("../material/service-explore-card"), {
    ssr: false
})

const ServiceExploreSection = ({ data }: { data: Service[] }) => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <section className='px-10 mb-10' data-aos="fade-up">
            <Swiper
                pagination={{ type: "bullets", clickable: true, }}
                loop={true}
                modules={[Autoplay, Navigation, Pagination, A11y]}
                slidesPerView={2}
                spaceBetween={20}
                breakpoints={{
                    480: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                    1280: { slidesPerView: 3 },
                }}
                speed={700}
                className='relative'
            >
                {data.map((service) => (
                    <SwiperSlide key={service.id} className='mb-20'>
                        <ServiceExploreCard data={service} />
                    </SwiperSlide>
                ))}

                <SwiperButton />

            </Swiper>
        </section>
    )
}

export default ServiceExploreSection
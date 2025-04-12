"use client"
import { Partner } from '@/types/partner'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import PartnerCard from '../material/partner-card';

const PartnershipSection = ({ data }: { data: Partner[] }) => {
    return (
        <section className='mt-20 mb-20'>
            <div className='container mx-auto'>
                <p className='text-sm font-medium text-center text-gray-500' >Partership</p>
                <h1 className='text-3xl bg-clip-text text-center text-transparent bg-gradient-to-b from-neutral-500 dark:from-neutral-200 to-neutral-800 font-bold mb-5' >Our Partner</h1>
            </div>

            <div className='container mx-auto mt-10'>
                <Swiper
                    pagination={{ type: "bullets", clickable: true, }}
                    loop={true}
                    modules={[Autoplay, Navigation, Pagination, A11y]}
                    slidesPerView={2}
                    spaceBetween={20}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 4 },
                        992: { slidesPerView: 6 },
                        1200: { slidesPerView: 8 },
                    }}
                    autoplay={true}
                    speed={700}
                    className='relative'
                    centeredSlides={true}
                >

                    {data.map((item, idx) => (
                        <SwiperSlide key={idx} className='mb-20' >
                            <PartnerCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    )
}

export default PartnershipSection
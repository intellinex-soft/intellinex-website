"use client"
import { Service } from '@/types/Service'
import React, { useEffect } from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';
import dynamic from 'next/dynamic';
import { Skeleton } from '../ui/skeleton';

const ServiceSection = dynamic(() => import("../material/service-section"), {
    loading: () => <Skeleton className='w-full h-[500px]' />,
    ssr: false
});

const ServiceBenefitSection = dynamic(() => import("../material/service-benefit-section"), {
    ssr: false,
    loading: () => <Skeleton className='w-full h-[550px]' />,
});

const ServiceExploreSection = dynamic(() => import("../material/service-explore-section"), {
    ssr: false,
    loading: () => <Skeleton className='w-full h-[550px]' />,
})

function ServiceComponent({ data }: { data: Service[] }) {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='container mx-auto flex flex-col gap-y-5'>
            <ServiceSection
                data={data.find((item) => item.href === "/services/web-app-dev")!}
                className='bg-blue-50 dark:bg-primary/10'
            />

            <ServiceBenefitSection benefits={data.find((item) => item.href === "/services/web-app-dev")!.benefit} />

            <ServiceSection
                data={data.find((item) => item.href === "/services/mobile-app-dev")!}
                className='bg-pink-50 dark:bg-primary/10'
                direction='right'
            />

            <ServiceBenefitSection
                benefits={data.find((item) => item.href === "/services/mobile-app-dev")!.benefit}
                title={<p className='text-4xl font-medium text-gray-800 dark:text-gray-200'>Benefits of <span className='text-primary font-semibold'>Mobile App</span></p>}
            />

            <div className='px-10 mb-2'>
                <p className='lg:text-4xl text-2xl font-medium text-gray-800 dark:text-gray-200'>Explore other Services</p>
            </div>

            <ServiceExploreSection data={data.filter((item) => (item.href !== "/services/web-app-dev") && (item.href !== "/services/mobile-app-dev"))} />

        </div>
    )
}

export default ServiceComponent
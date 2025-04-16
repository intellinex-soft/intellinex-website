"use client"
import { Service } from '@/types/Service'
import React, { useEffect } from 'react'
import ServiceSection from '../material/service-section'
import AOS from "aos";
import 'aos/dist/aos.css';

function ServiceComponent({ data }: { data: Service[] }) {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='container mx-auto'>
            <ServiceSection
                data={data.find((item) => item.href === "/services/web-app-dev")!}
                className='bg-blue-50'
            />
        </div>
    )
}

export default ServiceComponent
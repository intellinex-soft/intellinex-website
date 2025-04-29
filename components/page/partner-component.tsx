"use client"
import { Partner } from '@/types/partner'
import React from 'react'
import PartnerCardMain from '../material/partner-card-main'

const PartnerComponent = ({ data }: { data: Partner[] }) => {


    return (
        <div className='mb-10'>
            <section className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {data && data.map((item, idx) => (
                    <PartnerCardMain key={idx} partner={item} />
                ))}
            </section>
        </div>
    )
}

export default PartnerComponent
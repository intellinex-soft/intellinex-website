import { Partner } from '@/types/partner'
import Image from 'next/image'
import React from 'react'

const PartnerCard = ({ item }: { item: Partner }) => {
    return (
        <div className='flex items-center justify-center' >
            <Image
                src={item.picture}
                width={100}
                height={50}
                alt={item.name}
            />
        </div>
    )
}

export default PartnerCard
import { Partner } from '@/types/partner'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React from 'react'

const PartnerCardMain = ({ partner }: { partner: Partner }) => {
    const { theme } = useTheme()
    return (
        <div className='border flex flex-col items-center justify-center p-10'>
            <Image
                src={theme === "light" ? partner.picture.white : partner.picture.black}
                width={500}
                height={500}
                alt={partner.name}
                loading='lazy'
                className='w-[60%]'
                objectFit='contain'
            />
            <p className='text-lg font-semibold mt-3'>{partner.name}</p>
            <p className='text-xs text-center'>{partner.short_description}</p>
        </div>
    )
}

export default PartnerCardMain
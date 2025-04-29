"use client"
import { Partner } from '@/types/partner'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PartnerCard = ({ item }: { item: Partner }) => {
    const { theme } = useTheme()
    return (
        <Link href={item.reference}>
            <div className='flex items-center justify-center' >
                <Image
                    src={theme === "dark" ? item.picture.black : item.picture.white}
                    width={100}
                    height={50}
                    alt={item.name}
                />
            </div>
        </Link>
    )
}

export default PartnerCard
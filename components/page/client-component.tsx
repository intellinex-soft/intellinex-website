"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const ClientComponent = () => {

    const dFilter = [
        {
            label: "All",
            value: "all"
        },
        {
            label: "On-Going",
            value: "on-going"
        },
        {
            label: "One-time",
            value: "one-time"
        }
    ]

    const searchParams = useSearchParams()
    const category = searchParams.get("category")


    return (
        <div className='mb-10'>
            <div className='container mx-auto flex justify-center items-center space-x-5 mb-10'>
                {dFilter.map((item, idx) => (
                    <Link key={idx} href={`?category=${item.value}`} >
                        <div className={`rounded-full px-4 h-7 flex items-center justify-center ${(item.value === "all" && (category === null || category === "all")) ||
                            (item.value === category)
                            ? "bg-neutral-100"
                            : "bg-transparent"
                            }`}>
                            <span className='text-xs text-neutral-600'>{item.label}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ClientComponent
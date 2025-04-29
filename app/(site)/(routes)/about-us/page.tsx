import AboutUsComponent from '@/components/page/about-us-component'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "About Us",
    description: "About Us",
    keywords: "About Us",
}

export default function Page() {
    return <AboutUsComponent />
}

import ContactUsComponent from '@/components/page/contact-us-component'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Contact our sales to consult."
}

export default function ContactUsPage() {
    return <ContactUsComponent />
}

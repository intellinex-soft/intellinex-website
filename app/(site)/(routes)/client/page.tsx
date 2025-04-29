import ClientComponent from '@/components/page/client-component'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Client",
    description: "We have client"
}

export default function ClientPage() {
    return <ClientComponent />
}

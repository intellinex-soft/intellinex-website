import { Metadata } from 'next'
import React, { PropsWithChildren, Suspense } from 'react'
import Loading from './loading'

export const metadata: Metadata = {
    title: {
        default: "Intellinex Soft",
        template: "%s - Intellinex Soft"
    },
    description: "Detail blog, what we have done?"
}

export default function Layout({
    children
}: PropsWithChildren) {
    return (
        <Suspense fallback={<Loading />} >
            {children}
        </Suspense>
    )
}

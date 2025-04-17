import React, { PropsWithChildren, Suspense } from 'react'
import Loading from './loading'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: {
        default: "Intellinex",
        template: "%s - Intellinex"
    },
    description: "Detail blog, what we have done?"
}

export default function Layout({ children }: PropsWithChildren) {
    return (
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    )
}

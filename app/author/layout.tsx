import { Metadata } from 'next'
import React, { PropsWithChildren } from 'react'

export const metadata: Metadata = {
    title: {
        default: "Intellinex Backend",
        template: "%s - Intellinex Backend"
    },
    description: "This is a backend of intellinex soft"
}

export default function AuthorLayout({ children }: PropsWithChildren) {
    return (
        <div>
            {children}
        </div>
    )
}

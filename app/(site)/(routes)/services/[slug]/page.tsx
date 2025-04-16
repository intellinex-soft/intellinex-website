import React from 'react'

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    return (
        <div>ServiceDetailPage: {slug}</div>
    )
}

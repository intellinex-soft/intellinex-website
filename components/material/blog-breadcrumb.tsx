"use client"
import { ChevronsLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


function BlogBreedcrumb() {
    return (
        <div className='mb-2'>
            <Link href="/blog" className='flex items-center gap-2' >
                <ChevronsLeft size={16} color='#888888' />
                <span className='text-sm font-light text-[#888888]' >Back</span>
            </Link>
        </div>
    )
}

export default BlogBreedcrumb
"use client"
import { ChevronsLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'


function BlogBreedcrumb() {
    const router = useRouter()
    return (
        <div className='mb-2'>
            <button onClick={() => router.back()} className='flex items-center gap-2 cursor-pointer' >
                <ChevronsLeft size={16} color='#888888' />
                <span className='text-sm font-light text-[#888888]' >Back</span>
            </button>
        </div>
    )
}

export default BlogBreedcrumb
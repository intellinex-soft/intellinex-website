"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const Breadcrumb = () => {

    const pathname = usePathname();
    const path = pathname.split("/")

    const title = path[1].split("-").join(" ")

    return (
        <section className='py-10 h-[24rem]'>
            <div className='container mx-auto h-[24rem] flex flex-col justify-center items-center'>
                <h1 className='text-4xl bg-gradient-to-b bg-clip-text text-transparent from-neutral-600 dark:from-primary/80 to-neutral-900 dark:to-primary font-bold capitalize'>
                    {title}
                </h1>
                <div className='flex flex-row items-center gap-x-3 mt-3' >
                    <Link href="/" replace>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                    </Link>
                    <span className='text-gray-400 text-xs'>/</span>
                    {path.slice(1).map((item, idx) => (
                        <div key={idx}>
                            <span className='capitalize text-sm text-gray-400' >
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <ShootingStars />
            <StarsBackground />
        </section>
    )
}

export default Breadcrumb
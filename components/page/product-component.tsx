"use client"
import { IProduct } from '@/types/Products'
import React from 'react'
// import ProductCard from '../material/ProductCard'
import AOS from "aos";
import 'aos/dist/aos.css';
import dynamic from 'next/dynamic';
import { Skeleton } from '../ui/skeleton';

const ProductCard = dynamic(() => import("../material/ProductCard"), {
    ssr: false,
    loading: () => <Skeleton className='p-10 h-80' />
})

const ProductComponent = ({ data }: { data: IProduct[] }) => {
    React.useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className='mb-10'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {data.map((item, idx) => (
                    <ProductCard indx={idx} key={idx} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ProductComponent
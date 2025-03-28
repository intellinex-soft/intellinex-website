import { IProduct } from '@/types/Products'
import React from 'react'
import ProductCard from '../material/ProductCard'

const ProductComponent = ({ data }: { data: IProduct[] }) => {
    return (
        <div className='mb-10' >
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {data.map((item, idx) => (
                    <ProductCard key={idx} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ProductComponent
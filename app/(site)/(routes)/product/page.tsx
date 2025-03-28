import ProductComponent from '@/components/page/product-component'
import { createClient } from '@/utils/supabase/server'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Product"
}

export default async function ProductPage() {

    const supabase = await createClient();
    const { data: products, error } = await supabase
        .from('fa_products')
        .select('*')
        .eq('status', true)
        .order('created_at', { ascending: false })

    if (error) {
        console.log(error.message)
        return null;
    }

    return <ProductComponent data={products} />
}

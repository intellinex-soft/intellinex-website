import NotFoundComponent from '@/components/layout/NotFoundComponent';
import ProductDetailComponent from '@/components/page/ProductDetailComponent'
import { createClient } from '@/utils/supabase/server'
import { Metadata } from 'next';
import React from 'react'

interface IProductDetailProps { searchParams: { id: string } }

export async function generateMetadata({
    searchParams
}: IProductDetailProps): Promise<Metadata> {
    const { id } = await searchParams
    const supabase = await createClient();
    const { data: product } = await supabase
        .from('fa_products')
        .select('*')
        .eq('id', id)
        .limit(1)
        .single();
    return {
        title: product?.name,
        description: product?.description
    }
}


export default async function Page({ searchParams }: IProductDetailProps) {

    const { id } = await searchParams

    const supabase = await createClient();
    const { data: product, error } = await supabase
        .from('fa_products')
        .select('*')
        .eq('id', id)
        .limit(1)
        .single();

    if (error) {
        console.log(error.message)
        return <NotFoundComponent />;
    }

    return <ProductDetailComponent data={product} />
}

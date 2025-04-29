import ProductDetailComponent from '@/components/page/product-detail-component';
import { createClient } from '@/utils/supabase/server';
import { Metadata } from 'next';
import React from 'react'

export async function generateStaticParans() {
    const supabase = await createClient();
    const { data: products } = await supabase
        .from('fa_products')
        .select('id')
        .eq('status', true)
        .order('created_at', { ascending: false })
    const allIds = products && products?.map((product) => product?.id)
    return allIds?.map((id) => ({ id }))
}

export async function generateMetadata({
    params
}: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const supabase = await createClient();
    const { data: product } = await supabase
        .from('fa_products')
        .select('*')
        .eq('id', id)
        .limit(1)
        .single();
    if (!product) {
        return {
            title: 'Product Not Found',
            description: 'The product you are looking for does not exist.',
        };
    }

    return {
        title: product.name,
        description: product.description,
        openGraph: {
            images: [
                {
                    url: product.logo,
                },
            ],
        },
    };
}


export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const supabase = await createClient();
    const { data: product } = await supabase
        .from('fa_products')
        .select('*')
        .eq('id', id)
        .limit(1)
        .single();

    if (!product) {
        return null;
    }
    return <ProductDetailComponent data={product} />
}

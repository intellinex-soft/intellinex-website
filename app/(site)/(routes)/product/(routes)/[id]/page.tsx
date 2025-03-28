import NotFoundComponent from '@/components/layout/NotFoundComponent';
import ProductDetailComponent from '@/components/page/product-detail-component'
import { createClient } from '@/utils/supabase/server'
import { Metadata } from 'next';
import React from 'react'

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { id } = await params
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


export default async function Page({ params }: Props) {
    const { id } = await params;

    if (process.env.NODE_ENV === 'development') {
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

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

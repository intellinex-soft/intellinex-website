import ProductDetailComponent from '@/components/page/product-detail-component';
import { createAdminClient } from '@/utils/supabase/admin';
import { createClient } from '@/utils/supabase/server';
import { Metadata } from 'next';
import React from 'react'


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

export async function generateStaticParams() {
    const supabase = createAdminClient();
    const { data: products = [] } = await supabase
        .from('fa_products')
        .select('id')
        .eq('status', true)
    return products!.map((product) => ({
        id: product.id
    }))
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

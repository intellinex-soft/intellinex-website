import BlogDetailComponent from '@/components/page/blog-detail-component';
import { createClient } from '@/utils/supabase/server';
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
    params
}: { params: { id: string } }): Promise<Metadata> {
    const { id } = await Promise.resolve(params)
    const supabase = await createClient();
    const { data: blog } = await supabase
        .from('fa_blogs')
        .select('*')
        .eq('id', id)
        .limit(1)
        .single();
    if (!blog) {
        return {
            title: 'Blog Not Found',
            description: 'The blog you are looking for does not exist.',
        };
    }

    return {
        title: blog.title,
        description: blog.short_content,
        openGraph: {
            images: [
                {
                    url: blog.thumbnail,
                },
            ],
        },
    };
}

export default async function Payge({ params }: { params: { id: string } }) {
    const { id } = await Promise.resolve(params)
    const supabase = await createClient();
    const { data: blog } = await supabase
        .from('fa_blogs')
        .select('*')
        .eq('id', id)
        .limit(1)
        .single();
    if (!blog) {
        return null;
    }

    return <BlogDetailComponent data={blog} />
}


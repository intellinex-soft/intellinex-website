import BlogDetailComponent from '@/components/page/blog-detail-component';
import { createAdminClient } from '@/utils/supabase/admin';
import { createClient } from '@/utils/supabase/server';
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
    params
}: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
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
        keywords: blog.title
    };
}

export async function generateStaticParams() {
    const supabase = createAdminClient();
    const { data: blogs = [] } = await supabase
        .from('fa_blogs')
        .select('*')
        .eq("status", true);

    return blogs!.map((blog) => ({
        id: blog.id
    }))
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
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


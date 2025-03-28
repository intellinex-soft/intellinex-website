import BlogPageComponenrt from '@/components/page/blog-component';
import { createClient } from '@/utils/supabase/server'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Blog"
}


export default async function Page() {

    const supabase = await createClient();

    const { data: blogs, error } = await supabase
        .from("fa_blogs")
        .select("id, title, thumbnail, short_content, views, author, created_at")
        .eq('status', 1)
        .order('created_at', { ascending: false });

    if (error) {
        console.log(error)
        return null;
    }

    return <BlogPageComponenrt data={blogs!} />
}

import AboutUsComponent from '@/components/page/about-us-component'
import { createClient } from '@/utils/supabase/server'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "About Us",
    description: "About Us",
    keywords: "About Us",
}

export default async function Page() {

    const supabase = await createClient()
    const { data: teams } = await supabase
        .from("fa_teams")
        .select("*")
        .order("id", { ascending: true });

    return <AboutUsComponent teams={teams!} />
}

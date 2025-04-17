import ServiceComponent from '@/components/page/service-component'
import { createClient } from '@/utils/supabase/server'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Service"
}

export default async function Page() {

    const supabase = await createClient();

    const { data: servies } = await supabase
        .from("fa_services")
        .select("*")
        .eq("status", true)

    return <ServiceComponent data={servies!} />
}

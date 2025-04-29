import PartnerComponent from '@/components/page/partner-component'
import { createClient } from '@/utils/supabase/server'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Partner",
    description: "Parntership",
    keywords: "Intellinex, Partner"
}

export default async function Page() {
    const supabase = await createClient()
    const { data: partners, error } = await supabase
        .from('fa_partners')
        .select('*');

    if (error) {
        return null;
    }

    return <PartnerComponent data={partners} />
}

import { Metadata } from "next";
import { PropsWithChildren, Suspense } from "react";
import Loading from "./loading";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: {
        default: "Intellinex",
        template: "%s - Intellinex"
    },
    description: " what we have."
}

const Breadcrumb = dynamic(() => import('@/components/layout/Breadcrumb'), {})

export default function SiteLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Breadcrumb />
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </>
    )
}
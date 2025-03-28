import Breadcrumb from "@/components/layout/Breadcrumb";
import { Metadata } from "next";
import { PropsWithChildren, Suspense } from "react";

export const metadata: Metadata = {
    title: {
        default: "Home",
        template: "%s - Intellinex Soft"
    },
    description: " what we have."
}

export default function SiteLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Breadcrumb />
            <Suspense>
                {children}
            </Suspense>
        </>
    )
}
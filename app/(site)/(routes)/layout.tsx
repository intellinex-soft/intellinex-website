import Breadcrumb from "@/components/layout/Breadcrumb";
import { Metadata } from "next";
import { PropsWithChildren, Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
    title: {
        default: "Intellinex",
        template: "%s - Intellinex"
    },
    description: " what we have."
}

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
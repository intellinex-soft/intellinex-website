import Image from "next/image";

interface Logo {
    size?: number;
}
export function Logo({ size = 44 }: Logo) {
    return (
        <Image
            src="/assets/logo.svg"
            alt="IntelliNex"
            width={size}
            height={size}
            loading="lazy"
        />
    )
}
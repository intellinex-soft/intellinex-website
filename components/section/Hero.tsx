"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import Image from "next/image";

export function Hero() {
    const trusted = [
        "/assets/logo1.svg",
        "/assets/logo2.svg",
        "/assets/logo3.svg",
        "/assets/logo4.svg",
    ]

    return (
        <div className="h-[40rem] w-full dar:bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-primary/50 dark:from-primary/50 to-primary  text-center font-sans font-bold">
                    Join our Squad
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Welcome to MailJet, the best transactional email service on the web.
                    We provide reliable, scalable, and customizable email solutions for
                    your business. Whether you&apos;re sending order confirmations,
                    password reset emails, or promotional campaigns, MailJet has got you
                    covered.
                </p>
            </div>
            <div className="mx-auto mt-10">
                <p className="relative z-10 text-sm  bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 dark:from-neutral-200 to-neutral-600  text-center font-bold">Trusted by</p>
                <div className="grid grid-cols-4 items-center gap-10 mt-5">
                    {trusted.map((item, idx) => (
                        <Image key={idx}
                            src={item}
                            height={20}
                            width={70}
                            alt="Logo Trusted"
                        />
                    ))}
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
}

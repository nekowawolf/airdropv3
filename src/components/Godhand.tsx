'use client';

import Link from "next/link";

export default function GodhandSection() {
    return (
        <section id="alpha" className="flex items-center justify-center relative">
            <img
                src="https://nekowawolf.github.io/cdn-images/images/2026/1781829282_godhand.png"
                alt="Explore Airdrop Dark"
                className="theme-icon-sun object-cover w-full h-full"
            />
            <img
                src="https://nekowawolf.github.io/cdn-images/images/2026/1781831285_godhand_white.png"
                alt="Explore Airdrop Light"
                className="theme-icon-moon object-cover w-full h-full"
            />

            <Link href="/airdrops" className="absolute flex flex-col items-center sm:mr-14 mr-7">
                <img
                    src="https://nekowawolf.github.io/cdn-images/images/2026/1781829491_folder.png"
                    alt="Folder"
                    className="w-14 sm:w-24 h-14 sm:h-24 cursor-pointer"
                />
                <p className="-mt-2 text-fill-color text-[10px] sm:text-xl font-semibold drop-shadow-md">
                    Explore Airdrop
                </p>
            </Link>
        </section>
    );
}
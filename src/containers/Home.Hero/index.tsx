import Link from "next/link";
import Image from "next/image";
import HeroImgRight from "@/assets/images/hero2.jpg";

export const HomeHeroContainer = () => {
    return (
        <section id="hero" className="py-16 flex flex-col lg:flex-row gap-12">
            <article className="flex flex-col justify-center gap-12">
                <div className="space-y-2.5">
                    <h1 className="text-4xl">
                        Automate your workflow with <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-rose-300">{process.env.NODE_ENV}</span>
                    </h1>
                    <p className="text-xl">Upload and manage your students notes and assignments in one place.</p>
                </div>
                <div className="flex gap-6">
                    <Link href="/authentication/sign-in" className="p-6 text-white rounded border bg-[#161616] dark:border-[#1f1f1f]">
                        Get Started
                    </Link>
                    <Link href="/" className="p-6 rounded border dark:border-[#1f1f1f]">
                        How It Works
                    </Link>
                </div>
            </article>
            <article className="hidden lg:flex lg:w-5/6">
                <Image src={HeroImgRight} alt="hero image" className="rounded-xl"/>
            </article>
        </section>
    )
}
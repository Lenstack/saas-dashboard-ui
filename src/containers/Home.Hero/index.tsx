import Link from "next/link";
import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import HeroImgRight from "@/assets/images/heroright2.jpg";

export const HomeHeroContainer = () => {
    return (
        <section className="flex items-center gap-5 pt-32" id="hero">
            <div className="space-y-10 lg:w-3/6">
                <article className="space-y-10">
                    <h1 className="text-6xl font-bold">
                        Automate your workflow with <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-rose-300">Lensaas</span>
                    </h1>
                    <p className="text-xl">
                        Upload and manage your students notes and assignments in one place.
                    </p>
                </article>
                <div className="flex gap-5">
                    <Link href="/authentication/sign-in"
                          className="border dark:border-[#1f1f1f] bg-[#161616] text-white dark:bg-[#161616] px-8 py-5">Get
                        Started
                    </Link>
                    <button
                        className="flex justify-center items-center gap-2.5 px-3.5 py-5 border dark:border-[#1f1f1f]">
                            <span>
                                <ArrowLeftIcon className="h-5 w-5"/>
                            </span>
                        How It Work
                    </button>
                </div>
            </div>
            <div className="hidden lg:flex w-5/6">
                <Image src={HeroImgRight} alt="Picture of the author"
                       className="rounded-2xl"/>
            </div>
        </section>
    )
}
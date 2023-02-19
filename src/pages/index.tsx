import {Navbar} from "@/components";
import {AUTH_ROUTES, HOME_ROUTES} from "@/constants";
import Image from "next/image";
import {ArrowLeftIcon, Bars2Icon} from "@heroicons/react/24/outline";
import Link from "next/link";
import HeroImgRight from "@/assets/images/heroright2.jpg";
import Avatar from "boring-avatars";

export default function Home() {
    return (
        <div className="p-10 w-full h-screen flex flex-col gap-5">
            <header className="flex justify-between align-middle items-center">
                <div>
                    <Link href="/">
                        <Avatar size={32} name="Avatar" variant="sunset"
                                colors={["#000000", "#31323E", "#7EEAEC", "#C0C0C0"]}/>
                    </Link>
                </div>
                <div className="hidden lg:flex gap-20">
                    <Navbar items={HOME_ROUTES} className="space-x-5"/>
                    <Navbar items={AUTH_ROUTES} className="space-x-5"/>
                </div>
                <div className="flex lg:hidden gap-5">
                    <button className="">
                        <Bars2Icon className="h-8 w-8"/>
                    </button>
                </div>
            </header>
            <main className="space-y-10">
                <section className="section__hero" id="hero">
                    <div className="space-y-5 mt-10">
                        <article className="space-y-2.5">
                            <h1 className="text-6xl font-bold">
                                Automate your workflow with <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-rose-300">Lensaas</span>
                            </h1>
                            <p className="text-xl">
                                Upload and manage your students notes and assignments in one place.
                            </p>
                        </article>
                        <div className="flex gap-5">
                            <button
                                className="border dark:border-[#1f1f1f] bg-[#161616] text-white dark:bg-[#161616] px-8 py-5">Get
                                Started
                            </button>
                            <button
                                className="flex justify-center items-center gap-2.5 px-3.5 py-5 border dark:border-[#1f1f1f]">
                            <span>
                                <ArrowLeftIcon className="h-5 w-5"/>
                            </span>
                                How It Work
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:flex">
                        <Image src={HeroImgRight} alt="Picture of the author" className="rounded-2xl"/>
                    </div>
                </section>
                <section className="section__features" id="features">
                    <article className="flex flex-col gap-2.5">
                        <h3 className="text-3xl font-bold">Features</h3>
                        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
                            aspernatur.</p>
                    </article>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <article className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8">
                            <span>image icon</span>
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.</p>
                        </article>
                        <article className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8">
                            <span>image icon</span>
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.</p>
                        </article>
                        <article className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8">
                            <span>image icon</span>
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.</p>
                        </article>
                        <article className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8">
                            <span>image icon</span>
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.</p>
                        </article>
                        <article className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8">
                            <span>image icon</span>
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.</p>
                        </article>
                        <article className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8">
                            <span>image icon</span>
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.</p>
                        </article>
                    </div>
                </section>
                <section className="section__testimonials" id="testimonials">
                    <article>
                        <h3 className="text-3xl font-bold">Testimonials</h3>
                        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
                            aspernatur.</p>
                    </article>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
                        <article className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8">
                            <div>
                                <div>
                                    <Image src="/images/1.jpg" alt="Picture of the author" width={100} height={100}/>
                                </div>
                                <span>John Doe</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolor
                                    dolorem ea eveniet expedita ipsam molestiae odit quod, veritatis.</p>
                            </div>
                        </article>
                        <article className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8">
                            <div>
                                <div>
                                    <Image src="/images/1.jpg" alt="Picture of the author" width={100} height={100}/>
                                </div>
                                <span>John Doe</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolor
                                    dolorem ea eveniet expedita ipsam molestiae odit quod, veritatis.</p>
                            </div>
                        </article>
                        <article className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8">
                            <div>
                                <div>
                                    <Image src="/images/1.jpg" alt="Picture of the author" width={100} height={100}/>
                                </div>
                                <span>John Doe</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolor
                                    dolorem ea eveniet expedita ipsam molestiae odit quod, veritatis.</p>
                            </div>
                        </article>
                        <article className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8">
                            <div>
                                <div>
                                    <Image src="/images/1.jpg" alt="Picture of the author" width={100} height={100}/>
                                </div>
                                <span>John Doe</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolor
                                    dolorem ea eveniet expedita ipsam molestiae odit quod, veritatis.</p>
                            </div>
                        </article>
                        <article className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8">
                            <div>
                                <div>
                                    <Image src="/images/1.jpg" alt="Picture of the author" width={100} height={100}/>
                                </div>
                                <span>John Doe</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolor
                                    dolorem ea eveniet expedita ipsam molestiae odit quod, veritatis.</p>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="section__pricing" id="pricing">
                    <article>
                        <h3 className="text-3xl font-bold">Pricing</h3>
                        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
                            aspernatur.</p>
                    </article>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <article className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8">
                            <div>
                                <h4>Basic</h4>
                                <span>$20</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.</p>
                            </div>
                            <div>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                            <div>
                                <button>Starting using</button>
                            </div>
                        </article>
                        <article className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8">
                            <div>
                                <h4>Basic</h4>
                                <span>$20</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.</p>
                            </div>
                            <div>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                            <div>
                                <button>Starting using</button>
                            </div>
                        </article>
                        <article className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8">
                            <div>
                                <h4>Basic</h4>
                                <span>$20</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.</p>
                            </div>
                            <div>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                            <div>
                                <button>Starting using</button>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="section__faq" id="faq">
                    <article>
                        <h3 className="text-3xl font-bold">FAQ</h3>
                        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
                            aspernatur.</p>
                    </article>
                    <div>
                        <article className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8">
                            <div>
                                <h4>Lorem ipsum dolor sit amet.</h4>
                                <span>+</span>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.</p>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
            <footer className="flex justify-center py-16">
                <span>© {new Date().getFullYear()} Lenstack Company. All rights reserved.</span>
            </footer>
        </div>
    )
}

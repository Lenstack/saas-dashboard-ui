import {Navbar} from "@/components";
import Avatar from "boring-avatars";
import {AUTH_ROUTES, HOME_ROUTES} from "@/constants";
import Image from "next/image";
import {ArrowLeftIcon} from "@heroicons/react/24/outline";

export default function Home() {
    return (
        <div className="p-10 w-full h-screen flex flex-col gap-5">
            <header className="flex justify-between">
                <Navbar items={HOME_ROUTES} className="hidden lg:flex flex-row-reverse items-center gap-2.5">
                    <Navbar.Content className="flex items-center space-x-5">
                        <Navbar.Item href="/">
                            <Avatar size={32} name="Avatar" variant="marble"
                                    colors={["#000000", "#3A3A3A", "#A86565", "#C0C0C0"]}/>
                        </Navbar.Item>
                    </Navbar.Content>
                </Navbar>
                <Navbar items={AUTH_ROUTES} className="flex items-center gap-2.5"/>
            </header>
            <main className="space-y-20 text-center">
                <section className="section__hero" id="hero">
                    <article className="flex flex-col gap-5 text-center">
                        <h1 className="text-6xl font-bold">
                            Automate your workflow with <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-rose-300">Lensaas</span>
                        </h1>
                        <p className="text-xl">
                            Upload and manage your students notes and assignments in one place.
                        </p>
                    </article>
                    <div className="flex space-x-5 justify-center mt-5">
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
                </section>
                <section className="section__features" id="features">
                    <article className="flex flex-col gap-2.5">
                        <h3 className="text-3xl font-bold">New Features</h3>
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

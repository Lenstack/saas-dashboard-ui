import {Navbar} from "@/components";
import {AUTH_ROUTES, HOME_ROUTES} from "@/constants";
import Image from "next/image";
import {ArrowLeftIcon, Bars2Icon, ChevronDownIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import HeroImgRight from "@/assets/images/heroright2.jpg";
import Avatar from "boring-avatars";
import {HOME_FAQS, HOME_FEATURES, HOME_PLANS, HOME_TESTIMONIALS} from "@/fixtures";

export default function Home() {
    return (
        <div className="px-6 mx-auto max-w-7xl">
            <div className="py-10">
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
                <main className="space-y-36">
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
                        <div className="hidden lg:flex w-5/6">
                            <Image src={HeroImgRight} alt="Picture of the author"
                                   className="rounded-2xl"/>
                        </div>
                    </section>
                    <section id="features">
                        <article className="space-y-5 text-center pb-16">
                            <h3 className="text-3xl font-bold">Services is really easy to use</h3>

                        </article>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {
                                HOME_FEATURES.map((feature, index) => (
                                    <article key={index}
                                             className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616]
                                dark:hover:bg-cyan-300 dark:hover:text-black rounded cursor-pointer p-8 space-y-2.5">
                                        <div className="flex space-x-2.5">
                                            <span>{feature.icon}</span>
                                            <h4 className="text-lg">{feature.title}</h4>
                                        </div>
                                        <p className="">{feature.description}</p>
                                    </article>
                                ))
                            }

                        </div>
                    </section>
                    <section id="testimonials">
                        <article className="space-y-5 text-center pb-16">
                            <h3 className="text-3xl font-bold">What our client say about us</h3>
                        </article>
                        <section className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                            {
                                HOME_TESTIMONIALS.map((testimonial, index) => (
                                    <blockquote key={index}
                                                className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] rounded p-8 space-y-5">
                                        <p className="text-center">{testimonial.description}</p>
                                        <div className="flex space-x-2.5 justify-center items-center">
                                            <Image src={testimonial.image} alt={testimonial.description} width={1000}
                                                   height={1000}
                                                   className="w-10 h-10 rounded-full"/>
                                            <cite>- {testimonial.name}</cite>
                                        </div>
                                    </blockquote>
                                ))
                            }

                        </section>
                    </section>
                    <section id="pricing">
                        <article className="space-y-5 text-center pb-16">
                            <h3 className="text-3xl font-bold">Choose one our plans</h3>
                        </article>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {
                                HOME_PLANS.map((plan, index) => (
                                    <article key={index}
                                             className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8 text-center space-y-10">
                                        <div className="flex flex-col gap-2.5">
                                            <h4 className="text-xl font-bold">{plan.name}</h4>
                                            <span
                                                className="text-2xl text-cyan-200 font-bold">${plan.price} / mth</span>
                                            <p>{plan.description}</p>
                                        </div>
                                        <div>
                                            <ul className="space-y-2.5">
                                                {
                                                    plan.features.map((feature, index) => (
                                                        <li key={index}>
                                                            <span
                                                                className="text-cyan-200">✓ {feature.description}</span>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div>
                                            <button>Starting using</button>
                                        </div>
                                    </article>

                                ))
                            }

                        </div>
                    </section>
                    <section id="faq">
                        <article className="space-y-5 text-center pb-16">
                            <h3 className="text-3xl font-bold">FAQ</h3>
                            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
                                aspernatur.</p>
                        </article>
                        <div className="space-y-5">
                            {
                                HOME_FAQS.map((faq, index) => (
                                    <article key={index}
                                             className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] p-8 space-y-5">
                                        <button className="flex justify-between items-center w-full">
                                            <h4 className="text-xl font-bold">{faq.question}</h4>
                                            <span>
                                                    <ChevronDownIcon className="h-5 w-5"/>
                                                </span>
                                        </button>
                                        <p>{faq.answer}</p>
                                    </article>
                                ))
                            }
                        </div>
                    </section>
                </main>
                <footer className="flex justify-center items-center py-16">
                    <span>© {new Date().getFullYear()} Lenstack Company. All rights reserved.</span>
                </footer>
            </div>
        </div>
    )
}

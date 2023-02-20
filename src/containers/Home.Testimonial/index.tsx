import {HOME_TESTIMONIALS} from "@/fixtures";
import Image from "next/image";

export const HomeTestimonialContainer = () => {
    return (
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
    )
}
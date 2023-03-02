import {HOME_TESTIMONIALS} from "@/fixtures";
import Image from "next/image";

export const HomeTestimonialContainer = () => {
    return (
        <section id="testimonials" className="py-16 flex flex-col gap-6">
            <h3 className="text-2xl text-center my-3 font-semibold">What our client say about us</h3>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-3">
                {
                    HOME_TESTIMONIALS.map((testimonial, index) => (
                        <blockquote
                            className="rounded p-8 text-lg font-medium leading-8 border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616]
                            flex flex-col"
                            key={index}
                        >
                            <p className="mb-8">{testimonial.description}</p>
                            <cite className="flex items-center mt-auto">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4 object-cover"
                                />
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-cyan-600 dark:text-blue-200 ">{testimonial.name}</span>
                                    <span className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</span>
                                </div>
                            </cite>
                        </blockquote>
                    ))
                }

            </section>
        </section>
    )
}
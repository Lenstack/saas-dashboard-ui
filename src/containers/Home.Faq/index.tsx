import {HOME_FAQS} from "@/fixtures";
import {ChevronDownIcon} from "@heroicons/react/24/outline";

export const HomeFaqContainer = () => {
    return (
        <section id="faq">
            <article className="space-y-5 text-center pb-16">
                <h3 className="text-3xl font-bold">
                    Find your answer in our FAQ
                </h3>
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
    )
}
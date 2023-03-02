import {HOME_FAQS} from "@/fixtures";
import {ChevronDownIcon} from "@heroicons/react/24/outline";
import {useState} from "react";

export const HomeFaqContainer = () => {
    const [active, setActive] = useState({})

    const handleToggle = (index: number) => {
        if (active === index) {
            return setActive({})
        }
        setActive(index)
    }

    return (
        <section id="faq" className="py-16 flex flex-col gap-6">
            <h2 className="text-2xl text-center my-3 font-semibold">Frequently Asked Questions</h2>
            <dl className="grid grid-cols-1 gap-5 my-3 ">
                {HOME_FAQS.map((faq, index) => (
                    <div key={index}
                         className="p-12 space-y-6 rounded border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616]">
                        <div className="flex justify-between gap-2.5">
                            <dt className="text-xl ">{faq.question}</dt>
                            <button onClick={() => handleToggle(index)}>
                                <ChevronDownIcon
                                    className={`h-6 w-6 text-gray-500 dark:text-gray-400 transition-all duration-300 transform ${active === index ? '' : 'rotate-180'}`}/>
                            </button>
                        </div>
                        <dd className={`mt-2 text-lg ${active === index ? 'block' : 'hidden'}`}>{faq.answer}</dd>
                    </div>
                ))}
            </dl>
        </section>
    )
}
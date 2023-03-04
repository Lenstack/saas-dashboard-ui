import {HOME_PLANS} from "@/fixtures";
import {CheckIcon, NoSymbolIcon} from "@heroicons/react/24/outline";

export const HomePlanContainer = () => {
    return (
        <section id="plans" className="py-16 flex flex-col gap-6">
            <h3 className="text-2xl text-center my-3 font-semibold">Our plans</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-3">
                {
                    HOME_PLANS.map((plan, index) => (
                        <article key={index}
                                 className="p-8 rounded flex flex-col justify-between gap-12 border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616]">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3.5">
                                    <span>{plan.icon}</span>
                                    <span className="text-lg">{plan.name}</span>
                                </div>
                                <p>
                                    <span className="text-xl font-semibold">${plan.price}</span>
                                    <span className="text-sm"> / month</span>
                                </p>
                            </div>
                            <ul className="space-y-8">
                                {
                                    plan.features.map((feature, index) => (
                                        <li key={index}>
                                            <span
                                                className={`flex items-center align-middle gap-2.5 ${feature.available ? "" : "line-through"}`}>
                                                {
                                                    feature.available ? (
                                                        <CheckIcon className="h-5 w-5 text-teal-500 dark:text-[#FDB28B]"/>
                                                    ) : (
                                                        <NoSymbolIcon className="h-5 w-5"/>
                                                    )
                                                }
                                                <span className="">{feature.description}</span>
                                            </span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <button className="btn rounded-full">Choose Plan</button>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}
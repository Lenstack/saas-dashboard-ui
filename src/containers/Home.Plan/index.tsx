import {HOME_PLANS} from "@/fixtures";

export const HomePlanContainer = () => {
    return (
        <section id="plans">
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
    )
}
import {HOME_FEATURES} from "@/fixtures";

export const HomeFeatureContainer = () => {
    return(
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
    )
}
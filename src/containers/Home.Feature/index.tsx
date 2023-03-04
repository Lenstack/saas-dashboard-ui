import {HOME_FEATURES} from "@/fixtures";

export const HomeFeatureContainer = () => {
    return (
        <section className="py-16 flex flex-col gap-6" id="features">
            <h3 className="text-2xl text-center my-3 font-semibold">
                Our Features
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-3">
                {
                    HOME_FEATURES.map((feature, index) => (
                        <article key={index}
                                 className="p-8 rounded flex flex-col gap-6 border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] cursor-pointer">
                            <span className="text-teal-500 dark:text-[#FDB28B]">{feature.icon}</span>
                            <span className="text-lg">{feature.title}</span>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}
import {
    HomeFaqContainer,
    HomeFeatureContainer, HomeFooterContainer,
    HomeHeaderContainer,
    HomeHeroContainer,
    HomePlanContainer,
    HomeTestimonialContainer
} from "@/containers";

export default function Home() {
    return (
        <div className="px-6 mx-auto max-w-7xl">
            <div className="py-10">
                <HomeHeaderContainer/>
                <main className="space-y-36">
                    <HomeHeroContainer/>
                    <HomeFeatureContainer/>
                    <HomeTestimonialContainer/>
                    <HomePlanContainer/>
                    <HomeFaqContainer/>
                </main>
                <HomeFooterContainer/>
            </div>
        </div>
    )
}

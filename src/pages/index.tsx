import {
    HomeFaqContainer,
    HomeFeatureContainer,
    HomeFooterContainer,
    HomeHeaderContainer,
    HomeHeroContainer,
    HomePlanContainer,
    HomeTestimonialContainer
} from "@/containers";

export default function Home() {
    return (
        <main className="my-6 px-6 mx-auto max-w-6xl">
            <HomeHeaderContainer/>
            <HomeHeroContainer/>
            <HomeFeatureContainer/>
            <HomeTestimonialContainer/>
            <HomePlanContainer/>
            <HomeFaqContainer/>
            <HomeFooterContainer/>
        </main>
    )
}

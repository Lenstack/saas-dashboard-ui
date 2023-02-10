import {Card, LayoutDashboard} from "@/components"
import {CloudArrowUpIcon} from "@heroicons/react/24/outline"
import {MODULE_ROUTES} from "@/constants";
import Link from "next/link";

export default function Dashboard() {
    return (
        <LayoutDashboard>
            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {
                    MODULE_ROUTES.map((route, index) => (
                        <Link href={route.to} key={index}>
                            <Card className="card">
                                <Card.Header>
                                    <h1>{route.name}</h1>
                                </Card.Header>
                                <Card.Body>
                                    <p>{route.description}</p>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))
                }
            </section>
        </LayoutDashboard>
    )
}
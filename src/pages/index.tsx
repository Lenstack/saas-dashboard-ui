import {Card} from "@/components";
import {Layout} from "./layout";

export default function Home() {
    return (
        <Layout>
            <section className="grid grid-cols-1 lg:grid-cols-4 gap-2.5">
                <Card className="card">
                    <Card.Header>
                        <h1>Home</h1>
                    </Card.Header>
                    <Card.Body>
                        <p>Home page</p>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Header>
                        <h1>Home</h1>
                    </Card.Header>
                    <Card.Body>
                        <p>Home page</p>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Header>
                        <h1>Home</h1>
                    </Card.Header>
                    <Card.Body>
                        <p>Home page</p>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Header>
                        <h1>Home</h1>
                    </Card.Header>
                    <Card.Body>
                        <p>Home page</p>
                    </Card.Body>
                </Card>
            </section>
        </Layout>
    )
}

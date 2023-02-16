import {SettingsLayout} from "@/layouts";
import {Card} from "@/components";

export default function Settings() {
    return (
        <SettingsLayout>
            <section className="flex flex-col gap-2.5">
                <Card className="card">
                    <Card.Header>
                        <h3>Account</h3>
                    </Card.Header>
                    <Card.Body>
                        <p>Account Settings</p>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Header>
                        <h3>Account</h3>
                    </Card.Header>
                    <Card.Body>
                        <p>Account Settings</p>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Header>
                        <h3>Account</h3>
                    </Card.Header>
                    <Card.Body>
                        <p>Account Settings</p>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Header>
                        <h3>Account</h3>
                    </Card.Header>
                    <Card.Body>
                        <p>Account Settings</p>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Header>
                        <h3>Account</h3>
                    </Card.Header>
                    <Card.Body>
                        <p>Account Settings</p>
                    </Card.Body>
                </Card>
            </section>
        </SettingsLayout>
    )
}
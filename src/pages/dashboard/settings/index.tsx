import {SettingsLayout} from "@/layouts";
import {Card} from "@/components";

export default function Settings() {
    return (
        <SettingsLayout>
            <section className="flex flex-col gap-5">
                <Card className="card">
                    <Card.Header>
                        <h3>Your Email</h3>
                    </Card.Header>
                    <Card.Body>
                        <p>
                            You can change your email address here. You will receive a confirmation email to your new
                            address.
                        </p>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn">Save</button>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Header>
                        <h3>Your Name</h3>
                    </Card.Header>
                    <Card.Body>
                        <p>
                            You can change your name here. You will receive a confirmation email to your new address.
                        </p>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn">Save</button>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Header>
                        <h3>Your Avatar</h3>
                    </Card.Header>
                    <Card.Body>
                        <p>
                            You can change your avatar here. You will receive a confirmation email to your new address.
                        </p>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn">Save</button>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Header>
                        <h3>Delete Your Account.</h3>
                    </Card.Header>
                    <Card.Body>
                        <p>
                            You can delete your account here. You will receive a confirmation email to your new address.
                        </p>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn">Delete</button>
                    </Card.Footer>
                </Card>
            </section>
        </SettingsLayout>
    )
}
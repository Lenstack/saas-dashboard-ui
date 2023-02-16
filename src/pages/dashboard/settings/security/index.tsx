import {SettingsLayout} from "@/layouts";
import {Card} from "@/components";

export default function Security() {
    return (
        <SettingsLayout>
            <section className="flex flex-col gap-5">
                <Card className="card">
                    <Card.Header>
                        <h3>Change Your Password</h3>
                    </Card.Header>
                    <Card.Body>
                        <p>
                            You can change your password here. You will receive a confirmation email to your new
                        </p>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn">Save</button>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Header>
                        <h3>Enable 2FA</h3>
                    </Card.Header>
                    <Card.Body>
                        <p>
                            You can enable 2FA here. You will receive a confirmation email to your new address.
                        </p>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn">Enable</button>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Header>
                        <h3>Token Sessions</h3>
                    </Card.Header>
                    <Card.Body>
                        <p>
                            You can manage your token sessions here. You will receive a confirmation email to your new
                        </p>
                    </Card.Body>
                    <Card.Footer>
                        <section>
                            <button className="btn">Revoke All</button>
                        </section>
                    </Card.Footer>
                </Card>
            </section>
        </SettingsLayout>
    )
}
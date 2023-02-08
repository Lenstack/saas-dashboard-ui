import {Card, Form, LayoutHome} from "@/components";
import {FormEvent} from "react";

export default function SignIn() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(event.target)
    }

    return (
        <LayoutHome>
            <Card>
                <Card.Header>
                    <h1>Sign In</h1>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit} method="post">
                        <Form.Content>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Input type="email" id="email" name="email" placeholder="Email"/>
                        </Form.Content>
                        <Form.Content>
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Input type="password" id="password" name="password" placeholder="Password"/>
                        </Form.Content>
                        <Form.Content>
                            <Form.Button type="submit">Sign In</Form.Button>
                        </Form.Content>
                    </Form>
                </Card.Body>
            </Card>
        </LayoutHome>
    )
}
import {Form, LayoutHome} from "@/components";
import {FormEvent} from "react";

export default function SignIn() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(event.target)
    }

    return (
        <LayoutHome>
            <section className="border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] rounded p-5">
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
                        <Form.Button type="submit" className="w-full px-2.5 bg-blue-600">Sign In</Form.Button>
                    </Form.Content>
                </Form>
            </section>
        </LayoutHome>
    )
}
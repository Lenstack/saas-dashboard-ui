import {Form, LayoutHome} from "@/components";
import {FormEvent} from "react";

export default function SignUp() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(event.target)
    }

    return (
        <LayoutHome>
            <section className="flex justify-center items-center">
                <Form onSubmit={handleSubmit} method="post"
                      className="flex flex-col gap-5 border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] rounded p-5">
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Input type="email" id="email" name="email" placeholder="Email"/>
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Input type="password" id="password" name="password" placeholder="Password"/>
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Label htmlFor="confirm_password">Confirm Password</Form.Label>
                        <Form.Input type="password" id="confirm_password" name="confirm_password"
                                    placeholder="Confirm Password"/>
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Button type="submit">Sign Up</Form.Button>
                    </Form.Content>
                </Form>
            </section>
        </LayoutHome>
    )
}
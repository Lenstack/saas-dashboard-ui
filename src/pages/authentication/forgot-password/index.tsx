import {Form} from "@/components";
import {FormEvent} from "react";
import Avatar from "boring-avatars";
import Layout from "@/pages/authentication/layout";

export default function ForgotPassword() {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(event.target)
    }

    return (
        <Layout>
            <section className="w-full p-5 flex justify-center items-center">
                <Form onSubmit={handleSubmit} method="post"
                      className="flex flex-col w-11/12 md:w-4/12 gap-5">
                    <Form.Content className="flex flex-col gap-2.5 items-center py-5">
                        <Form.Link to="/">
                            <Avatar size={50} name="Avatar" variant="sunset"
                                    colors={["#000000", "#3A3A3A", "#A86565", "#C0C0C0"]}/>
                        </Form.Link>
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Input type="email" id="email" name="email"
                                    placeholder="Enter your email"/>
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Button type="submit">Reset Password</Form.Button>
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5 items-center">
                        <Form.Link to="/authentication/sign-in">- Back to Sign In?</Form.Link>
                    </Form.Content>
                </Form>
            </section>
        </Layout>
    )
}
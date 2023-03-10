import {Form} from "@/components";
import {AuthenticationLayout} from "@/layouts";
import {useValidateForm} from "@/hooks";
import {SignInFormRules} from "@/helpers";
import {useContext} from "react";
import {UserContext} from "@/contexts";

export default function SignIn() {
    const {handleSignIn} = useContext(UserContext)
    const handleRunSubmit = async (values: any) => {
        const {email, password} = values
        await handleSignIn(email, password)
    }
    const {errors, handleChange, handleBlur, handleSubmit} = useValidateForm({
        email: null,
        password: null,
    }, SignInFormRules, handleRunSubmit)

    return (
        <AuthenticationLayout>
            <section className="w-full p-5 flex justify-center items-center">
                <Form onSubmit={handleSubmit} method="post"
                      className="flex flex-col w-11/12 md:w-4/12 gap-5">
                    <Form.Header className="flex flex-col gap-2.5 py-5 w-full">
                        <Form.Title className="text-2xl">Access Your Grade Automation Account.</Form.Title>
                        <Form.Link to="/" className="text-xl text-teal-500 dark:text-[#FDB28B] underline">Go to
                            home</Form.Link>
                        <Form.SubTitle>Sign in to our application and start simplifying your student grade management in
                            a secure and quick way.</Form.SubTitle>
                    </Form.Header>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Label htmlFor="email" className="flex justify-between items-center">Your Email
                            <span className="text-sm text-red-300">{errors.email}</span>
                        </Form.Label>
                        <Form.Input type="email" id="email" name="email" placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur} className={errors.email ? "border border-red-300" : ""}/>
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Label htmlFor="password" className="flex justify-between items-center">Password
                            <span className="text-sm text-red-300">{errors.password}</span>
                        </Form.Label>
                        <Form.Input type="password" id="password" name="password" placeholder="Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur} className={errors.password ? "border border-red-300" : ""}/>
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Link to="/authentication/forgot-password">Forgot your password?</Form.Link>
                        <Form.Button type="submit" className="btn">Sign In</Form.Button>
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5 items-center">
                        <Form.Link to="/authentication/sign-up">Dont have an account?</Form.Link>
                    </Form.Content>
                </Form>
            </section>
        </AuthenticationLayout>
    )
}
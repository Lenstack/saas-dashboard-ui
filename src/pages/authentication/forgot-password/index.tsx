import {Form} from "@/components";
import {AuthenticationLayout} from "@/layouts";
import {useValidateForm} from "@/hooks";
import {ForgotPasswordFormRules} from "@/helpers";

export default function ForgotPassword() {
    const handleRunSubmit = async (values: any) => {
        const {email} = values
        try {
            const response = await fetch(`${process.env.API_URL}/authentication/verification_code`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    email,
                })
            })

            if (response.status === 200) {
                console.log("ok")
            }

        } catch (err) {
            console.log("err: " + err);
        }
    }
    const {errors, handleChange, handleBlur, handleSubmit} = useValidateForm({
        email: null,
        password: null,
    }, ForgotPasswordFormRules, handleRunSubmit)

    return (
        <AuthenticationLayout>
            <section className="w-full p-5 flex justify-center items-center">
                <Form onSubmit={handleSubmit} method="post"
                      className="flex flex-col w-11/12 md:w-4/12 gap-5">
                    <Form.Header className="flex flex-col gap-5 py-5 w-full">
                        <Form.Title className="text-2xl">Forgot Your Password?</Form.Title>
                        <Form.Link to="/" className="text-xl text-cyan-300 underline">Go to home</Form.Link>
                        <Form.SubTitle>No worries, weve got you covered. Enter your email address and well send you a
                            verification code to reset your password.</Form.SubTitle>
                    </Form.Header>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Label htmlFor="email" className="flex justify-between items-center">Your Email
                            <span className="text-sm text-red-300">{errors.email}</span>
                        </Form.Label>
                        <Form.Input type="email" id="email" name="email" placeholder="Enter your email"
                                    onChange={handleChange}
                                    onBlur={handleBlur} className={errors.email ? "border border-red-300" : ""}/>
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Button type="submit" className="btn">Send Reset Verification</Form.Button>
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5 items-center">
                        <Form.Link to="/authentication/sign-in">Go back to Sign In</Form.Link>
                    </Form.Content>
                </Form>
            </section>
        </AuthenticationLayout>
    )
}
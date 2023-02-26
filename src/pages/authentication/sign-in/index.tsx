import {Form} from "@/components";
import {useRouter} from 'next/navigation';
import {AuthenticationLayout} from "@/layouts";
import {useValidateForm} from "@/hooks";

export default function SignIn() {
    const router = useRouter()
    const handleRunSubmit = async (values: any) => {
        const {email, password} = values
        try {
            const response = await fetch(`${process.env.API_URL}/authentication/sign_in`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            })

            if (response.status === 200) {
                const data = await response.json()
                localStorage.setItem("access_token", data.access_token)
                localStorage.setItem("expires_in", data.expires_in)
                localStorage.setItem("refresh_token", data.refresh_token)
                router.push("/dashboard");
            }

        } catch (err) {
            console.log("err: " + err);
        }
    }
    const validateForm = {
        email: (value: string) => {
            if (!value) {
                return "Is required";
            }
            if (!value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                return "Invalid email format";
            }
        },
        password: (value: string) => {
            if (!value) {
                return "Is required";
            }
        }
    }
    const {errors, handleChange, handleBlur, handleSubmit} = useValidateForm({
        email: null,
        password: null,
    }, validateForm, handleRunSubmit)

    return (
        <AuthenticationLayout>
            <section className="w-full p-5 flex justify-center items-center">
                <Form onSubmit={handleSubmit} method="post"
                      className="flex flex-col w-11/12 md:w-4/12 gap-5">
                    <Form.Content className="flex flex-col gap-2.5 items-center py-5">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-2xl">Welcome to <span
                                className="text-cyan-300 underline"><Form.Link to="/">{process.env.NODE_ENV}</Form.Link></span> sign
                                in to continue.
                            </h1>
                            <p>
                                Its a platform for managing your business.
                            </p>
                        </div>
                    </Form.Content>
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
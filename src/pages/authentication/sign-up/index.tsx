import {Form} from "@/components";
import Avatar from "boring-avatars";
import {AuthenticationLayout} from "@/layouts";
import {useValidateForm} from "@/hooks";
import {useRouter} from "next/navigation";

export default function SignUp() {
    const router = useRouter()
    const handleRunSubmit = async (values: any) => {
        const {name, email, password} = values
        try {
            await fetch(`${process.env.API_URL}/authentication/sign_up`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                })
            }).then((res) => {
                if (res.status === 200) {
                    router.push("/authentication/sign-in");
                }
            }).catch((err) => {
                console.log("err: " + err);
            })

        } catch (err) {
            console.log("err: " + err);
        }
    }
    const validateForm = {
        name: (value: string) => {
            if (!value) {
                return "Name is required";
            }
        },
        email: (value: string) => {
            if (!value) {
                return "Email is required";
            }
            if (!/\S+@\S+\.\S+/.test(value)) {
                return "The email is invalid";
            }
        },
        password: (value: string) => {
            if (!value) {
                return "Password is required";
            }
            if (value.length < 8) {
                return "Password must be at least 8 characters";
            }
            if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
                return "Password must contain at least one number and one letter";
            }
        }
    }
    const {errors, handleChange, handleBlur, handleSubmit} = useValidateForm({
        name: null,
        email: null,
        password: null,
    }, validateForm, handleRunSubmit)

    console.log(errors)
    return (
        <AuthenticationLayout>
            <section className="w-full p-5 flex justify-center items-center">
                <Form onSubmit={handleSubmit} method="post"
                      className="flex flex-col w-11/12 md:w-4/12 gap-5">
                    <Form.Content className="flex flex-col gap-2.5 items-center py-5">
                        <Form.Link to="/">
                            <Avatar size={45} name="Avatar" variant="sunset"
                                    colors={["#000000", "#31323E", "#7EEAEC", "#C0C0C0"]}/>
                        </Form.Link>
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Label htmlFor="name" className="flex justify-between items-center">Your Name
                            <span className="text-sm text-cyan-300">{errors.name}</span>
                        </Form.Label>
                        <Form.Input type="name" id="name" name="name" placeholder="Name"
                                    onChange={handleChange} onBlur={handleBlur}
                                    className={errors.name ? "border border-cyan-300" : ""}/>
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Label htmlFor="email" className="flex justify-between items-center">Your Email
                            <span className="text-sm text-cyan-300">{errors.email}</span>
                        </Form.Label>
                        <Form.Input type="email" id="email" name="email" placeholder="Email"
                                    onChange={handleChange} onBlur={handleBlur}
                                    className={errors.email ? "border border-cyan-300" : ""}/>
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Label htmlFor="password" className="flex justify-between items-center">Password
                            <span className="text-sm text-cyan-300">{errors.password}</span>
                        </Form.Label>
                        <Form.Input type="password" id="password" name="password" placeholder="Password"
                                    onChange={handleChange} onBlur={handleBlur}
                                    className={errors.password ? "border border-cyan-300" : ""}/>
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Button type="submit" className="btn">Sign Up</Form.Button>
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5 items-center">
                        <Form.Link to="/authentication/sign-in">Already have an account?</Form.Link>
                    </Form.Content>
                </Form>
            </section>
        </AuthenticationLayout>
    )
}
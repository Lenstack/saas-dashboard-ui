import {Form} from "@/components";
import Avatar from "boring-avatars";
import {AuthenticationLayout} from "@/layouts";
import {useValidateForm} from "@/hooks";

export default function SignUp() {
    const handleRunSubmit = async (values: any) => {
        const {name, email, password, confirm_password} = values
        if (password !== confirm_password) {
            return;
        }
        try {
            const response = await fetch(`${process.env.API_URL}/authentication/sign_up`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                })
            }).then(response => response.json()).catch(err => console.log(err))
            console.log(response);
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
                return "El correo electrónico es inválido";
            }
        },
        password: (value: string) => {
            if (!value) {
                return "Password is required";
            }
            if (value.length < 8) {
                return "Password must be at least 8 characters";
            }
        },
        confirm_password: (value: string) => {
            if (!value) {
                return "Confirm password is required";
            }
            if (value.length < 8) {
                return "Password must be at least 8 characters";
            }
        }
    }
    const {errors, handleChange, handleBlur, handleSubmit} = useValidateForm({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    }, validateForm, handleRunSubmit)

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
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <Form.Input type="name" id="name" name="name" placeholder="Name"
                                    onChange={handleChange} onBlur={handleBlur}/>
                        {errors.name && <span className="text-red-300 text-sm">{errors.name}</span>}
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Input type="email" id="email" name="email" placeholder="Email"
                                    onChange={handleChange} onBlur={handleBlur}/>
                        {errors.email && <span className="text-red-300 text-sm">{errors.email}</span>}
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Input type="password" id="password" name="password" placeholder="Password"
                                    onChange={handleChange} onBlur={handleBlur}/>
                        {errors.password && <span className="text-red-300 text-sm">{errors.password}</span>}
                    </Form.Content>
                    <Form.Content className="flex flex-col gap-2.5">
                        <Form.Label htmlFor="confirm_password">Confirm Password</Form.Label>
                        <Form.Input type="password" id="confirm_password" name="confirm_password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange} onBlur={handleBlur}/>
                        {errors.confirm_password &&
                            <span className="text-red-300 text-sm">{errors.confirm_password}</span>}
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
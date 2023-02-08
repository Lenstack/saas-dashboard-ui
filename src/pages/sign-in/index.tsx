import {Card, LayoutHome} from "@/components";

export default function SignIn() {
    return (
        <LayoutHome>
            <Card>
                <Card.Header>
                    <h1>Sign In</h1>
                </Card.Header>
                <Card.Body>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-semibold">Email</label>
                        <input type="email" id="email" className="border rounded p-2.5 mt-1.5"/>
                    </div>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="password" className="text-sm font-semibold">Password</label>
                        <input type="password" id="password" className="border rounded p-2.5 mt-1.5"/>
                    </div>
                    <div className="flex justify-between mt-5">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="mr-2"/>
                            <label htmlFor="remember" className="text-sm font-semibold">Remember me</label>
                        </div>
                        <div>
                            <a href="#" className="text-sm font-semibold">Forgot password?</a>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <button className="bg-blue-600 text-white rounded p-2.5 w-full">Sign In</button>
                    </div>
                </Card.Body>
            </Card>
        </LayoutHome>
    )
}
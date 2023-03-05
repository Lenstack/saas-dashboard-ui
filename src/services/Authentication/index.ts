const API_URL = `${process.env.API_URL}/authentication`;

export const SignInService = async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/sign_in`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({email, password})
    })

    if (!response.ok) throw new Error("Authentication failed")

    return response.json()
}

export const RefreshTokenService = async (refresh_token: string) => {
    const response = await fetch(`${API_URL}/refresh_token`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({refresh_token})
    })

    if (!response.ok) throw new Error("Authentication failed")

    return response.json()
}

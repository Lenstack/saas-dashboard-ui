const API_URL = `${process.env.API_URL}/authentication`;

export const SignInService = async (email: string, password: string) => {
    return await fetch(`${API_URL}/sign_in`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({email, password})
    })
}

export const RefreshTokenService = async (refresh_token: string) => {
    return await fetch(`${API_URL}/refresh_token`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({refresh_token})
    })
}

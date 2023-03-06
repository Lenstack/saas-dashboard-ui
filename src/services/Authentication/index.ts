const API_URL = `${process.env.API_URL}/authentication`;

export const SignInService = async (email: string, password: string) => {
    return await fetch(`${API_URL}/sign_in`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({email, password})
    })
}

export const SignOutService = async () => {
    return await fetch(`${API_URL}/sign_out`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include"
    })
}

export const RefreshTokenService = async () => {
    return await fetch(`${API_URL}/refresh_token`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
    })
}

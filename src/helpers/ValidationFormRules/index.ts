export const SignInFormRules = {
    email: (value: string) => {
        if (!value) {
            return 'Email is required'
        }
        if (!value.includes('@')) {
            return 'Email must be valid'
        }
    },
    password: (value: string) => {
        if (!value) {
            return 'Password is required'
        }
        if (value.length < 6) {
            return 'Password must be at least 6 characters long'
        }
    }
}

export const SignUpFormRules = {
    name: (value: string) => {
        if (!value) {
            return 'Name is required'
        }
        if (value.length < 3) {
            return 'Name must be at least 3 characters long'
        }
    },
    email: (value: string) => {
        if (!value) {
            return 'Email is required'
        }
        if (!value.includes('@')) {
            return 'Email must be valid'
        }
    },
    password: (value: string) => {
        if (!value) {
            return 'Password is required'
        }
        if (value.length < 6) {
            return 'Password must be at least 6 characters long'
        }
    }
}

export const ForgotPasswordFormRules = {
    email: (value: string) => {
        if (!value) {
            return 'Email is required'
        }
        if (!value.includes('@')) {
            return 'Email must be valid'
        }
    }
}
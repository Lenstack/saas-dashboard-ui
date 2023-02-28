import {FormEvent, ReactNode} from "react";

export interface IFormProps {
    className?: string
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void
    method?: "get" | "post" | "put" | "delete"
    children: ReactNode
}

export interface IFormContentProps {
    className?: string
    children: ReactNode
}

export interface IFormHeaderProps {
    className?: string
    children: ReactNode
}

export interface IFormTitleProps {
    className?: string
    children: ReactNode
}

export interface IFormSubTitleProps {
    className?: string
    children: ReactNode
}

export interface IFormLabelProps {
    className?: string
    htmlFor: string
    children: ReactNode
}

export interface IFormInputProps {
    className?: string
    type: string
    id: string
    name: string
    placeholder: string
    onChange?: (event: FormEvent<HTMLInputElement>) => void
    onBlur?: (event: FormEvent<HTMLInputElement>) => void
}

export interface IFormTextareaProps {
    className?: string
    id: string
    name: string
    placeholder: string
}

export interface IFormSelectProps {
    className?: string
    options?: string[]
}

export interface IFormButtonProps {
    className?: string
    type: "submit" | "reset" | "button"
    onClick?: (event: FormEvent<HTMLButtonElement>) => void
    disabled?: boolean
    children: ReactNode
}

export interface IFormLinkProps {
    className?: string
    to: string
    children: ReactNode
}

export interface IFormErrorProps {
    className?: string
    children: ReactNode
}
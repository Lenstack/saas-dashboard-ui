import {
    IFormButtonProps,
    IFormContentProps, IFormErrorProps,
    IFormInputProps,
    IFormLabelProps, IFormLinkProps,
    IFormProps,
    IFormSelectProps,
    IFormTextareaProps
} from "@/interfaces"
import Link from "next/link";
import {IFormHeaderProps, IFormSubTitleProps, IFormTitleProps} from "@/interfaces";

export const Form = ({method, onSubmit, children, ...restProps}: IFormProps) => {
    return (
        <form method={method} onSubmit={onSubmit} {...restProps}>
            {children}
        </form>
    )
}

Form.Content = ({children, ...restProps}: IFormContentProps) => {
    return (
        <div {...restProps}>
            {children}
        </div>
    )
}

Form.Header = ({children, ...restProps}: IFormHeaderProps) => {
    return (
        <header {...restProps}>
            {children}
        </header>
    )
}

Form.Title = ({children, ...restProps}: IFormTitleProps) => {
    return (
        <h1 {...restProps}>
            {children}
        </h1>
    )
}

Form.SubTitle = ({children, ...restProps}: IFormSubTitleProps) => {
    return (
        <h2 {...restProps}>
            {children}
        </h2>
    )
}

Form.Label = ({children, ...restProps}: IFormLabelProps) => {
    return (
        <label {...restProps}>
            {children}
        </label>
    )
}

Form.Input = ({...restProps}: IFormInputProps) => {
    return (
        <input {...restProps}/>
    )
}

Form.Textarea = ({...restProps}: IFormTextareaProps) => {
    return (
        <textarea {...restProps}/>
    )
}

Form.Select = ({options, ...restProps}: IFormSelectProps) => {
    return (
        <select {...restProps}>
            {
                options?.map((option, index) => {
                    return (
                        <option key={index} value={option}>{option}</option>
                    )
                })
            }
        </select>
    )
}

Form.Button = ({children, ...restProps}: IFormButtonProps) => {
    return (
        <button {...restProps}>
            {children}
        </button>
    )
}

Form.Link = ({to, children, ...restProps}: IFormLinkProps) => {
    return (
        <Link href={to} {...restProps}>
            {children}
        </Link>
    )
}

Form.Error = ({children, ...restProps}: IFormErrorProps) => {
    return (
        <span {...restProps}>
            {children}
        </span>
    )
}
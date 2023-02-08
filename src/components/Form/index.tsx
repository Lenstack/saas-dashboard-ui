import {
    IFormButtonProps,
    IFormContentProps, IFormErrorProps,
    IFormInputProps,
    IFormLabelProps,
    IFormProps,
    IFormSelectProps,
    IFormTextareaProps
} from "@/interfaces"

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

Form.Error = ({children, ...restProps}: IFormErrorProps) => {
    return (
        <span {...restProps}>
            {children}
        </span>
    )
}
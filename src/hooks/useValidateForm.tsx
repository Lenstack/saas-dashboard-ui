import {useState} from "react";

export const useValidateForm = (initials: any, rules: any, handleRunSubmit: any) => {
    const [values, setValues] = useState({...initials});
    const [errors, setErrors] = useState({...initials});

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

    const handleBlur = (e: any) => {
        const {name, value} = e.target;
        const error = rules[name](value);
        setErrors({...errors, [name]: error});
    }

    const handleSubmit = (e: any,) => {
        e.preventDefault();
        const errors = Object.keys(rules).reduce((acc: any, key: any) => {
            const error = rules[key](values[key]);
            if (error) {
                acc[key] = error;
            }
            return acc;
        }, {});
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            handleRunSubmit(values);
        }
    }

    return {
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    }
}
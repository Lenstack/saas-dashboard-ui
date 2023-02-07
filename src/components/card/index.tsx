import {ReactNode} from "react";

interface ICardProps {
    className?: string;
    children: ReactNode;
}

export const Card = ({children, ...restProps}: ICardProps) => {
    return (
        <article {...restProps}>
            {children}
        </article>
    )
}

Card.Header = (props: { children: ReactNode }) => {
    return (
        <div className="card__header">
            {props.children}
        </div>
    )
}

Card.Body = (props: { children: ReactNode }) => {
    return (
        <div className="card__body">
            {props.children}
        </div>
    )
}

Card.Footer = (props: { children: ReactNode }) => {
    return (
        <div className="card__footer">
            {props.children}
        </div>
    )
}
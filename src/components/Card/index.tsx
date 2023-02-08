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

Card.Header = ({children, ...restProps}: ICardProps) => {
    return (
        <div className="card__header" {...restProps}>
            {children}
        </div>
    )
}

Card.Body = ({children, ...restProps}: ICardProps) => {
    return (
        <div className="card__body" {...restProps}>
            {children}
        </div>
    )
}

Card.Footer = ({children, ...restProps}: ICardProps) => {
    return (
        <div className="card__footer" {...restProps}>
            {children}
        </div>
    )
}
import {ICardBodyProps, ICardFooterProps, ICardHeaderProps, ICardProps} from "@/interfaces";

export const Card = ({children, ...restProps}: ICardProps) => {
    return (
        <article {...restProps}>
            {children}
        </article>
    )
}

Card.Header = ({children, ...restProps}: ICardHeaderProps) => {
    return (
        <div className="card__header" {...restProps}>
            {children}
        </div>
    )
}

Card.Body = ({children, ...restProps}: ICardBodyProps) => {
    return (
        <div className="card__body" {...restProps}>
            {children}
        </div>
    )
}

Card.Footer = ({children, ...restProps}: ICardFooterProps) => {
    return (
        <div className="card__footer" {...restProps}>
            {children}
        </div>
    )
}
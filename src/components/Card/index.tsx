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
        <div {...restProps}>
            {children}
        </div>
    )
}

Card.Body = ({children, ...restProps}: ICardBodyProps) => {
    return (
        <div {...restProps}>
            {children}
        </div>
    )
}

Card.Footer = ({children, ...restProps}: ICardFooterProps) => {
    return (
        <div {...restProps}>
            {children}
        </div>
    )
}
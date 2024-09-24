import { Heading, IHeadingProps } from './Heading';
import { ILinkProps, Link } from './Link';
import { IParagraphProps, Paragraph } from './Paragraph';
import { Anchor, IAnchorProps } from './Anchor';


export const Text = {
    Paragraph: ({ color, fontFamily, weight, size, className, children, ...props }: IParagraphProps) => (
        <Paragraph
            {...props}
            fontFamily={fontFamily}
            weight={weight}
            color={color}
            size={size}
            className={className}
        >
            {children}
        </Paragraph>
    ),
    Heading: ({ color, fontFamily, weight, size, className, children, ...props }: IHeadingProps) => (
        <Heading
            {...props}
            fontFamily={fontFamily}
            weight={weight}
            color={color}
            size={size}
            className={className}
        >
            {children}
        </Heading>
    ),
    Link: ({ color, to, fontFamily, weight, size, className, children, ...props }: ILinkProps) => (
        <Link
            {...props}
            to={to}
            fontFamily={fontFamily}
            weight={weight}
            color={color}
            size={size}
            className={className}
        >
            {children}
        </Link>
    ),
    Anchor: ({ color, href, fontFamily, weight, size, className, children, ...props }: IAnchorProps) => (
        <Anchor
            {...props}
            href={href}
            fontFamily={fontFamily}
            weight={weight}
            color={color}
            size={size}
            className={className}
        >
            {children}
        </Anchor>
    ),
};

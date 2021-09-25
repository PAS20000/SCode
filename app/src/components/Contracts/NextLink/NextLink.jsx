import Link from 'next/link'
import { LinkContainer, Ancor } from './NextLink.styles'


const NextLink = ({ text, target, href, className }) => {
    return (
        <LinkContainer>
            <Link href={href}>
                <a target={target} className={className}>
                    {text}
                </a>
            </Link>
        </LinkContainer>
    )
}

export default NextLink
import Link from 'next/link'
import { LinkContainer, Ancor } from './NextLink.styles'


export default function NextLink({text, target, href}) {
    return (
        <LinkContainer>
            <Link href={href} passHref>
                <Ancor target={target}>
                    {text}
                </Ancor>
            </Link>
        </LinkContainer>
    )
}
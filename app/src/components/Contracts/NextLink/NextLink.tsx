import Link from 'next/link'


const NextLink = ({ text, target, href }) => {
    return (
        <div>
            <Link href={href} passHref>
                <a target={target}>
                    {text}
                </a>
            </Link>
        </div>
    )
}

export default NextLink
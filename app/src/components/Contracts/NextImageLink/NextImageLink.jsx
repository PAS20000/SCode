import Link from "next/link"
import NextImage from "../NextImage/NextImage"

const NextImageLink = ({ href, src, target, alt, width, height, className }) => {
    return (
        <div>
            <Link href={href}>
                <a target={target}>
                    <NextImage src={src} alt={alt} width={width} height={height} className={className} priority/>
                </a>
            </Link>
        </div>
    )
}

export default NextImageLink
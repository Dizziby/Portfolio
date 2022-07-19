import React, { DetailedHTMLProps, useEffect, useState } from "react"

type DefaultImgPropsType = DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>

type ProgressiveImgPropsType = DefaultImgPropsType & {
    placeholderSrc: any
    src: any
}

export const ProgressiveImg: React.FC<ProgressiveImgPropsType> = ({
    placeholderSrc,
    src,
    ...props
}) => {
    const [imgSrc, setImgSrc] = useState(placeholderSrc)

    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => {
            setImgSrc(src)
        }
    }, [src])

    return <img {...{ src: imgSrc, ...props }} alt={props.alt || ""} />
}

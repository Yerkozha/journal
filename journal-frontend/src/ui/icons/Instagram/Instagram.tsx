import { FC } from 'react'
import theme from 'ui/theme';
import { Icon, IconProps } from "../Icon";

export type InstagramProps = IconProps

const Instagram: FC<InstagramProps> = ({
    width = 48,
    height = 48,
    viewBox = '0 0 48 48',
}) => (
    <Icon
        originalHeight={width}
        originalWidth={height}
        width={width}
        height={height}
        fill="none"
        viewBox={viewBox}
    >
        <path d="M0 9.6C0 6.23968 0 4.55953 0.653961 3.27606C1.2292 2.14708 2.14708 1.2292 3.27606 0.653961C4.55953 0 6.23969 0 9.6 0H38.4C41.7603 0 43.4405 0 44.7239 0.653961C45.8529 1.2292 46.7708 2.14708 47.346 3.27606C48 4.55953 48 6.23969 48 9.6V38.4C48 41.7603 48 43.4405 47.346 44.7239C46.7708 45.8529 45.8529 46.7708 44.7239 47.346C43.4405 48 41.7603 48 38.4 48H9.6C6.23968 48 4.55953 48 3.27606 47.346C2.14708 46.7708 1.2292 45.8529 0.653961 44.7239C0 43.4405 0 41.7603 0 38.4V9.6Z" fill="white" fillOpacity="0.1" />
        <path d="M32 19.6C32 17.6 30.4 16 28.4 16H19.6C17.6 16 16 17.6 16 19.6V28.48C16 30.4 17.6 32 19.6 32H28.48C30.48 32 32.08 30.4 32.08 28.4V19.6H32Z" stroke="white" strokeWidth="1.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 27.2C25.7674 27.2 27.2 25.7673 27.2 24C27.2 22.2327 25.7674 20.8 24 20.8C22.2327 20.8 20.8 22.2327 20.8 24C20.8 25.7673 22.2327 27.2 24 27.2Z" stroke="white" strokeWidth="1.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28.2666 20.8C28.9066 20.8 29.3333 20.3734 29.3333 19.7334C29.3333 19.0934 28.9066 18.6667 28.2666 18.6667C27.6266 18.6667 27.2 19.0934 27.2 19.7334C27.2 20.3734 27.6266 20.8 28.2666 20.8Z" fill="white" />
    </Icon>
);

Instagram.defaultProps = {
    originalHeight: 48,
    originalWidth: 48,
    width: 48,
    height: 48,
    color: theme.colorList.white[0]
}
export default Instagram
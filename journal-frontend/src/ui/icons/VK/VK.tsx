import { FC } from 'react'
import theme from 'ui/theme';
import { Icon, IconProps } from "../Icon";

export type VKProps = IconProps

const VK: FC<VKProps> = ({
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
        <path d="M25.4943 18H20.8966C20.8966 18 21.6629 18.7663 21.6629 19.5326V24.8965C21.6629 24.8965 20.5134 24.7433 18.9809 21.8314C17.9847 19.8391 17.8315 18 17.8315 18H14.0001C14.0001 18 13.9234 24.2835 19.364 28.7279C21.8161 30.7203 25.4943 30.2605 25.4943 30.2605V26.4291C25.4943 26.4291 26.1839 26.3525 27.7165 27.7318C29.2491 29.1111 29.7855 30.2605 29.7855 30.2605H34C33.6169 27.4253 30.0153 24.5134 30.0153 24.5134C30.0153 24.5134 32.4674 21.4483 33.7701 18H29.8621C27.5632 22.4444 25.6475 24.3601 25.6475 24.1303V18H25.4943Z" stroke="white" strokeWidth="1.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
);

VK.defaultProps = {
    originalHeight: 48,
    originalWidth: 48,
    width: 48,
    height: 48,
    color: theme.colorList.white[0]
}
export default VK
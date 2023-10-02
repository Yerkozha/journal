import React from 'react';
import { FC } from 'react';
import { theme } from '../../index';
import { Icon, IconProps } from '../Icon';

export type RusProps = IconProps;

const Rus: FC<RusProps> = ({
    originalWidth,
    originalHeight,
    className,
    ...props
}) => (
    <Icon
        originalHeight={originalHeight}
        originalWidth={originalWidth}
        fill="none"
        className={className}
        {...props}
    >
        <path d="M0 6C0 2.68629 2.68629 0 6 0H38C41.3137 0 44 2.68629 44 6V26C44 29.3137 41.3137 32 38 32H6C2.68629 32 0 29.3137 0 26V6Z" fill="#49A9F6"/>
<path d="M0 20C15.675 20 28.5083 20 44 20V10H0V20Z" fill="#2424EA"/>
<path d="M0 10C15.675 10 28.5083 10 44 10V0H0V10Z" fill="white"/>
<path d="M0 32H44V20H0V32Z" fill="#F43131"/>
<path d="M6 1H38V-1H6V1ZM43 6V26H45V6H43ZM38 31H6V33H38V31ZM1 26V6H-1V26H1ZM6 31C3.23858 31 1 28.7614 1 26H-1C-1 29.866 2.13401 33 6 33V31ZM43 26C43 28.7614 40.7614 31 38 31V33C41.866 33 45 29.866 45 26H43ZM38 1C40.7614 1 43 3.23858 43 6H45C45 2.13401 41.866 -1 38 -1V1ZM6 -1C2.13401 -1 -1 2.13401 -1 6H1C1 3.23858 3.23858 1 6 1V-1Z" fill="#F7F9FC"/>
    </Icon>
);

Rus.defaultProps = {
    originalWidth: 44,
    originalHeight: 32,
    width: 44,
    height: 32,
    color: theme.colorList.element[0],
};

export default Rus;

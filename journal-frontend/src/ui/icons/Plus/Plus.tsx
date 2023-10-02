import React from 'react';
import { FC } from 'react';
import { theme } from '../../index';
import { Icon, IconProps } from '../Icon';

export type PlusProps = IconProps;

const Plus: FC<PlusProps> = ({
    originalWidth,
    originalHeight,
    className,
    color,
    ...props
}) => (
    <Icon
        originalHeight={originalHeight}
        originalWidth={originalWidth}
        fill="none"
        className={className}
        {...props}
    >
        <path d="M15.8335 9.16659H10.8335V4.16659C10.8335 3.94557 10.7457 3.73361 10.5894 3.57733C10.4331 3.42105 10.2212 3.33325 10.0002 3.33325C9.77915 3.33325 9.56719 3.42105 9.41091 3.57733C9.25463 3.73361 9.16683 3.94557 9.16683 4.16659V9.16659H4.16683C3.94582 9.16659 3.73385 9.25438 3.57757 9.41066C3.42129 9.56694 3.3335 9.7789 3.3335 9.99992C3.3335 10.2209 3.42129 10.4329 3.57757 10.5892C3.73385 10.7455 3.94582 10.8333 4.16683 10.8333H9.16683V15.8333C9.16683 16.0543 9.25463 16.2662 9.41091 16.4225C9.56719 16.5788 9.77915 16.6666 10.0002 16.6666C10.2212 16.6666 10.4331 16.5788 10.5894 16.4225C10.7457 16.2662 10.8335 16.0543 10.8335 15.8333V10.8333H15.8335C16.0545 10.8333 16.2665 10.7455 16.4228 10.5892C16.579 10.4329 16.6668 10.2209 16.6668 9.99992C16.6668 9.7789 16.579 9.56694 16.4228 9.41066C16.2665 9.25438 16.0545 9.16659 15.8335 9.16659Z" fill={color}/>
    </Icon>
);

Plus.defaultProps = {
    originalWidth: 20,
    originalHeight: 20,
    width: 20,
    height: 20,
    color: theme.colorList.element[0],
};

export default Plus;

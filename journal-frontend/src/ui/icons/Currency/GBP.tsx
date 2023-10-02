import React from 'react';
import { FC } from 'react';
import { theme } from '../../index';
import { Icon, IconProps } from '../Icon';

export type USAProps = IconProps;

const USA: FC<USAProps> = ({
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
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.40833 0.75H18.3333V9.63594L5.40833 0.75ZM25.6667 0.75H38.5917L25.6667 9.63594V0.75ZM44 4.53125V10.9594H34.7417L44 4.53125ZM44 20.8852V27.2188L34.7417 20.7906H44V20.8852ZM38.5917 31H25.6667V22.1141L38.5917 31ZM18.3333 31H5.40833L18.3333 22.1141V31ZM0 27.2188V20.7906H9.25833L0 27.2188ZM0 10.8648V4.53125L9.25833 10.9594H0V10.8648Z" fill="#0437A0"/>
<path d="M44 27.2188L34.7417 20.8852H44V10.8648H34.7417L44 4.53125V0.75H38.5917L25.6667 9.63594V0.75H22H18.3333V9.63594L5.40833 0.75H0V4.53125L9.25833 10.8648H0V20.8852H9.25833L0 27.2188V31H5.40833L18.3333 22.1141V31H22H25.6667V22.1141L38.5917 31H44V27.2188Z" fill="#F4F4F4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.2917 0.75V12.7555H44V18.9945H24.2917V31H22H19.7083V18.9945H0V12.7555H19.7083V0.75H22H24.2917ZM44 29.582L31.35 20.8852H27.225L41.9833 31H44V29.582ZM31.35 10.8648L44 2.16797V0.75H41.9833L27.225 10.8648H31.35ZM16.775 10.8648L2.01667 0.75H0V2.16797L12.65 10.8648H16.775ZM12.65 20.8852L0 29.582V31H2.01667L16.775 20.8852H12.65Z" fill="#FF1612"/>
    </Icon>
);

USA.defaultProps = {
    originalWidth: 44,
    originalHeight: 31,
    width: 44,
    height: 31,
    color: theme.colorList.element[0],
};

export default USA;

import React from 'react';
import { FC } from 'react';
import { theme } from '../../index';
import { Icon, IconProps } from '../Icon';

export type EyeCloseProps = IconProps;

const EyeClose: FC<EyeCloseProps> = ({
  originalWidth,
  originalHeight,
  color,
  ...props
}) => (
  <Icon
    originalHeight={originalHeight}
    originalWidth={originalWidth}
    fill="none"
    {...props}
  >
    <path
      d="M9.342 18.7821L7.41099 18.2641L8.19799 15.3251C7.01996 14.8906 5.92511 14.2575 4.96099 13.4531L2.80799 15.6071L1.39299 14.1921L3.54699 12.0391C2.33107 10.5829 1.51408 8.83587 1.17599 6.96911L3.14399 6.61011C3.90299 10.8121 7.579 14.0001 12 14.0001C16.42 14.0001 20.097 10.8121 20.856 6.61011L22.824 6.96811C22.4864 8.83512 21.6697 10.5825 20.454 12.0391L22.607 14.1921L21.192 15.6071L19.039 13.4531C18.0749 14.2575 16.98 14.8906 15.802 15.3251L16.589 18.2651L14.658 18.7821L13.87 15.8421C12.6323 16.0542 11.3676 16.0542 10.13 15.8421L9.342 18.7821Z"
      fill={color}
    />
  </Icon>
);

EyeClose.defaultProps = {
  originalWidth: 24,
  originalHeight: 24,
  width: 24,
  height: 24,
  color: theme.colorList.element[0],
};

export default EyeClose;

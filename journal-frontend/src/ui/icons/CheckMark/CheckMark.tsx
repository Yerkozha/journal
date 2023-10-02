import React from 'react';
import { FC } from 'react';
import { theme } from '../../index';
import { Icon, IconProps } from '../Icon';

export type CheckMarkProps = IconProps;

const CheckMark: FC<CheckMarkProps> = ({
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
      d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
      fill={color}
    />
  </Icon>
);

CheckMark.defaultProps = {
  originalWidth: 24,
  originalHeight: 24,
  width: 24,
  height: 24,
  color: theme.colorList.system[2],
};

export default CheckMark;

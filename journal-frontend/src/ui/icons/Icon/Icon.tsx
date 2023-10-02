import React from 'react';
import { FC } from 'react';
import { theme } from '../../index';
import { IconProps } from './model';

const getSize = (width?: number , height?: number, ratio?: number) => {
  if (!width && !height) {
    return { width: 13, height: 13 };
  }
  if (width && height) {
    return { width, height };
  }
  return {
    ...(width && ratio && { width, height: width / ratio }),
    ...(height && ratio && { width: height * ratio, height }),
  };
};

const getViewBox = (
  viewBox?: string,
  originalWidth?: number,
  originalHeight?: number,
) => viewBox || `0 0 ${originalWidth} ${originalHeight}`;

const Icon: FC<IconProps> = ({
  originalWidth,
  originalHeight,
  width,
  height,
  fill,
  stroke,
  children,
  viewBox,
  ...props
}) => (
  <svg
    {...props}
    fill={fill}
    stroke={stroke}
    viewBox={getViewBox(viewBox, originalWidth, originalHeight)}
    {...getSize(width, height, originalWidth != null && originalHeight != null 
      ? originalWidth / originalHeight 
      : undefined
    )}
  >
    {children}
  </svg>
);

Icon.defaultProps = {
  fill: theme.colorList.extra[0],
  stroke: '',
};

export default Icon;

import React from 'react';
import { FC } from 'react';
import { ClipLoader } from 'react-spinners';
import { Box, theme } from '../../index';

interface SpinnerProps {
  loading?: boolean;
  color?: string;
  size?: number;
}

const Loader: FC<SpinnerProps> = ({
  loading = true,
  color = theme.colorList.extra[10],
  size = 35,
}) => {
  return (
    <Box
      position="absolute"
      margin="0"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
      <ClipLoader color={color} loading={loading} size={size} />
    </Box>
  );
};

export default Loader;

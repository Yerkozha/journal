import React from 'react';
import { FC } from 'react';
import { ClipLoader } from 'react-spinners';
import { theme } from '../../index';

interface SpinnerProps {
  loading: boolean;
  color?: string;
  size?: number;
}

const Spinner: FC<SpinnerProps> = ({
  loading,
  color = '#fff',
  size = 24,
}) => {
  if (loading) {
    return <ClipLoader color={color} loading={loading} size={size} />;
  } else {
    return null;
  }
};

export default Spinner;

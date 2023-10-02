import { ReactNode } from 'react';

export interface ButtonProps {
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  loader?: boolean;
  tabIndex?: number;
  onClick?: () => void;
  onEnter?: () => void;
}

export interface GeneralButtonProps {
  pd?: string;
  color?: string;
  bgColor?: string;
  border?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  fullWidth?: boolean;
  fontFamily?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: number;
  variant?: string;
  variantType?: 'dark' | 'light';
  disabled?: boolean;
  extFontSize?: string
  extLineHeight?: string
  extFontWeight?: number
  extText?: string
}

import { FC } from 'react';
import styled from 'styled-components';
import { ButtonProps, GeneralButtonProps } from './model';
import { Condition, Spinner, Text } from '../../index';

const GeneralButton = styled.button<GeneralButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.fullWidth ? '100%' : props.width)};
  height: ${(props) => props.height};
  padding: ${(props) => props.pd};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.bgColor};
  border: ${({ border }) => (!!border ? border : '1px solid transparent')};
  outline: none;
  cursor: pointer;
  flex-wrap: wrap;
  box-sizing: border-box;

  
`;

const Button: FC<ButtonProps & GeneralButtonProps> = ({
  text,
  type,
  pd,
  color,
  fontSize,
  lineHeight,
  fontWeight,
  bgColor,
  border,
  borderRadius,
  width,
  height,
  fullWidth,
  tabIndex,
  variant,
  variantType,
  icon,
  loader,
  onClick,
  onEnter,
  disabled,
  extText,
  extFontSize,
  extLineHeight,
  extFontWeight,
}) => (
  <GeneralButton
    type={type}
    pd={pd}
    bgColor={bgColor}
    border={border}
    borderRadius={borderRadius}
    width={width}
    height={height}
    fullWidth={fullWidth}
    tabIndex={tabIndex}
    variant={variant}
    variantType={variantType}
    onClick={() => (onClick != null ? onClick() : undefined)}
    onKeyPress={(e: { key: string }) => {
      if (e.key === 'Enter') {
        onEnter != null ? onEnter() : undefined;
      }
    }}
    disabled={disabled}
  >
    <Condition match={!loader}>
      <Condition match={icon}>{icon}</Condition>
      <Text
        fontSizes={fontSize}
        lineHeight={lineHeight}
        fontWeight={fontWeight}
        color={color}
      >
        {text}
      </Text>
      <Text
        fontSizes={extFontSize}
        lineHeight={extLineHeight}
        fontWeight={extFontWeight}
        color={color}
        
      >
        {extText}
      </Text>
    </Condition>
    <Condition match={loader}>
      <Spinner loading={!!loader} color={color} />
    </Condition>
  </GeneralButton>
);

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  pd: '12px',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 600,
  fontFamily: 'Open Sans',
  extFontSize: '12px',
  extFontWeight: 400,
  extLineHeight: '16px',
  color: '#fff',
  border: '1px solid transparent',
  borderRadius: '4px',
  onClick: () => {
    return;
  },
  onEnter: () => {
    return;
  },
};

export default Button;

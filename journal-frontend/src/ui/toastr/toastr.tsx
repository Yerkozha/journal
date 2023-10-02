import React, { FC, ReactNode } from 'react';
import { toast as t, ToastOptions } from 'react-toastify';
import styled from 'styled-components';
import {
  Box,
  Condition,
  CheckMarkIcon,
  ExclamationMarkCircleIcon,
} from '../index';

interface Content {
  title: string;
  icon?: ReactNode;
}

type Type = 'success' | 'error' | 'warning' | 'default';

interface ToastBodyProps {
  content: Content;
  type?: Type;
}

interface IToastCaption {
  type: Type;
}

const ToastCaptionTitle = styled.p<IToastCaption>`
  margin-left: 12px;
  color: ${(props) => {
    switch (props.type) {
      case 'success':
        return props.theme.colorList.text[2];
      case 'warning':
        return props.theme.colorList.brand[1];
      case 'error':
        return props.theme.colorList.system[0];
      default:
        return props.theme.colorList.text[0];
    }
  }};
  font-size: ${(props) => props.theme.fontSize.l};
  line-height: 24px;
`;

const ToastBody: FC<ToastBodyProps> = ({ content, type = 'default' }) => (
  <Box display="flex" width='200px'>
    <Condition match={type === 'success'}>
      <CheckMarkIcon />
    </Condition>
    <Condition match={type === 'error'}>
      <ExclamationMarkCircleIcon />
    </Condition>
    <ToastCaptionTitle type={type}>{content.title}</ToastCaptionTitle>
  </Box>
);

const toastr = (content: Content, options?: ToastOptions | undefined) => {
  t(<ToastBody content={content} type="success" />, options);
};

toastr.success = (content: Content, options?: ToastOptions | undefined) => {
  t.success(<ToastBody content={content} type="success" />, options);
};
toastr.error = (content: Content, options?: ToastOptions | undefined) => {
  t.error(<ToastBody content={content} type="error" />, options);
};
toastr.warning = (content: Content, options?: ToastOptions | undefined) => {
  t.warning(<ToastBody content={content} type="warning" />, options);
};

export default toastr;

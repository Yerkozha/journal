import { ReactNode } from "react";
export enum Appearance {
  large = 'large',
  default = 'default',
}
export interface FormFieldProps {
    id?: string;
    type?: string;
    value?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    onChange?: (value?: string) => void;
    onEnter?: (value?: string) => void;
    onBlur?: (value?: string) => void;
    onIconClick?: () => void;
  }

  export interface FormFieldMaskProps {
    formatType?: string;
    thousandSeparator?: boolean;
    prefix?: string;
    suffix?: string;
    disabled?: boolean
  }
  export interface FormFieldStylePropsProps {
    appearance?: Appearance;
    maxWidth?: string;
    errorMsg?: string;
    icon?: ReactNode;
  }
  
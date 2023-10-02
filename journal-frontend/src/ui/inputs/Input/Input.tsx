import { FC } from 'react'
import styled from 'styled-components'
import { Text } from 'ui/text'
import theme from 'ui/theme'
import { FormFieldMaskProps, FormFieldProps, FormFieldStylePropsProps } from '../../../shared/typing'
import { Condition } from '../../condition'
import { LabelForm } from '../Label'

const WrapperInputField = styled.div`
    input {
        width: 100%;
        
    }
`
const Icon = styled.button`
  position: absolute;
  bottom: 12px;
  right: 12px;
  outline: none;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  svg {
    display: block;
  }
`;
const Input: FC<FormFieldProps & FormFieldMaskProps & FormFieldStylePropsProps> = ({
    label,
    formatType,
    id,
    value,
    type,
    name,
    defaultValue,
    required,
    placeholder,
    icon,
    disabled,
    minLength,
    maxLength,
    errorMsg,
    onChange,
    onBlur,
    onIconClick,
}) => (
    <WrapperInputField>

      <Condition match={label}>
          <LabelForm htmlFor={id} label={label ? label : ''} required={required}></LabelForm>
      </Condition>

      <Condition match={!formatType}>
          <input type={type} id={id} value={value} disabled={disabled} name={name} defaultValue={defaultValue} placeholder={placeholder} minLength={minLength} maxLength={maxLength} 
            onChange={(event) => {
                onChange != null ? onChange(event.target.value) : undefined
            }}
            onBlur={(event) => {
                onBlur != null ? onBlur(event.target.value) : undefined
            }}
            />
      </Condition>

      <Condition match={icon}>
        <Icon type="button" onClick={onIconClick}>
          {icon}
        </Icon>
      </Condition>

      <Condition match={errorMsg}>
      <Text
        as="p"
        mt="4px"
        fontSize="13px"
        lineHeight="16px"
        color={theme.colorList.system[0]}
      >
        {errorMsg}
      </Text>
    </Condition>

    </WrapperInputField>
)
export default Input
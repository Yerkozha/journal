import { FC } from "react"
import styled from "styled-components"

interface LabelProps {
    htmlFor?: string
    label: string
    required?: boolean
}
interface LabelStyleProps {
    fontSize?: number,
    color?: string,
    lineHeight?: string
}

const Label = styled.label<LabelStyleProps>`
    display: block;
    font-size: ${(props) => props.fontSize}px;
    margin-bottom: 8px;
    font-weight: 400;
    line-height: ${(props) => props.lineHeight};
    color: ${(props) => props.color};
`

const LabelForm:FC<LabelProps & LabelStyleProps> = ({
    label,
    required,
    htmlFor,
    fontSize,
    color,
    lineHeight
}) => (
    <Label htmlFor={htmlFor} fontSize={fontSize} color={color} lineHeight={lineHeight}>
        {required ? label + '*' : label}
    </Label>
)

export default LabelForm
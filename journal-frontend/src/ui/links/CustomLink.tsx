import { FC, ReactNode } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Button } from "ui/btn"
import { Condition } from "ui/condition"
import { Text } from "ui/text"

interface CustomStyleProps {
    path?: string
}
interface LinkProps {
    path: string
    topText?: string
    bottomText?: string
    leftIcon?: ReactNode
    rightIcon?: ReactNode
}
const WrapperLink = styled(Link)`
    
`

const CustomLink: FC<  LinkProps> = ({
    leftIcon,
    topText,
    bottomText,
    path,
    rightIcon
}) => {
    return (<WrapperLink to={path}>
        <Condition match={leftIcon}>{leftIcon}</Condition>
        <Condition match={topText}>
            <Text as="h1" className='f-400-14'>{topText}</Text>
        </Condition>
        <Condition match={topText}>
            <Text as="h1" className='f-16-22'>{bottomText}</Text>
        </Condition>
        <Condition match={rightIcon}><Button icon={rightIcon}></Button></Condition>
    </WrapperLink>)
}
CustomLink.defaultProps = {
    path: '/'
}

export default CustomLink
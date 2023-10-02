import { FC } from 'React'
import { Link } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import { ArrowDown, Bell, Box, LogoIcon, Text } from 'ui'
import { Theme } from 'ui/theme/types'
import { Language } from '../language'

const CustomLink: FC<CustomLinkStyledProps> = ({ children, toPath, className }) => (
    <Link className={className} to={toPath}>{children}</Link>
)
const CustomLinkStyled = styled(CustomLink).attrs(props => ({
    className: 'f-700-14',
    toPath: props.toPath,
    children: props.children
}))` 

`

const NavigationBar = styled.ul.attrs(props => ({
    className: 'f-700-14'
}))`
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 37px;
    gap: 25px;
    a {
        color: ${props => props.theme.colorList.text[1]}
    }
    a:hover{
        color: ${props => props.theme.colorList.text[2]}
    }
    
`
const ToolBar = styled(NavigationBar)`  
   & > li:nth-child(2){
        border-left: 1px solid #E4E9F2;
        border-right:1px solid #E4E9F2;
        padding: 0 5px;
    }
`

const MainHeader = () => {

    const theme = useTheme() as Theme

    return (
        <Box className="header">
            <NavigationBar>
                <LogoIcon color={theme.colorList.logo[0]}></LogoIcon>
                <li><CustomLinkStyled toPath="/transfer">Переводы</CustomLinkStyled></li>
                <li><CustomLinkStyled toPath="/transfer">Платежи</CustomLinkStyled></li>
                <li><CustomLinkStyled toPath="/transfer">Открыть продукт</CustomLinkStyled> <span><ArrowDown className='header__arrow-icon' /></span></li>
                <li><CustomLinkStyled toPath="/transfer">Контакты</CustomLinkStyled></li>
            </NavigationBar>
            <ToolBar>
                <li><Language maxHeight="30px"></Language></li>
                <li><Bell className='header__arrow-icon'></Bell></li>
                <li><Text>Захаров А.</Text><span><ArrowDown className='header__arrow-icon' /></span></li>
            </ToolBar>
        </Box>
    )
}
interface CustomLinkStyledProps {
    children?: string 
    className?: string
    toPath: string
}

export default MainHeader
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { logout } from 'src/redux/reducers/auth-reducer'
import { useAppDispatch } from 'src/redux/redux-store'
import styled, { useTheme } from 'styled-components'
import { ArrowDown, Bell, Box, Button, Text } from 'ui'
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

    const theme = useTheme() as Theme;
    const dispatch = useAppDispatch()

    function logoutHandler() {
        dispatch(logout())
    }

    return (
        <Box className="header">
            <ToolBar>
                <li><Language maxHeight="30px"></Language></li>
            </ToolBar>
            <NavigationBar>
                <Button 
                        height="100%"
                        color={theme.colorList.white[0]}
                        bgColor={theme.colorList.system[0]}
                        text='Logout'
                        borderRadius={theme.borderRadius.s}
                        onClick={logoutHandler}
                         ></Button>
            </NavigationBar>
        </Box>
    )
}
interface CustomLinkStyledProps {
    children?: string 
    className?: string
    toPath: string
}

export default MainHeader
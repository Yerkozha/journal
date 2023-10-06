import React, { FC, useEffect, useState } from 'react'
import { Box } from "ui";
import styled, { useTheme } from "styled-components";
import { Link } from 'react-router-dom';
import { Language } from '../language';

const NavigationBar = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 25px;
    a {
        color: ${props => props.theme.colorList.text[1]};
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
    }
    a:hover{
        color: ${props => props.theme.colorList.text[2]};
    }
`

const ToolBar = styled.div`
    display: flex;
    gap: 35px;
    justify-content: space-between;
    align-items: center;
`

const Header: FC<HeaderProps> = (props) => {

    return (
        <Box className="login-header">
            <NavigationBar>
            </NavigationBar>
            <ToolBar>
                <Language></Language>
            </ToolBar>
        </Box>
    )
}

interface HeaderProps {
    children?: any
}


export default Header
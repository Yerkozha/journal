import React, { FC, useEffect, useState } from 'react'
import { AppleIcon, Box, Facebook, Instagram, LogoIcon, Phone, Text, Twitter, VK, ArrowDown } from "ui";
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
                <li><Link to="/enter">Вход</Link></li>
                <li><Link to="/transaction">Перевод</Link></li>
                <li><Link to="/map">Отделения и банкоматы</Link></li>
            </NavigationBar>
            <ToolBar>
                <div className="login-header__phone">
                    <Phone id="phone"></Phone>
                    <label htmlFor="phone">7888</label>
                </div>
                <Language></Language>
            </ToolBar>
        </Box>
    )
}

interface HeaderProps {
    children?: any
}


export default Header
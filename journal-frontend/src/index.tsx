import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client';
import { connect, Provider } from 'react-redux'
import store from './redux/redux-store';
import { BrowserRouter as Router, Link, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import './scss/main.scss'
import { Login } from './presentation/view/login/Login';
import { ThemeProvider } from 'styled-components';
import { theme } from 'ui';
import StyledToastContainer from './presentation/view/components/StyledToastContainer';
import { MainRootPage } from './presentation/container/AppContainer';

const Root: React.FC = () => {
    useEffect(() => {
        window.onunhandledrejection = (err) => {
            console.log('UNHANDLED ERR',err)
        }
    })
    return <div>HELLO WORLD!!!</div>}


const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<Root />);

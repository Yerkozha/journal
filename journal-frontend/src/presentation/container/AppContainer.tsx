import React, {Component} from 'react'
import {BrowserRouter, Link, Redirect, Route, Switch, withRouter} from 'react-router-dom'

import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import { initializeApp } from 'src/redux/reducers/app-reducer'
import { AppStateType } from 'src/redux/redux-store'
import { Loader } from 'ui'
import { App } from '../view/app/App'

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}


class AppContainer extends Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occured')
    }

    componentDidMount() {
        this.props.initializeApp()
        
    }

    componentWillUnmount() {
        
    }

    render() {
        if (!this.props.initialized) {
            return <Loader />
        }

        return (
            <App></App>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export const MainRootPage = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(AppContainer)
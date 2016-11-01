import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './components/App'
import {Home, About, Members, Whoops404 } from './components/ui'

window.React = React

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="about" component={About}>
            </Route>
            <Route path="members" component={Members}>
            </Route>
            <Route path="*" component={Whoops404}></Route>
        </Route>
    </Router>
)

render(routes, document.getElementById('react-container'))



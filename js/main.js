import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, Link, browserHistory } from 'react-router'

import Index from './index'

class RouterComponent extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={Index} />
			</Router>
		)
	}
}

ReactDOM.render(<RouterComponent />, document.getElementById('container'))
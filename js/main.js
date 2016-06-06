// React
import React from 'react'
import ReactDOM from 'react-dom'

// React Router
import { Router, Route, Link, browserHistory } from 'react-router'

// Redux
import { createStore } 	from 'redux'
import { Provider } 		from 'react-redux'

// Views
import Index 	from './index'
import Layout from './layout'
import Board 	from './board'

import reducers from './reducers/index'

const store = createStore(reducers)

class RouterComponent extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<Route component={Layout}>
						<Route path='/' component={Index} />
					</Route>
				</Router>
			</Provider>
		)
	}
}

ReactDOM.render(<RouterComponent />, document.getElementById('container'))
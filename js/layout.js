import React from 'react'

class Layout extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<header>Header</header>
				{this.props.children}
			</div>
		)
	}
}

export default Layout
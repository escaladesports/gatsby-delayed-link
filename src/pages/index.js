import React, { Fragment } from 'react'
import Link from '../module'

export default class HomePage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			click: ``,
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState({ click: `Clicked!` })
	}

	render() {
		return (
			<Fragment>
				<div>Home Page</div>
				<Link 
					location={this.props.location}
					onClick={this.handleClick}
					delay={500}
					to={`/test`}
				>
					Link: {this.state.click}
				</Link>
			</Fragment>
		)
	}
}
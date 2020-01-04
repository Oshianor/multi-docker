import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Otherpage extends Component {
	render() {
		return (
			<div>
				i'm Some other page!
				<Link to="/">GO Back</Link>
			</div>
		);
	}
}

export default Otherpage;
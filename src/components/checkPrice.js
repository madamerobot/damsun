import React, { Component } from 'react';

class CheckPrice extends Component {

	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		const value = event.target.value;
		console.log("Price Score: "+value);
		this.props.onChange(value);
	}

	render() {

		return (
			<div className="CheckPrice">
				<h1>Price Factor:</h1>
				<p className="Factor">{this.props.price}</p>
				<p>
					<input type="range" min="1" max="5" value={this.props.value} onChange={this.handleChange} />
				</p>
			</div>
		)
	}
}

export default CheckPrice;
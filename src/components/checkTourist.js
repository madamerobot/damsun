import React, { Component } from 'react';

class CheckTourist extends Component {

	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		const value = event.target.value;
		console.log("Tourist Score: "+value);
		this.props.onChange(value);
	}
	
	render() {
		
		return (
			<div className="CheckTourist">
				<h1>Tourist Factor:</h1>
				<p className="Factor">{this.props.tourist}</p>
				<p>
					<input type="range" min="1" max="5" value={this.props.tourist} onChange={this.handleChange} />
				</p>
			</div>
		)
	}
}

export default CheckTourist;
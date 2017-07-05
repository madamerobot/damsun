import React, { Component } from 'react';

class CheckWeatherproof extends Component {

	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		const value = event.target.value;
		console.log("Weather Score: "+value);
		this.props.onChange(value);
	}

	render() {

		return (
			<div className="CheckWeatherproof">
				<h1>Weatherproof Factor:</h1>
				<p className="Factor">{this.props.proof}</p>
				<p>	
					<input type="range" min="1" max="5" value={this.props.proof} onChange={this.handleChange} />
				</p>
			</div>
		)
	}
}

export default CheckWeatherproof;
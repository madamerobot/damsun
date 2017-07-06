import React, { Component } from 'react';
import './style.css';

class Poti extends Component {

	constructor(){
		
		super();
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			min: '0',
			max: '100',
			step: '1',
			type: 'range',
			name: 'Volume',
		};
	}

	handleChange(event){
		const value = event.target.value;
		console.log("Poti Score: "+value);
		this.props.onChange(value);
	}

	render() {

	const inputSlider = (
		<label className='Poti'>
			<input 	min={this.state.min} 
					max={this.state.max} 
					type={this.state.type} 
					step={this.state.step} 
					name={this.state.name} 
					value={this.props.value} 
					onChange={this.handleChange}
					/>
		</label>
	)

		return (
			<div>
				<div className="Poti">
					<div className="Knob-wrapper">
						<div className="Knob"></div>
						<div className="Indicator"></div>
						<div className="Markers">
							<div className="Marker">-10</div>
							<div className="Marker">0</div>
							<div className="Marker">10</div>
						</div>
					</div>
					<label>Frequency</label>
				</div>
				<div>{inputSlider}</div>
			</div>
		)
	}

	
}

export default Poti;
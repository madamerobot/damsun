import React, { Component } from 'react';

class Knob extends Component {

	constructor(){
		super();
		this.state = {
			x: 296,
			y: 69,
			value: 50,
			min: 0,
			max: 100,
			radius: 125,
			size: 100,
			fullAngle: 300,
			step: 1,
			rotation: 40
		} 
		this.handleChange = this.handleChange.bind(this);
	}

	//HELPER FUNCTIONS
	_coordToDeg(x,y) {
	
		const center = this.state.size / 2;
		const dX = x - center;
		const dY = y - center;
		const teta = Math.atan(dY / dX) * 180 / Math.PI + 90
		console.log('Teta: '+teta);
		  
		if ((dX < 0 && dY >= 0) || (dX < 0 && dY < 0)) {
		  return teta
		} else {
		  return teta + 180
		}
	}

	/**
   * helper that returns the range
   * @return {Number} - the difference between `min` and `max`
   */
	get range() {
	return this.state.max - this.state.min
	}

	/**
   * helper that returns the steps
   * @return {Number} returns the number of steps from `min` to `max`
   */
	get steps() {
	return Math.round(this.state.range / this.state.step)
	}

	/**
   * returns the rest angle which is half of the difference between
   * `fullAngle` and 360
   * @return {Number} [description]
   */
	get rest() {
	return (360 - this.state.fullAngle) / 2
	}

	updateValue(event) {

		const pointer = {
			clientX: event.clientX,
			clientY: event.clientY
		}
		
		const deg = this._coordToDeg(event.clientX, event.clientY);
		console.log('01 Deg: '+deg);
		const boundDeg = Math.max(0, Math.min(this.state.fullAngle, deg - this.rest));
		console.log('02 boundDeg: '+boundDeg);
		const rawValue = (boundDeg / this.state.fullAngle * this.range + this.state.min)
		console.log('03 rawValue: '+rawValue);
		const value = Math.round(rawValue / this.state.step) * this.state.step;
		console.log('04 Value: '+value);
		this.setState({rotation: value})

	}

	_onMouseMove(event){		
		this.updateValue(event);
	}

	handleChange(event){
		this.setState({rotation: event.target.value, value: event.target.value});
	}

	render(){

		return (
			<div>
				<h1>TEST TOURIST KNOB</h1>
				<h1>{this.state.rotation}</h1>
				<input type="range" value={this.state.value} min="0" max="100" onChange={this.handleChange}/>
				<div>
					<div className="Knob-Wrapper">
						<svg width="640" height="480">
							<g>
								<title>Knob</title>
								<ellipse ry={this.state.radius} rx={this.state.radius} id="svg_1" cy="223" cx="297" strokeWidth="5" stroke="#000000" fill="#aad4ff" onMouseMove={this._onMouseMove.bind(this)}/>
								<line 	stroke="#000000" 
										id="svg_3" 
										y2={this.state.y} x2={this.state.x} 
										y1="231.00001" x1="300" 
										strokeLinecap="null" 
										strokeLinejoin="null" 
										strokeDasharray="null" 
										strokeWidth="5" fill="none"
										transform="rotate(40,300,231)"
										/>
							</g>
						</svg>
					</div>
				</div>
			</div>
		)
	}
}

export default Knob;
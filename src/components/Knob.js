import React, { Component } from 'react';

class Knob extends Component {

	constructor(){
		super();
		this.state = {
			x: 296,
			y: 69,
			min: 0,
			max: 5,
			radius: 125,
			size: 100,
			fullAngle: 360,
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
	
		const deg = this._coordToDeg(event.clientX, event.clientY);
		
		// console.log('01 Deg: '+deg);
		// console.log('this.state.fullAngle: '+this.state.fullAngle);
		// console.log('deg: '+deg);
		// console.log('this.rest: '+this.rest);
		
		const boundDeg = Math.max(0, Math.min(this.state.fullAngle, deg - this.rest));
		// console.log('02 boundDeg: '+boundDeg);
		
		const rawValue = (boundDeg / this.state.fullAngle * this.range + this.state.min)
		// console.log('03 rawValue: '+rawValue);
		
		const value = Math.round(rawValue / this.state.step) * this.state.step;
		// console.log('04 Value: '+value);

		this.setState({rotation: deg})
	}

	_onMouseMove(event){		
		this.updateValue(event);
	}

	handleChange(event){
		const value = event.target.value;
		this.props.onChange(value);
	}

	render(){
		
		const {min, max, step, size, fullAngle} = this.state
    	const baseAngle = fullAngle / this.range

    	//As soon as handleChange is being triggered, this.props.value changes and thus indicator moves.
    	//handleChange is hooked up with slider input value (see line 107)
    	const rotation = this.rest + (this.props.value - min) * baseAngle

		return (
				<div className="Knobarea">
					<div className="Labels">
						<div className="Label">{this.props.name}</div>
						<div className="Label">{this.props.value}</div>
						<div className="Slider">
							<input type="range" value={this.props.value} min="0" max="5" onChange={this.handleChange}/>
						</div>
					</div>
					<svg width="202" height="202" className="SVG">
						<g>
						  <title>Biggest Circle</title>
						  <circle 	id="svg_1" 
									r="80" 
									cy="100.81073" 
									cx="100.81073" 
									strokeLinecap="null" 
									strokeLinejoin="null" 
									strokeDasharray="null" 
									strokeWidth="3" 
									stroke="#A58D77" 
									fill="#B7A492" 
									onMouseMove={this._onMouseMove.bind(this)}/>
						 </g>
						 <g display="inline">
						  <title>Smaller Circle plus Indicator</title>
						   <line 	id="svg_12" 
						  			x1="102.81073" 
						  			y1="6.810728" 
						  			x2="102.81073" 
						  			y2="97.81073"
						  			strokeLinecap="null" 
						  			strokeLinejoin="null" 
						  			strokeDasharray="null" 
						  			strokeWidth="3" 
						  			stroke="black" 
						  			fill="none"
						  			//102,97 defines x/y of the indicator's center point
						  			transform={`rotate(${rotation},102,97)`}
						  	/>
						  <circle 	id="svg_6" 
						  			stroke="#DFB9A8" 
						  			fill-opacity="0" 
						  			r="32.027023" 
						  			cy="101.310732" 
						  			cx="101.81073" 
						  			strokeLinecap="null" 
						  			strokeLinejoin="null" 
						  			strokeDasharray="null" 
						  			strokeWidth="3" 
						  			fill="#BF7251"/>
						</g>
					</svg>
				</div>
		)
	}
}

export default Knob;
import React, { Component } from 'react';

class Result extends Component {	
	
	render() {

		//CHECK DATA DELIVERY
		// const output = this.props.data;
		// const string = JSON.stringify(output);
		// console.log('JSON file: '+string);

		const findResults = this._findResults();

		return (
			<div>
				{findResults}
			</div>
		);
	}

	_findResults() {

	//FETCHING ALL PROPS I NEED
	const { data, price, tourist, proof } = this.props;
	
	//EMPTY ARRAY FOR RESULTS
	const results = [];

	//CHECK HOW TO CALL VALUES FROM ARRAY
	// const placejson = data[0].Place;
	// const touristjson = data[0].Touristfactor;
	// console.log('Place: '+placejson+' Tourist: '+touristjson);

		return data.map((data) => {
			if(data.Price <= price){
				
				results.push(data.Place);
				console.log('Result: '+results);
				
				return results.map((results) => {
					return (
						<div>
							<h1 className="results" key={results}>{results}</h1>
						</div>
					)
				});
			}
			return (
				<h1>No matches found</h1>
			)
		});
	}
}


export default Result;
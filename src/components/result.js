import React, { Component } from 'react';

class Result extends Component {	
	
	render() {
		
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

		data.map((data) => {
			if(data.Price <= price && data.Touristfactor <= tourist && data.Weatherproof <= proof){				
				results.push(data.Place);
				console.log('Results: '+results);
			}
		});
		if(results.length<=0){
			return <h1 className="results">Sorry, you are too picky. No results found.</h1>
		}
		return results.map ((results) => {
			return (
				<h1 key={results} className="results">{results}📍</h1>
			)
		});
	}
}


export default Result;
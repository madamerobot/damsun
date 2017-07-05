import React, { Component } from 'react';

//CUSTOM COMPONENTS
import CheckTourist from './checkTourist';
import CheckPrice from './checkPrice';
import CheckWeatherproof from './checkWeatherproof';
import './style.css';

class App extends Component {

  constructor(props){   
    super(props);
    this.state = {tourist: '5', price: '2', proof: '3'};
    this.changeTourist = this.changeTourist.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.changeProof = this.changeProof.bind(this);
  }

  changeTourist (tourist) {
    this.setState({ tourist: tourist })
  }

  changePrice (price) {
    this.setState({ price: price })
  }

  changeProof (proof) {
    this.setState({ proof: proof })
  }
  
  render() {
    return (
      <div>
        <div className="Box">
            <CheckTourist tourist={this.state.tourist} onChange={this.changeTourist} />
            <CheckPrice price={this.state.price} onChange={this.changePrice} />
            <CheckWeatherproof weather={this.state.weather} onChange={this.changeProof} />
        </div>
        <div className="Result">
          <h1>Your match: Beukenplein</h1>
        </div>
      </div>
    );
  }
}

export default App;

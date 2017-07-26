import React, { Component } from 'react';

//CUSTOM COMPONENTS
import './style.css';
import Result from './Result';
import Knob from './Knob';
import DATA from '../sunspots'

class App extends Component {

  constructor(props){   
    super(props);

    this.state = {tourist: '4', 
                  price: '4', 
                  proof: '3'
                };

    this.changeTourist = this.changeTourist.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.changeProof = this.changeProof.bind(this);
  }

  changeTourist (value) {
    this.setState({ tourist: value })
  }

  changePrice (value) {
    this.setState({ price: value })
  }

  changeProof (value) {
    this.setState({ proof: value })
  }
  
  render() {
    return (
      <div className="Machine-Wrapper">
        <div className="Result">
            <h1 className="Headline">The Dam <br/>🍦Sun Machine🍦</h1>
            <h2 className="Tagline">Finding your hangout spot <br/> within the blink of an eye</h2>
            <h1 className="Headline">Your match:</h1>
            <Result data={DATA} tourist={this.state.tourist} price={this.state.price} proof={this.state.proof} />
          </div>
          <div className="Subbox">
            <div className="Knobwrapper">
              <Knob name="Rainproof" value={this.state.proof} onChange={this.changeProof}/>
              <Knob name="Touristzone" value={this.state.tourist} onChange={this.changeTourist}/>
              <Knob name="Pricelevel" value={this.state.price} onChange={this.changePrice}/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

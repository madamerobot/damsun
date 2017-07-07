import React, { Component } from 'react';

//CUSTOM COMPONENTS
import './style.css';
import Result from './result';
import DATA from '../sunspots'
import Knob from './Knob';

class App extends Component {

  constructor(props){   
    super(props);

    this.state = {tourist: '1', 
                  price: '1', 
                  proof: '1'
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
      <div>
        <div className="Subbox">
            <Knob name="Tourist" value={this.state.tourist} onChange={this.changeTourist}/>
            <Knob name="Price" value={this.state.price} onChange={this.changePrice}/>
            <Knob name="Weather" value={this.state.proof} onChange={this.changeProof}/>
        </div>
        <div className="Result">
          <h1>Your match:</h1>
          <Result data={DATA} tourist={this.state.tourist} price={this.state.price} proof={this.state.proof} />
        </div>
      </div>
    );
  }
}

export default App;

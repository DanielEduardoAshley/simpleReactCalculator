import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
  
<div className="container">
  <div className="calc-body">
      
      <div className="calc-input scroll">0000000000000000</div>
     
    
    <div className="calc-button-row">
      <div className="button ops">AC</div>
      <div className="button ops">%</div>
      <div className="button ops">±</div>
      <div className="button ops">÷</div>
    </div>
    <div className="calc-button-row">
      <div className="button">7</div>
      <div className="button">8</div>
      <div className="button">9</div>
      <div className="button ops">x</div>
    </div>
    <div className="calc-button-row">
      <div className="button">4</div>
      <div className="button">5</div>
      <div className="button">6</div>
      <div className="button ops">−</div>
    </div>
    <div className="calc-button-row">
      <div className="button">1</div>
      <div className="button">2</div>
      <div className="button">3</div>
      <div className="button ops">+</div>
    </div>
    <div className="calc-button-row">
      <div className="double">0</div>
      <div className="button">.</div>
          <div className="button ops">=</div>
      </div>
    </div>
  </div>
      );
  }
}

export default App;

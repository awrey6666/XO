import React, { Component } from 'react';

export default class Xo extends Component {
  constructor() {
    super();
    this.state = {
      scuare: new Array(9).fill(null),
      count: 0
    }
  }



  clickBlock = (e) => {
    const getName = e.target.getAttribute("name")
    let currentScuare = this.state.scuare

    // erb klini nersum datark tox grvi X kam 0
    if (currentScuare[getName] === null) {

      this.setState({ count: 0 })
      this.state.count % 2 === 0 ? currentScuare[getName] = '0' : currentScuare[getName] = 'X';
    }

    if (currentScuare[0] == currentScuare[1] &&
      currentScuare[1] == currentScuare[2] &&
      currentScuare[0] !== null &&
      currentScuare[1] !== null &&
      currentScuare[2] !== null) {
      alert(currentScuare[0] + "_ery haxtecin")
       this.setState({ count: 0 })
    }

    if (currentScuare[3] == currentScuare[4] &&
      currentScuare[4] == currentScuare[5] &&
      currentScuare[3] !== null &&
      currentScuare[4] !== null &&
      currentScuare[5] !== null) {

      alert(currentScuare[3] + "_ery haxtecin")
       this.setState({ count: 0 })
    }
    if (currentScuare[6] == currentScuare[7] &&
      currentScuare[7] == currentScuare[8] &&
      currentScuare[6] !== null &&
      currentScuare[7] !== null &&
      currentScuare[8] !== null) {

      alert(currentScuare[6] + "_ery haxtecin")
       this.setState({ count: 0 })
    }
    if (currentScuare[0] == currentScuare[3] &&
      currentScuare[3] == currentScuare[6] &&
      currentScuare[0] !== null &&
      currentScuare[3] !== null &&
      currentScuare[6] !== null) {

      alert(currentScuare[0] + "_ery haxtecin")
       this.setState({ count: 0 })
    }
    if (currentScuare[1] == currentScuare[4] &&
      currentScuare[4] == currentScuare[7] &&
      currentScuare[1] !== null &&
      currentScuare[4] !== null &&
      currentScuare[7] !== null) {

      alert(currentScuare[1] + "_ery haxtecin")
       this.setState({ count: 0 })
    }
    if (currentScuare[2] == currentScuare[5] &&
      currentScuare[5] == currentScuare[8] &&
      currentScuare[2] !== null &&
      currentScuare[5] !== null &&
      currentScuare[8] !== null) {

      alert(currentScuare[2] + "_ery haxtecin")
       this.setState({ count: 0 })
    }
    if (currentScuare[0] == currentScuare[4] &&
      currentScuare[4] == currentScuare[8] &&
      currentScuare[0] !== null &&
      currentScuare[4] !== null &&
      currentScuare[8] !== null) {

      alert(currentScuare[0] + "_ery haxtecin")
       this.setState({ count: 0 })
    }
    if (currentScuare[2] == currentScuare[4] &&
      currentScuare[4] == currentScuare[6] &&
      currentScuare[2] !== null &&
      currentScuare[4] !== null &&
      currentScuare[6] !== null) {

      alert(currentScuare[2] + "_ery haxtecin")
       this.setState({ count: 0 })
    }
  }


  render() {
    return (
      <div className="container">
        <div className="box">
          <div name="0" onClick={this.clickBlock} className="scuare"><p>{this.state.scuare[0]}</p></div>
          <div name="1" onClick={this.clickBlock} className="scuare"><p>{this.state.scuare[1]}</p></div>
          <div name="2" onClick={this.clickBlock} className="scuare"><p>{this.state.scuare[2]}</p></div>
          <div name="3" onClick={this.clickBlock} className="scuare"><p>{this.state.scuare[3]}</p></div>
          <div name="4" onClick={this.clickBlock} className="scuare"><p>{this.state.scuare[4]}</p></div>
          <div name="5" onClick={this.clickBlock} className="scuare"><p>{this.state.scuare[5]}</p></div>
          <div name="6" onClick={this.clickBlock} className="scuare"><p>{this.state.scuare[6]}</p></div>
          <div name="7" onClick={this.clickBlock} className="scuare"><p>{this.state.scuare[7]}</p></div>
          <div name="8" onClick={this.clickBlock} className="scuare"><p>{this.state.scuare[8]}</p></div>
        </div>
      </div>
    )
  }
}

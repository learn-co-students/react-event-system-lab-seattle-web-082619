import React from 'react';
import { Component } from 'react';
import { Button } from 'react';

class EyesOnMe extends Component {
  constructor(props){
    super(props)
    this.state = {
      focus: false
    }

    this._onBlur = this._onBlur.bind(this)
    this._onFocus = this._onFocus.bind(this)
  }
  _onBlur(){
    console.log('Hey! Eyes on me!')
    setTimeout(() =>{
      if (this.state.focus){
        this.setState({   
          focus: false,
        });
      }
    }, 0);
  }
  _onFocus(){
    console.log('Good!')
    if(!this.state.focus){
      this.setState({ 
        focus: true,
      })
    }
  }
  render(){

    return (
      <button 
      title="click"
      active
      onFocus={this._onFocus}
      onBlur={this._onBlur}>  Click Me
        </button>
    )
  }
}

export default EyesOnMe;









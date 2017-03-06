import React, { Component } from 'react'


export default class AddressInput extends Component {
  constructor(){
    super()
    this.state={
        address: ''
    }
  }


  handleChange(e){

    //console.log(e.target.value)
    this.setState({address: e.target.value})

    event.preventDefault();

    this.props.onFilterAddress(this.state.address)

  }

  render(){

      return (
          <div>
            <input type='text' placeholder='Filter Globe Stores.....' style={{width: '100%', height: '5%' }}
            onChange={this.handleChange.bind(this)} value={this.state.address}
            />
          </div>
      )
  }
}

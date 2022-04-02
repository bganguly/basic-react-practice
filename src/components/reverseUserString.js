import React from "react";

class ReverseUserString extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      inputString: '',
      reversedString: ''
    }
    // change handler needs to be bound in constructor
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ 
      inputString: e.target.value,
      // one may not use this.state.inputString to derive the below as the state 
      // retains an erroneous older one char
      reversedString: e.target.value.split('').reverse().join('') 
    });
  }

  render () {
    return (
      // center div horizontally in view port using supplied props
      // shorthand wrapper <> may not be used when style or other attrs present
      <div style={{textAlign:this.props.textAlign}}>
        <input  
          style={{textAlign:"center"}}
          placeholder="enter a string"
          onChange={this.handleChange}
          value={this.state.inputString}
        />
        <div>Reversed String : {this.state.reversedString}</div>
      </div>
    )
  }
}

export default ReverseUserString;
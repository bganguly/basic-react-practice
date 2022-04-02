import React from "react";

class ReverseUserString extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      inputString: '',
      reveresedString: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ 
      inputString: e.target.value,
      reveresedString: e.target.value.split('').reverse().join('') 
    });
  }

  render () {
    return (
      <div  style={{textAlign:"center"}}>
        <input  
          style={{textAlign:"center"}}
          placeholder="enter a string"
          onChange={this.handleChange}
          value={this.state.inputString}
        />
        <div>Reversed String : {this.state.reveresedString}</div>
      </div>
    )
  }
}

export default ReverseUserString;
import React from "react";

class SomeTimerComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      timeAsString : null
    }
  }

  tick() {
    this.setState(state => ({
      timeAsString: new Date().toString()
      // Math.random()
    }));
  }
  
  componentDidMount() {
    // comemnting out not recommended as we want to use correct life cycle
    // this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // not recommened due to memory leak concerns
    setInterval(() => this.tick(), 1000);
    return (
      <div id='result'>{this.state.timeAsString}</div>
    )
  }
}

export default SomeTimerComponent;
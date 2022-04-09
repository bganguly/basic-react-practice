import React from "react";

// experimental code that shows anti-patterns
// while it seemingly works- it is not recommended since it does not use
// recommended lifecycle apis and does not manage memory leakages efficiently
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
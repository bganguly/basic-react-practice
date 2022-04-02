import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      timeAsString: null 
    };
  }

  tick() {
    this.setState(state => ({
      timeAsString: new Date().toString()
      //Math.random()
      // state.timeAsString + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        timeAsString: {this.state.timeAsString}
      </div>
    );
  }
}

export default Timer;
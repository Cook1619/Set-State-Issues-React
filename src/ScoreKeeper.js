import React, { Component } from "react";

export default class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }
  singleKill() {
    // You don't want to update your state when it depends on the previous state!!!!
    this.setState({ score: this.state.score + 1 });
  }
  tripleKill() {
    // setState is asynchronous and you can assume the a call is done before another runs
    // Also for performance reasons react with batch it setState calls
    // This is why you never want to depends on the previous state!
    // this.setState({ score: this.state.score + 1 });
    // this.setState({ score: this.state.score + 1 });
    // this.setState({ score: this.state.score + 1 });
    // If a call to setState depends on current state the safest thing is to use
    // the alternate 'callback form'
    // this.setState((st) => {
    //   return { score: st.score + 3 };
    // });
    // The above method uses the callback form, the argument represents the current state
    // This last method is abtracting state updates, where your create a func to call in another func
    // Makes it easier to test
    this.setState(this.tripleStateUpdate);
  }
  tripleStateUpdate(prevState) {
    return { score: prevState.score + 3 };
  }

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill</button>
        <button onClick={this.tripleKill}>Triple Kill</button>
      </div>
    );
  }
}

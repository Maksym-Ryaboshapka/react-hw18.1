import { Component } from "react";

export default class FeedbackOptions extends Component {
  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <button onClick={() => this.props.good()}>Good</button>
        <button onClick={() => this.props.neutral()}>Neutral</button>
        <button onClick={() => this.props.bad()}>Bad</button>
      </>
    )
  }
}

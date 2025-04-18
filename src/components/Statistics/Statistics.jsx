import { Component } from "react";

import Notification from "../Notification/Notification";

export default class Statistics extends Component {
  render() {
    return (
      <>
        <h2>Statistics</h2>

        {this.props.total > 0 ? (
          <>
            <p>Good: {this.props.good}</p>
            <p>Neutral: {this.props.neutral}</p>
            <p>Bad: {this.props.bad}</p>
            <p>Total: {this.props.total}</p>
            <p>Positive feedback: {this.props.positivePercentage}%</p>
          </>
        ) : (
          <>
            <Notification message="There is no feedback" />
          </>
        )}
      </>
    );
  }
}

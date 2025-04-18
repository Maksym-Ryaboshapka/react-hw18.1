import { Component } from "react";

import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";

export default class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  addNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  addBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <FeedbackOptions
          good={this.addGood}
          neutral={this.addNeutral}
          bad={this.addBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={
            isNaN(this.countPositiveFeedbackPercentage())
              ? 0
              : this.countPositiveFeedbackPercentage()
          }
        />
      </>
    );
  }
}

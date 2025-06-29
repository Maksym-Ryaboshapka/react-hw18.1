import { useContext } from "react";
import { StatisticsContext } from "../../context/StatisticsContext/StatisticsContext";
import Notification from "../Notification/Notification";

const Statistics = () => {
  const {
    good,
    neutral,
    bad,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
  } = useContext(StatisticsContext);

  return (
    <>
      <h2>Statistics</h2>

      {countTotalFeedback() > 0 ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {countTotalFeedback()}</p>
          <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
        </>
      ) : (
        <>
          <Notification message="There is no feedback" />
        </>
      )}
    </>
  );
};

export default Statistics;

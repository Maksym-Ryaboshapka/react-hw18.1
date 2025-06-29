import { useState, createContext } from "react";

export const StatisticsContext = createContext(null);

export const StatisticsProvider = ({ children }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <StatisticsContext.Provider
      value={{
        good,
        setGood,
        neutral,
        setNeutral,
        bad,
        setBad,
        countTotalFeedback,
        countPositiveFeedbackPercentage,
      }}
    >
      {children}
    </StatisticsContext.Provider>
  );
};

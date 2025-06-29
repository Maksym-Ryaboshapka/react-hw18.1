import { useContext } from "react";
import { StatisticsContext } from "../../context/StatisticsContext/StatisticsContext";

const FeedbackOptions = () => {
  const { setGood, setNeutral, setBad } = useContext(StatisticsContext);

  return (
    <>
      <h2>Please leave feedback</h2>
      <button onClick={() => setGood((prevState) => prevState + 1)}>
        Good
      </button>
      <button onClick={() => setNeutral((prevState) => prevState + 1)}>
        Neutral
      </button>
      <button onClick={() => setBad((prevState) => prevState + 1)}>Bad</button>
    </>
  );
};

export default FeedbackOptions;

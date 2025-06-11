const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <>
      <h2>Please leave feedback</h2>
      <button onClick={() => good()}>Good</button>
      <button onClick={() => neutral()}>Neutral</button>
      <button onClick={() => bad()}>Bad</button>
    </>
  );
};

export default FeedbackOptions;
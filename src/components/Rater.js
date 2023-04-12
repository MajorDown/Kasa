import React from "react";

const StarIcon = ({ fill }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill ? "#FF6060" : "#F6F6F6"}
      width={40}
      height={40}
    >
      <path d="M12.3 3.5l2.5 5.1 5.6.8-4 4 1 5.6-5.1-2.5-5.1 2.5 1-5.6-4-4 5.6-.8z" />
    </svg>
  );
};

const Rater = ({ rate }) => {
  const starsList = [];
  for (let i = 0; i < 5; i++) {
    const filled = i < rate;
    starsList.push(<StarIcon className="rateStar" key={i} fill={filled} />);
  }
  return <div>{starsList}</div>;
};

export default Rater;

import React from "react";

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formatedTime = `${String(minutes).padStart(2, "0")}: ${String(
    remainingSeconds
  ).padStart(2, "0")}`;
  return formatedTime;
};

const QuizHeader = ({ timer }) => {
  return (
    <div className="sticky top-0 z-10 py-2 my-5 bg-white shadow-sm">
      <div className="flex flex-col items-center justify-between w-9/12 mx-auto md:flex-row">
        <div className="text-xs">
          <p>Attention! You have 60 seconds to answer 6 questions</p>
          <p>
            Please keep an eye on the timer and make sure to answer all
            questions before time runs outS
          </p>
        </div>
        {/**timer */}
        <div>
                  <h1 className="text-xl text-green-700">{formatTime(timer)}</h1>
                  <p>Time Consumed</p>
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;

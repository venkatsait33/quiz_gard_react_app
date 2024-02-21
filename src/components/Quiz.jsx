import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../QuizHeader";

const Loading = () => (
  <div className="h-[220px] w-[220px] mx-auto mt-8 flex flex-col justify-center items-center border-2 rounded-tr-[50%] rounded-bl-[50%] shadow ">
    <p className="text-xl text-gray-500">Loading</p>
  </div>
);

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formatedTime = `${String(minutes).padStart(2, "0")}: ${String(
    remainingSeconds
  ).padStart(2, "0")}`;
  return formatedTime;
};

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [timerIntervalId, setTimerIntervalId] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/public/quiz.json")
      .then((response) => response.json())
      .then((data) =>
        // console.log(data)
        setQuestions(data)
      );
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    setTimerIntervalId(intervalId);

    return () => {
      clearInterval(intervalId);
      if (timer === 0) {
        alert("time is Out");
      }
    };
  }, [timer]);

  const handleAnswerSelect = (questionId, selectedOption) => {
    //console.log(selectedOption);
    const updatedAnswers = { ...answers, [questionId]: selectedOption };
    //console.log(updatedAnswers);
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    clearInterval(timerIntervalId);
    setTimeout(() => {
      const quizScore = calculateScore(answers);
      setScore(quizScore);
      const percentage = (quizScore / questions.length) * 100;
      const newStatus = percentage >= 50 ? "passed" : "failed";
      setStatus(newStatus);
      setShowResults(true);
      setLoading(false);
    }, 3000);
  };

  const calculateScore = (userAnswers) => {
    const correctAnswers = questions.map((question) => question.answer);
    let score = 0;
    for (const questionId in userAnswers) {
      if (userAnswers[questionId] === correctAnswers[questionId - 1]) {
        score++;
      }
    }
    return score;
  };

  //restartQuiz button

  const reStartQuiz = () => {
    setAnswers({});
    setScore(0);
    setShowResults(false);
    setLoading(false);
    setTimer(60);
    navigate("/quiz");
  };
  return (
    <section>
      <QuizHeader timer={timer} />

      {/*<div>Quiz Header</div>*/}
      <div className="md:w-9/12 w-[90%] mx-auto mb-8 flex flex-col sm:flex-row justify-between items-start">
        <div className="md:w-[70%] w-full">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className="px-4 py-3 m-3 border border-gray-200 rounded shadow-sm"
            >
              <p className="flex items-center p-2 text-xs rounded cursor-pointer">
                <span className="flex items-center justify-center w-8 h-8 mr-3 text-green-800 rounded-full bg-[#fcc822]">
                  {index + 1}
                </span>
                <span className="block text-base">{question.question}</span>
              </p>

              {/*Show options */}
              <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2">
                {question.options.map((option, index) => (
                  <div
                    onClick={() => handleAnswerSelect(question.id, option)}
                    key={index}
                    className={`border p-2 border-gray-200 rounded text-xs cursor-pointer ${
                      answers[question.id] === option ? "bg-gray-300" : ""
                    }`}
                  >
                    <p className="text-[10px] mb-1">Option {index + 1}</p>
                    <p className="">{option}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            className="px-6 py-2 text-white rounded-md bg-[#fcc822]"
            onClick={handleSubmit}
          >
            Submit Quiz
          </button>
        </div>
        {/** show answers */}
        <div className="md:w-[30%] w-full p-4">
          {showResults && (
            <div className="text-2xl font-medium">
              <h3>Your Score:</h3>
              <div className="h-[220px] w-[220px] mx-auto mt-8 flex flex-col justify-center items-center border-2 rounded-tr-[50%] rounded-bl-[50%] shadow ">
                <h3
                  className={`md:text-xs text-2xl ${
                    status === "passed" ? "text-green-800" : "text-red-500"
                  }`}
                >
                  {status}
                </h3>
                <h1 className="my-2 text-3xl font-bold">
                  {score * 10} <span className="text-slate-800">/ 60</span>
                </h1>
                <p className="text-xl">
                  Total Time:
                  <span>
                    {formatTime(60 - timer)}
                    <span>sec.</span>
                  </span>
                </p>
              </div>
              <button
                onClick={reStartQuiz}
                className="px-6 py-2 text-white rounded-md bg-[#fcc822] mt-12 w-full "
              >
                Restart
              </button>
            </div>
          )}
          {loading && <Loading />}
        </div>
      </div>
    </section>
  );
};

export default Quiz;

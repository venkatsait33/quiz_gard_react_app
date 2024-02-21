import React, { useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/quiz");
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="lg:w-9/12 md:w-[90%] mx-auto mt-12 flex flex-col px-4 justify-between items-center md:flex-row-reverse">
      {loading && <Loading />}
      {/**right side */}
      <div className="w-full md:w-1/2">
        <img
          src="../../public/images/banner.png"
          alt="banner image"
          className="w-full mx-auto"
        />
      </div>
      {/**Left side */}
      <div className="w-full mb-5 space-y-9 md:w-1/2">
        <h2 className="my-8 lg:text-4xl text-3xl font-medium text-[#333] md:w-4/6 lg:leading-normal leading-normal mb-3">
          Learn new concepts for each questions
        </h2>
        <p className="py-2 pl-2 mb-6 text-base text-gray-500 border-l-4 border-indigo-700">
          We help you for prepare for exams and quizzes
        </p>
        <div className="flex flex-col items-center gap-5 space-x-4 text-xl font-medium md:flex-row">
          <button
            onClick={handleStartQuiz}
            className="px-6 py-2 text-white rounded-md bg-[#fcc822] "
          >
            Start Quiz
          </button>

          <button className="px-6 py-2 rounded-md border text-[#fcc822] hover:bg-[#fcc822] hover:text-white transition-all duration-300 ease-in-out inline-flex items-center">
            <span>
              <HiChevronRight />
            </span>
            Know more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

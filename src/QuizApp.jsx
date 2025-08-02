import React, { useEffect, useState } from "react";
import quizData from "./quizData";

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const shuffled = [...quizData].sort(() => Math.random() - 0.5).slice(0, 100);
    setQuestions(shuffled);
  }, []);

  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    if (!selected) return;

    if (selected === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (currentIndex + 1 === questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelected("");
      setSubmitted(false);
    }
  };

  const handleOptionChange = (e) => {
    setSelected(e.target.value);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 space-y-6">
        {!finished && currentQuestion && (
          <>
            <div className="text-sm text-gray-500 font-medium">
              Question {currentIndex + 1} of {questions.length}
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{currentQuestion.question}</h2>

            <ul className="space-y-4">
              {currentQuestion.options.map((option, idx) => (
                <li key={idx}>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="option"
                      value={option}
                      checked={selected === option}
                      onChange={handleOptionChange}
                      className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                </li>
              ))}
            </ul>

            <button
              onClick={handleNext}
              disabled={!submitted}
              className={`mt-4 px-6 py-2 rounded-lg font-medium text-white transition ${
                submitted
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {currentIndex + 1 === questions.length ? "Finish" : "Next"}
            </button>
          </>
        )}

        {finished && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Quiz Completed!</h2>
            <p className="text-gray-700 text-lg">
              You scored <span className="font-bold">{score}</span> out of{" "}
              <span className="font-bold">{questions.length}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;

import { useState } from "react";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  return (
    <div className="max-w-lg mx-auto p-4">
      {quizData.map((item, index) => (
        <div key={index} className="border p-2 mb-2">
          <h3 
            className="font-semibold cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.question}
          </h3>
          {openIndex === index && (
            <div className="mt-2">
              {item.options.map((option, i) => (
                <button
                  key={i}
                  className={`block w-full p-2 my-1 border rounded ${selectedAnswers[item.question] === option ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                  onClick={() => setSelectedAnswers({ ...selectedAnswers, [item.question]: option })}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

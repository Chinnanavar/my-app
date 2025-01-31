import React, { useState } from 'react';
import './Acc.scss';

const Acc = () => {
  const [active, setActive] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState({});

  const toggle = (i) => {
    if (active === i) {
      return setActive(null);
    }
    setActive(i);
  };

  const handleOptionSelect = (questionId, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex
    });
  };

  const checkAnswer = (questionId) => {
    setShowResults({
      ...showResults,
      [questionId]: true
    });
  };

  return (
    <div className='wrapper'>
      <div className='accordion'>
        {Data.map((item, i) => (
          <div className='item' key={item.id}>
            <div className='title' onClick={() => toggle(i)}>
              <h3>{item.question}</h3>
              <span>{active === i ? '-' : '+'}</span>
            </div>
            <div className='content' style={{display: active === i ? 'block' : 'none'}}>
              {item.options ? (
                // MCQ Question
                <div className='mcq-options'>
                  {item.options.map((option, index) => (
                    <div 
                      key={index}
                      className={`mcq-option ${
                        selectedAnswers[item.id] === index ? 'selected' : ''
                      } ${
                        showResults[item.id] && index === item.correctAnswer ? 'correct' : ''
                      } ${
                        showResults[item.id] && selectedAnswers[item.id] === index && 
                        index !== item.correctAnswer ? 'incorrect' : ''
                      }`}
                      onClick={() => !showResults[item.id] && handleOptionSelect(item.id, index)}
                    >
                      {option}
                      {showResults[item.id] && index === item.correctAnswer && ' ✓'}
                      {showResults[item.id] && selectedAnswers[item.id] === index && 
                       index !== item.correctAnswer && ' ✗'}
                    </div>
                  ))}
                  {!showResults[item.id] && selectedAnswers[item.id] !== undefined && (
                    <button 
                      className='check-button'
                      onClick={() => checkAnswer(item.id)}
                    >
                      Check Answer
                    </button>
                  )}
                </div>
              ) : (
                // Regular text answer
                <p>{item.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Data = [
  {
    id: 1,
    question: 'What is React?',
    options: [
      'A JavaScript library for building user interfaces',
      'A database management system',
      'A programming language',
      'An operating system'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'What is a component?',
    options: [
      'A database table',
      'A reusable building block of UI',
      'A styling framework',
      'A JavaScript function'
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: 'How do you pass data to a component?',
    answer: 'You can pass data to a component by using props.'
  }
];

export default Acc;
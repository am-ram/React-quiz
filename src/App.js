import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What country has the most islands in the world ?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Sweden', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'When was Netflix founded?',
			answerOptions: [
				{ answerText: '2019', isCorrect: false },
				{ answerText: '1997', isCorrect: true },
				{ answerText: '2001', isCorrect: false },
				{ answerText: '2009', isCorrect: false },
			],
		},
		{
			questionText: 'Name the princess in Disney`s first film.',
			answerOptions: [
				{ answerText: 'Snow White', isCorrect: true },
				{ answerText: 'Cinderella', isCorrect: false },
				{ answerText: 'Rapunzel', isCorrect: false },
				{ answerText: 'Jasmine', isCorrect: false },
			],
		},
		{
			questionText: 'How many books of Harry Potter are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Which Yuga did Lord Rama appear',
			answerOptions: [
				{ answerText: 'Satya', isCorrect: false },
				{ answerText: 'Dvapara', isCorrect: false },
				{ answerText: 'Kali', isCorrect: false },
				{ answerText: 'Treta', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
			
		</div>
	);
}

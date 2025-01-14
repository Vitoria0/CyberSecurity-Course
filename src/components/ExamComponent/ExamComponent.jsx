import { useState } from 'react';
import { Box, Button, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';

const ExamComponent = ({ onComplete }) => {
	const questions = [
		{
			question: 'Quanto é 2 + 2?',
			options: ['3', '4', '5', '6'],
			correctAnswer: '4',
		},
		{
			question: 'Quanto é 2 + 2?',
			options: ['3', '4', '5', '6'],
			correctAnswer: '4',
		},
		{
			question: 'Quanto é 2 + 2?',
			options: ['3', '4', '5', '6'],
			correctAnswer: '4',
		},
		{
			question: 'Quanto é 2 + 2?',
			options: ['3', '4', '5', '6'],
			correctAnswer: '4',
		},
		{
			question: 'Quanto é 2 + 2?',
			options: ['3', '4', '5', '6'],
			correctAnswer: '4',
		},
		{
			question: 'Quanto é 2 + 2?',
			options: ['3', '4', '5', '6'],
			correctAnswer: '4',
		},
		{
			question: 'Quanto é 2 + 2?',
			options: ['3', '4', '5', '6'],
			correctAnswer: '4',
		},
		{
			question: 'Quanto é 2 + 2?',
			options: ['3', '4', '5', '6'],
			correctAnswer: '4',
		},
		{
			question: 'Quanto é 2 + 2?',
			options: ['3', '4', '5', '6'],
			correctAnswer: '4',
		},
		{
			question: 'Quanto é 2 + 2?',
			options: ['3', '4', '5', '6'],
			correctAnswer: '4',
		},
		// Adicione mais perguntas...
	];

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedOption, setSelectedOption] = useState('');
	const [score, setScore] = useState(0);
	const [isFinished, setIsFinished] = useState(false);

	const getPercentage = () => {
    console.log((score / questions.length) * 100)
		return (score / questions.length) * 100;
	};

	const handleOptionChange = event => {
		setSelectedOption(event.target.value);
	};

	const handleSubmitAnswer = () => {
		const currentQuestion = questions[currentQuestionIndex];
		if (selectedOption === currentQuestion.correctAnswer) {
			setScore(prevScore => prevScore + 1);
		}

		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(prevIndex => prevIndex + 1);
			setSelectedOption('');
		} else {
			setIsFinished(true);
		}
	};

	const handleRetry = () => {
		setCurrentQuestionIndex(0);
		setSelectedOption('');
		setScore(0);
		setIsFinished(false);
	};

	return (
		<Box
			sx={{
				width: '100%',
				maxWidth: { xs: '20rem', md: '55rem' },
				margin: '0 auto',
				padding: 3,
				borderRadius: 8,
				boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
				border: '2px solid #FFFFFF',
				backgroundColor: '#f9f9f910',
				textAlign: 'center',
				color: '#FFF',
			}}
		>
			{!isFinished ? (
				<Box>
					<Typography variant='h6' gutterBottom>
						{questions[currentQuestionIndex].question}
					</Typography>
					<RadioGroup
						value={selectedOption}
						onChange={handleOptionChange}
						sx={{ textAlign: 'left' }}
					>
						{questions[currentQuestionIndex].options.map((option, index) => (
							<FormControlLabel
								key={index}
								value={option}
								control={<Radio />}
								label={option}
								sx={{
									'& .MuiFormControlLabel-label': {
										color: '#FFF',
									},
								}}
							/>
						))}
					</RadioGroup>
					<Button
						variant='contained'
						color='primary'
						onClick={handleSubmitAnswer}
						disabled={!selectedOption}
						sx={{
							marginTop: 3,
							px: 6,
							py: 1.5,
							borderRadius: '15px',
							background: selectedOption ? '#8BFF61' : '#D9D9D910',
							'&:hover': { background: selectedOption ? '#6DBE49' : '#D9D9D910' },
						}}
					>
						Responder
					</Button>
				</Box>
			) : (
				<Box>
					<Typography variant='h5' sx={{ marginBottom: 2 }}>
						Prova Finalizada!
					</Typography>
					<Typography variant='body1' sx={{ marginBottom: 4 }}>
						Você acertou {score} de {questions.length} perguntas. Sua nota é {score}.
					</Typography>
					{getPercentage() >= 70 ? (
						<Button
							variant='contained'
							color='success'
							onClick={() => {
								alert('Prova finalizada com sucesso!');
								onComplete(getPercentage());
							}}
							sx={{
								px: 6,
								py: 1.5,
								borderRadius: '15px',
								background: '#8BFF61',
								'&:hover': { background: '#6DBE49' },
							}}
						>
							Finalizar
						</Button>
					) : (
						<Button
							variant='contained'
							color='warning'
							onClick={handleRetry}
							sx={{
								px: 6,
								py: 1.5,
								borderRadius: '15px',
								background: '#FF6161',
								'&:hover': { background: '#E04848' },
							}}
						>
							Refazer Prova
						</Button>
					)}
				</Box>
			)}
		</Box>
	);
};

export default ExamComponent;

import { useState } from 'react';
import { Box, Button, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';

const QuizComponent = ({ question, options, correctAnswer, onAnswer }) => {
	const [selectedOption, setSelectedOption] = useState('');
	const [isAnswered, setIsAnswered] = useState(false);
	const [isCorrect, setIsCorrect] = useState(false);

	const handleOptionChange = event => {
		setSelectedOption(event.target.value);
	};

	const handleAnswer = () => {
		const correct = selectedOption === correctAnswer;
		setIsCorrect(correct);
		setIsAnswered(true);
		if (correct) {
			onAnswer(correct);
		}
	};

	const handleRetry = () => {
		setSelectedOption('');
		setIsAnswered(false);
		setIsCorrect(false);
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
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'start',
				justifyContent: 'space-between',
				gap: 3,
				padding: 5,
				color: '#FFF',
			}}
		>
			<Typography variant='h6' gutterBottom textAlign={'left'}>
				{question}
			</Typography>
			<RadioGroup value={selectedOption} onChange={handleOptionChange}>
				{options.map((option, index) => (
					<FormControlLabel
						key={index}
						value={option}
						control={<Radio />}
						label={option}
						disabled={isAnswered}
						sx={{
							'& .MuiFormControlLabel-label.Mui-disabled': {
								color: isAnswered ? 'gray' : 'white',
							},
							'& .css-1ehfup0-MuiButtonBase-root-MuiRadio-root.Mui-disabled': {
								color: isAnswered ? 'gray' : 'white',
							},
						}}
					/>
				))}
			</RadioGroup>

			{isAnswered && (
				<Typography
					variant='body1'
					sx={{
						marginY: 2,
						color: '#fff',
						backgroundColor: isCorrect ? '#8BFF6114' : '#FF616150',
						width: '100%',
						padding: 2,
						borderRadius: 8,
						border: isCorrect ? '1px solid #8BFF61' : '2px solid #FF6161',
					}}
				>
					{isCorrect ? 'Resposta correta! Parabéns!' : 'Resposta incorreta. Tente novamente.'}
				</Typography>
			)}

			<Box
				sx={{
					justifyContent: 'center',
					gap: 2,
					marginTop: 2,
					width: '100%',
					display: isAnswered && isCorrect ? 'none' : 'flex',
				}}
			>
				<Button
					variant='contained'
					color='primary'
					onClick={handleAnswer}
					disabled={!selectedOption || isAnswered}
					sx={{
						display: isAnswered ? 'none' : 'block',
						opacity: selectedOption ? '1' : '0.3',
						border: '2px solid #AD61FF',
						px: 6,
						py: 1.5,
						background: '#D9D9D910',
						borderRadius: '15px',
						transition: 'all 200ms ease-in-out',
						'&:hover': {
							transform: 'scale(1.05)',
							background: '#D9D9D910',
						},
						'&:focus': { background: '#D9D9D910' },
					}}
				>
					<Typography
						variant='body1'
						sx={{
							color: '#FFFFFF',
							textAlign: 'center',
							fontWeight: 'bold',
						}}
					>
						Responder
					</Typography>
				</Button>
				<Button
					variant='outlined'
					color='secondary'
					onClick={handleRetry}
					disabled={!isAnswered || isCorrect}
					sx={{
						display: !isAnswered || isCorrect ? 'none' : 'block',
						px: 6,
						py: 1.5,
						background: '#D9D9D910',
						borderRadius: '15px',
						border: 'none',
						transition: 'all 200ms ease-in-out',
						'&:hover': {
							transform: 'scale(1.05)',
							border: 'none',
						},
						'&:focus': {
							border: 'none',
						},
					}}
				>
					<Typography
						variant='body1'
						sx={{
							color: '#FFFFFF',
							textAlign: 'center',
						}}
					>
						Tentar Novamente
					</Typography>
				</Button>
			</Box>
		</Box>
	);
};

export default QuizComponent;

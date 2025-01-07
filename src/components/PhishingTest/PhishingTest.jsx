import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import phishing1 from '../../assets/img/phishing1.png';
import phishing2 from '../../assets/img/phishing2.png';
import phishing3 from '../../assets/img/phishing3.png';

// Dados para os cenários de phishing
const phishingScenarios = [
	{ id: 1, image: phishing3, isPhishing: true },
	{ id: 2, image: phishing2, isPhishing: false },
	{ id: 3, image: phishing1, isPhishing: true },
];

export const PhishingTest = (callback) => {
	const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0); // Índice do cenário atual
	const [userFeedback, setUserFeedback] = useState('');
	const [isFinished, setIsFinished] = useState(false); // Para verificar se terminou

	const selectedScenario = phishingScenarios[selectedScenarioIndex];

	const handleFeedback = isPhishing => {
		if (isPhishing === selectedScenario.isPhishing) {
			setUserFeedback('Você acertou!');
		} else {
			setUserFeedback('Você errou!');
		}
	};

	const handleNext = () => {
		if (selectedScenarioIndex < phishingScenarios.length - 1) {
			setSelectedScenarioIndex(selectedScenarioIndex + 1);
			setUserFeedback(''); // Limpa o feedback para o próximo cenário
		} else {
			callback();
			setIsFinished(true); // Marca como finalizado quando chegar ao último cenário
		}
	};

	const handleRestart = () => {
		setSelectedScenarioIndex(0); // Reseta o índice para o primeiro cenário
		setUserFeedback('');
		setIsFinished(false); // Reseta o estado para o início
	};

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: { xs: 2, md: 4 },

				position: 'relative',
			}}
		>
			<Box
				sx={{
					width: '100%',
					aspectRatio: '1206/667',
					backgroundColor: '#FFFFFF10',
					borderRadius: '15px',
					padding: '1rem',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					border: '3px solid #D4D4D4',
					justifyContent: 'center',
					overflow: 'auto', // Permite rolagem se necessário
				}}
			>
				{isFinished ? (
					<>
						<Typography variant='h6'>Finalizado!</Typography>
						<Button onClick={handleRestart} sx={{ marginTop: 2 }}>
							Fazer novamente
						</Button>
					</>
				) : (
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							gap: { xs: 2, md: 4 },
						}}
					>
						{!isFinished && (
							<Box
								sx={{
									width: '80%',
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'space-between',
									gap: 2,
									position: 'absolute',
									bottom: 10,
									zIndex: 2,
								}}
							>
								<Button
									onClick={() => handleFeedback(true)}
									sx={{
										backgroundColor: 'green',
										border: '3px solid green',
										borderRadius: 10,
										px: 4,
										py: 0.5,
										color: 'white',
										'&:hover': {
											backgroundColor: 'darkgreen',
										},
									}}
								>
									É phishing
								</Button>
								<Button
									onClick={() => handleFeedback(false)}
									sx={{
										backgroundColor: 'red',
										border: '3px solid red',
										borderRadius: 10,
										px: 4,
										py: 0.5,
										color: 'white',
										'&:hover': {
											backgroundColor: 'darkred',
										},
									}}
								>
									Não é phishing
								</Button>
							</Box>
						)}
						<img
							src={selectedScenario.image}
							alt={`Cenário de phishing ${selectedScenario.id}`}
							style={{
								width: '100%',
								height: 'auto',
								objectFit: 'contain',
								paddingTop:
									selectedScenario.id == 1
										? 80
										: selectedScenario.id == 2
										? 400
										: 80,
							}}
						/>{' '}{!isFinished && userFeedback && (
						<Box
							sx={{
								width: '100%',
								height: '100%',
								backgroundColor: 'rgba(0, 0, 0, 0.8)',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								gap: 2,
								position: 'absolute', 
								top: 0,    
                                left: 0,    
                                bottom: 0,    
                                right: 0,   
								zIndex: 2,
							}}
						>
							
								<Typography variant='h6' sx={{ marginTop: 2 }}>
									{userFeedback && <span>{userFeedback}</span>}
								</Typography>
						

							 
								<Button variant='contained' onClick={handleNext} sx={{ marginTop: 2, backgroundColor: 'gray' }}>
									{selectedScenarioIndex < phishingScenarios.length - 1
										? 'Próximo'
										: 'Finalizar'}
								</Button>
							 
						</Box>	)}
					</Box>
				)}
			</Box>
		</Box>
	);
};

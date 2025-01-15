import { useState } from 'react';
import { Box, Button, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';

const ExamComponent = ({ onComplete }) => {
	const questions = [
		{
			question: 'Qual é a principal preocupação relacionada à segurança dos dispositivos IoT?',
			options: [
				'Dispositivos IoT consomem muita energia e afetam o desempenho da rede.',
				'Dispositivos IoT podem ser vulneráveis a ataques se não forem configurados adequadamente.',
				'Dispositivos IoT são facilmente acessíveis por meio de cabos de rede.',
				'Dispositivos IoT têm padrões de segurança que são mais fortes que os de outros dispositivos.',
			],
			correctAnswer:
				'Dispositivos IoT podem ser vulneráveis a ataques se não forem configurados adequadamente.',
		},
		{
			question: 'Quais práticas são recomendadas para garantir a segurança e privacidade de informações em dispositivos usados por várias pessoas?',
			options: [
				'Usar perfis de usuário separados e manter o software desatualizado.',
				'Habilitar a navegação privada e salvar senhas para facilitar o acesso.',
				'Usar perfis de usuário separados, habilitar a navegação privada e manter o software atualizado.',
				'Compartilhar senhas para facilitar o acesso ao dispositivo.',
			],
			correctAnswer:
				'Usar perfis de usuário separados, habilitar a navegação privada e manter o software atualizado.',
		},
		{
			question: 'Quais são os principais desafios de segurança relacionados ao uso de dispositivos móveis?',
			options: [
				'Aumento do risco de perda de dispositivos, roubo de dados e exposição a ataques maliciosos.',
				'Menor custo de manutenção e maior facilidade de uso.',
				'Dificuldade em acessar a internet e limitações na comunicação.',
				'Aumento da vida útil dos dispositivos e maior resistência a falhas.',
			],
			correctAnswer:
				'Aumento do risco de perda de dispositivos, roubo de dados e exposição a ataques maliciosos.',
		},
		{
			question: 'O que é um vírus de computador?',
			options: [
				'Um tipo de software que ajuda a melhorar o desempenho do sistema.',
				'Um programa malicioso que se replica e pode danificar dados ou sistemas.',
				'Um arquivo inofensivo que ajuda na navegação na internet.',
				'Um dispositivo físico que protege o computador contra ameaças.',
			],
			correctAnswer: 'Um programa malicioso que se replica e pode danificar dados ou sistemas.',
		},
		{
			question: 'O que é a Engenharia Social?',
			options: [
				'Um tipo de vírus de computador.',
				'Técnicas utilizadas para manipular ou enganar pessoas a fim de obter informações confidenciais.',
				'Um método de criptografia de dados.',
				'Nenhuma das alternativas anteriores.',
			],
			correctAnswer:
				'Técnicas utilizadas para manipular ou enganar pessoas a fim de obter informações confidenciais.',
		},
		{
			question: 'O que caracteriza o ataque de phishing?',
			options: [
				'O uso de software malicioso para roubar dados.',
				'A criação de um site falso para coletar informações pessoais de forma fraudulenta.',
				'A tentativa de enganar alguém usando uma falsa identidade ou cenário.',
				'Nenhuma das alternativas anteriores.',
			],
			correctAnswer: 'A criação de um site falso para coletar informações pessoais de forma fraudulenta.',
		},
		{
			question: 'Qual é o principal objetivo da LGPD (Lei Geral de Proteção de Dados)?',
			options: [
				'Garantir a privacidade dos dados pessoais e proteger os indivíduos contra o uso indevido.',
				'Fornecer regras sobre como tratar dados financeiros em empresas.',
				'Regular o uso de cookies em sites.',
				'Nenhuma das alternativas anteriores.',
			],
			correctAnswer:
				'Garantir a privacidade dos dados pessoais e proteger os indivíduos contra o uso indevido.',
		},
		{
			question: 'O que é o pretexting em engenharia social?',
			options: [
				'Utilização de iscas para atrair vítimas, como promoções falsas.',
				'A criação de um cenário falso para obter informações pessoais.',
				'Roubo físico de dispositivos de armazenamento de dados.',
				'Nenhuma das alternativas anteriores.',
			],
			correctAnswer: 'A criação de um cenário falso para obter informações pessoais.',
		},
		{
			question: 'O que é baiting em termos de ataques de engenharia social?',
			options: [
				'A utilização de software malicioso para roubar informações bancárias.',
				'A tentativa de enganar a vítima através de iscas, como downloads ou ofertas falsas.',
				'O envio de e-mails falsos com links para sites seguros.',
				'Nenhuma das alternativas anteriores.',
			],
			correctAnswer: 'A tentativa de enganar a vítima através de iscas, como downloads ou ofertas falsas.',
		},
		{
			question: 'O que significa o termo tailgating no contexto de segurança da informação?',
			options: [
				'O ato de um atacante seguir outra pessoa para obter acesso físico a áreas restritas.',
				'O ato de se passar por outra pessoa para acessar um sistema protegido.',
				'O uso de senhas fracas para acessar sistemas.',
				'Nenhuma das alternativas anteriores.',
			],
			correctAnswer: 'O ato de um atacante seguir outra pessoa para obter acesso físico a áreas restritas.',
		},
	];
	// 2,3,1,2,2,2,1,2,2,1


	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedOption, setSelectedOption] = useState('');
	const [score, setScore] = useState(0);
	const [isFinished, setIsFinished] = useState(false);

	const getPercentage = () => {
		console.log((score / questions.length) * 100);
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
							color: '#FFF',
							borderRadius: '15px', 
							'&:hover': { color: '#FFF' },
						}}
					>
						Responder aaaaa
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

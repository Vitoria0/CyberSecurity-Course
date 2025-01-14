import { Box, Button, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import pin from '../../assets/img/pin.png';
import g1 from '../../assets/img/G1.png';
import g2 from '../../assets/img/G2.png';
import g3 from '../../assets/img/G3.png';
import g4 from '../../assets/img/G4.png';
import g5 from '../../assets/img/G5.png';
import g6 from '../../assets/img/G6.png';
import g7 from '../../assets/img/G7.png';
import g8 from '../../assets/img/G8.png';
import g9 from '../../assets/img/G9.png';
import g2text from '../../assets/img/g2text.png';
import formgame from '../../assets/img/formgame.png';
import { Botao } from '../Botao';
import { useState } from 'react';

export const Game = ({ Completed }) => {
	const [index, setIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [isAnswered, setIsAnswered] = useState(false);

	const handleAnswer = () => {
		setIsAnswered(true);
	};

	const handleContinue = () => {
		setIndex(4); // Próxima etapa do jogo
		setIsAnswered(false);
		setSelectedAnswer(null);
	};

	const handleContinue2 = () => {
		setIndex(6); // Próxima etapa do jogo
		setIsAnswered(false);
		setSelectedAnswer(null);
	};

	const handleContinue3 = () => {
		setIndex(8); // Próxima etapa do jogo
		setIsAnswered(false);
		setSelectedAnswer(null);
	};

	const handleContinue4 = () => {
		setIndex(10); // Próxima etapa do jogo
		setIsAnswered(false);
		setSelectedAnswer(null);
	};

	const handleContinue5 = () => {
		setIndex(12); // Próxima etapa do jogo
		setIsAnswered(false);
		setSelectedAnswer(null);
	};

	const handleContinue6 = () => {
		setIndex(14); // Próxima etapa do jogo
		setIsAnswered(false);
		setSelectedAnswer(null);
	};

	const handleContinue7 = () => {
		setIndex(16); // Próxima etapa do jogo
		setIsAnswered(false);
		('');
		setSelectedAnswer(null);
		callback()
	};
	const handleRestart = () => {
		setIndex(0); // Próxima etapa do jogo
		setIsAnswered(false);
		('');
		setSelectedAnswer(null);
	};

	const handleFinalize = () => {
		Completed();
	};
	return (
		<Box
			sx={{
				width: '100%',
				aspectRatio: { xs: index == 3 ? '1319/1330' : '1319/805', md: '1319/805' },
				position: 'relative',
				borderRadius: '30px',
				overflow: 'hidden',
				border: '3px solid #AD61FF',
			}}
		>
			{index == 0 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g1})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							bottom: '35%',
							left: '5%',
						}}
					>
						<Botao.Secondary text='Começar' onClick={() => setIndex(1)} />
					</Box>
				</Box>
			)}
			{index == 1 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g2})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							top: '3%',
							left: '2%',
						}}
					>
						<img src={g2text} style={{ width: '98%' }} />
					</Box>

					<svg
						onClick={() => setIndex(2)}
						className={'pulse-animation'}
						xmlns='http://www.w3.org/2000/svg'
						width='4%'
						style={{
							aspectRatio: 1,
							position: 'absolute',
							top: '-29%',
							right: '3%',
							cursor: 'pointer',
						}}
						height='auto'
						viewBox='0 0 100 100'
					>
						<polygon points='30,20 80,50 30,80' fill='white' />
					</svg>
				</Box>
			)}
			{index == 2 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g2})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						onClick={() => setIndex(3)}
						className='ping-animation'
						sx={{
							cursor: 'pointer',
							position: 'absolute',
							width: '10%',
							top: '45%',
							left: '38%',
						}}
					>
						<img src={pin} style={{ width: '100%' }} />
					</Box>
				</Box>
			)}
			{index == 3 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g2})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							width: '95%',
							top: '8%',
							left: '2.5%',
							zIndex: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						<img src={formgame} style={{ width: '100%', backdropFilter: 'blur(8px)' }} />
					</Box>

					<Box
						sx={{
							position: 'absolute',
							width: '95%',
							height: '90%',
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							backdropFilter: 'blur(8px)',
							top: '5%',
							left: '2.5%',
							zIndex: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					></Box>

					<Box
						sx={{
							position: 'absolute',
							width: '88%',
							aspectRatio: '1212/632',
							top: '11%',
							left: '6%',
							zIndex: 1,
							padding: '20px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-around',
						}}
					>
						<Typography
							variant='body1'
							sx={{
								color: 'white',
								marginBottom: '5px',
								fontWeight: '300',
								fontFamily: 'Poppins, sans-serif',
								fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
							}}
						>
							Qual dessas práticas NÃO está em conformidade com as políticas de segurança?
						</Typography>

						<RadioGroup
							value={selectedAnswer}
							onChange={e => setSelectedAnswer(e.target.value)}
						>
							<FormControlLabel
								value='Compartilhar senhas com colegas.'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										variant='body1'
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Compartilhar senhas com colegas.
									</Typography>
								}
							/>
							<FormControlLabel
								value='Usar autenticação multifator (MFA).'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Usar autenticação multifator (MFA).
									</Typography>
								}
							/>
							<FormControlLabel
								value='Seguir uma política de acesso restrito.'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Seguir uma política de acesso restrito.
									</Typography>
								}
							/>
						</RadioGroup>

						{isAnswered && (
							<Typography
								variant='body1'
								sx={{
									width: '100%',
									textAlign: 'center',
									color: 'white',
									fontWeight: '500',
									fontFamily: 'Poppins, sans-serif',
									marginTop: '5px',
									fontSize: { xs: '0.8rem', md: '0.8rem', lg: '0.8rem' },
								}}
							>
								{selectedAnswer === 'Compartilhar senhas com colegas.'
									? 'Correto! Não é seguro compartilhar senhas com colegas.'
									: 'Ops! Revisite as políticas e lembre-se de que MFA e restrição de acesso são essenciais.'}
							</Typography>
						)}

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								gap: 2,
								marginTop: '10px',
							}}
						>
							<Button
								variant='contained'
								onClick={handleAnswer}
								disabled={isAnswered || !selectedAnswer}
								sx={{
									px: 3,
									py: 0.5,
									opacity: isAnswered || !selectedAnswer ? 0.5 : 1,
									border: '2px solid #AD61FF',
									background: 'transparent',
									borderRadius: '99px',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										transform: 'scale(1.1)',
										border: '2px solid #AD61FF',
										background: 'transparent',
										borderRadius: '99px',
									},
									'&:focus': {
										outline: 'none',
										border: '2px solid #AD61FF',
										borderRadius: '99px',
										background: 'transparent',
									},
								}}
							>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Tektur, sans-serif',
										color: 'white',
										textAlign: 'center',
										fontSize: { xs: '0.5rem', md: '0.8rem', lg: '0.75rem' },
										fontWeight: 'bold',
									}}
								>
									Responder
								</Typography>
							</Button>
							<Button
								variant='contained'
								onClick={handleContinue}
								disabled={!isAnswered}
								sx={{
									px: 3,
									py: 0.5,
									opacity: !isAnswered ? 0.5 : 1,
									border: '2px solid #AD61FF',
									background: 'transparent',
									borderRadius: '99px',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										transform: 'scale(1.1)',
										border: '2px solid #AD61FF',
										background: 'transparent',
										borderRadius: '99px',
									},
									'&:focus': {
										outline: 'none',
										border: '2px solid #AD61FF',
										borderRadius: '99px',
										background: 'transparent',
									},
								}}
							>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Tektur, sans-serif',
										color: 'white',
										textAlign: 'center',
										fontSize: { xs: '0.5rem', md: '0.8rem', lg: '0.75rem' },
										fontWeight: 'bold',
									}}
								>
									Continuar
								</Typography>
							</Button>
						</Box>
					</Box>
				</Box>
			)}
			{index == 4 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g3})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						onClick={() => setIndex(5)}
						className='ping-animation'
						sx={{
							cursor: 'pointer',
							position: 'absolute',
							width: '10%',
							bottom: '33%',
							right: '25%',
						}}
					>
						<img src={pin} style={{ width: '100%' }} />
					</Box>
				</Box>
			)}
			{index == 5 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g3})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							width: '95%',
							top: '8%',
							left: '2.5%',
							zIndex: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						<img src={formgame} style={{ width: '100%', backdropFilter: 'blur(8px)' }} />
					</Box>

					<Box
						sx={{
							position: 'absolute',
							width: '95%',
							height: '90%',
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							backdropFilter: 'blur(8px)',
							top: '5%',
							left: '2.5%',
							zIndex: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					></Box>

					<Box
						sx={{
							position: 'absolute',
							width: '88%',
							aspectRatio: '1212/632',
							top: '11%',
							left: '6%',
							zIndex: 1,
							padding: '20px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-around',
						}}
					>
						<Typography
							variant='body1'
							sx={{
								color: 'white',
								marginBottom: '5px',
								fontWeight: '300',
								fontFamily: 'Poppins, sans-serif',
								fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
							}}
						>
							Você achou um notbook perdido no escritório. O que fazer em caso de perda de
							um dispositivo corporativo?
						</Typography>

						<RadioGroup
							value={selectedAnswer}
							onChange={e => setSelectedAnswer(e.target.value)}
						>
							<FormControlLabel
								value='1'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										variant='body1'
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Relatar imediatamente ao setor de TI.
									</Typography>
								}
							/>
							<FormControlLabel
								value='2'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Ignorar e esperar que o dispositivo reapareça.
									</Typography>
								}
							/>
							<FormControlLabel
								value='3'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Trocar a senha depois de semanas.
									</Typography>
								}
							/>
						</RadioGroup>

						{isAnswered && (
							<Typography
								variant='body1'
								sx={{
									width: '100%',
									textAlign: 'center',
									color: 'white',
									fontWeight: '500',
									fontFamily: 'Poppins, sans-serif',
									marginTop: '5px',
									fontSize: { xs: '0.8rem', md: '0.8rem', lg: '0.8rem' },
								}}
							>
								{selectedAnswer === '1'
									? 'Correto!'
									: 'Errado! Ignorar a situação pode aumentar os riscos. Sempre notifique o TI.'}
							</Typography>
						)}

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								gap: 2,
								marginTop: '10px',
							}}
						>
							<Button
								variant='contained'
								onClick={handleAnswer}
								disabled={isAnswered || !selectedAnswer}
								sx={{
									px: 3,
									py: 0.5,
									opacity: isAnswered || !selectedAnswer ? 0.5 : 1,
									border: '2px solid #AD61FF',
									background: 'transparent',
									borderRadius: '99px',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										transform: 'scale(1.1)',
										border: '2px solid #AD61FF',
										background: 'transparent',
										borderRadius: '99px',
									},
									'&:focus': {
										outline: 'none',
										border: '2px solid #AD61FF',
										borderRadius: '99px',
										background: 'transparent',
									},
								}}
							>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Tektur, sans-serif',
										color: 'white',
										textAlign: 'center',
										fontSize: { xs: '0.5rem', md: '0.8rem', lg: '0.75rem' },
										fontWeight: 'bold',
									}}
								>
									Responder
								</Typography>
							</Button>
							<Button
								variant='contained'
								onClick={handleContinue2}
								disabled={!isAnswered}
								sx={{
									px: 3,
									py: 0.5,
									opacity: !isAnswered ? 0.5 : 1,
									border: '2px solid #AD61FF',
									background: 'transparent',
									borderRadius: '99px',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										transform: 'scale(1.1)',
										border: '2px solid #AD61FF',
										background: 'transparent',
										borderRadius: '99px',
									},
									'&:focus': {
										outline: 'none',
										border: '2px solid #AD61FF',
										borderRadius: '99px',
										background: 'transparent',
									},
								}}
							>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Tektur, sans-serif',
										color: 'white',
										textAlign: 'center',
										fontSize: { xs: '0.5rem', md: '0.8rem', lg: '0.75rem' },
										fontWeight: 'bold',
									}}
								>
									Continuar
								</Typography>
							</Button>
						</Box>
					</Box>
				</Box>
			)}
			{index == 6 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g4})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						onClick={() => setIndex(7)}
						className='ping-animation'
						sx={{
							cursor: 'pointer',
							position: 'absolute',
							width: '10%',
							top: '28%',
							right: '20%',
						}}
					>
						<img src={pin} style={{ width: '100%' }} />
					</Box>
				</Box>
			)}
			{index == 7 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g4})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							width: '95%',
							top: '8%',
							left: '2.5%',
							zIndex: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						<img src={formgame} style={{ width: '100%', backdropFilter: 'blur(8px)' }} />
					</Box>

					<Box
						sx={{
							position: 'absolute',
							width: '95%',
							height: '90%',
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							backdropFilter: 'blur(8px)',
							top: '5%',
							left: '2.5%',
							zIndex: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					></Box>

					<Box
						sx={{
							position: 'absolute',
							width: '88%',
							aspectRatio: '1212/632',
							top: '11%',
							left: '6%',
							zIndex: 1,
							padding: '20px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-around',
						}}
					>
						<Typography
							variant='body1'
							sx={{
								color: 'white',
								marginBottom: '5px',
								fontWeight: '300',
								fontFamily: 'Poppins, sans-serif',
								fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
							}}
						>
							Você acaba de receber um email com erros de gramática e um link suspeito. O
							que você faz com esse e-mail?
						</Typography>

						<RadioGroup
							value={selectedAnswer}
							onChange={e => setSelectedAnswer(e.target.value)}
						>
							<FormControlLabel
								value='1'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										variant='body1'
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Verifica o link passando o mouse e reporta ao TI.
									</Typography>
								}
							/>
							<FormControlLabel
								value='2'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Clica no link para verificar o conteúdo.
									</Typography>
								}
							/>
							<FormControlLabel
								value='3'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Responde ao e-mail pedindo mais informações.
									</Typography>
								}
							/>
						</RadioGroup>

						{isAnswered && (
							<Typography
								variant='body1'
								sx={{
									width: '100%',
									textAlign: 'center',
									color: 'white',
									fontWeight: '500',
									fontFamily: 'Poppins, sans-serif',
									marginTop: '5px',
									fontSize: { xs: '0.8rem', md: '0.8rem', lg: '0.8rem' },
								}}
							>
								{selectedAnswer === '1'
									? 'Correto!'
									: 'Não! Clicar em links ou responder emails suspeitos pode comprometer a segurança da empresa.'}
							</Typography>
						)}

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								gap: 2,
								marginTop: '10px',
							}}
						>
							<Button
								variant='contained'
								onClick={handleAnswer}
								disabled={isAnswered || !selectedAnswer}
								sx={{
									px: 3,
									py: 0.5,
									opacity: isAnswered || !selectedAnswer ? 0.5 : 1,
									border: '2px solid #AD61FF',
									background: 'transparent',
									borderRadius: '99px',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										transform: 'scale(1.1)',
										border: '2px solid #AD61FF',
										background: 'transparent',
										borderRadius: '99px',
									},
									'&:focus': {
										outline: 'none',
										border: '2px solid #AD61FF',
										borderRadius: '99px',
										background: 'transparent',
									},
								}}
							>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Tektur, sans-serif',
										color: 'white',
										textAlign: 'center',
										fontSize: { xs: '0.5rem', md: '0.8rem', lg: '0.75rem' },
										fontWeight: 'bold',
									}}
								>
									Responder
								</Typography>
							</Button>
							<Button
								variant='contained'
								onClick={handleContinue3}
								disabled={!isAnswered}
								sx={{
									px: 3,
									py: 0.5,
									opacity: !isAnswered ? 0.5 : 1,
									border: '2px solid #AD61FF',
									background: 'transparent',
									borderRadius: '99px',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										transform: 'scale(1.1)',
										border: '2px solid #AD61FF',
										background: 'transparent',
										borderRadius: '99px',
									},
									'&:focus': {
										outline: 'none',
										border: '2px solid #AD61FF',
										borderRadius: '99px',
										background: 'transparent',
									},
								}}
							>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Tektur, sans-serif',
										color: 'white',
										textAlign: 'center',
										fontSize: { xs: '0.5rem', md: '0.8rem', lg: '0.75rem' },
										fontWeight: 'bold',
									}}
								>
									Continuar
								</Typography>
							</Button>
						</Box>
					</Box>
				</Box>
			)}
			{index == 8 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g5})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						onClick={() => setIndex(9)}
						className='ping-animation'
						sx={{
							cursor: 'pointer',
							position: 'absolute',
							width: '10%',
							top: '5%',
							left: '22%',
						}}
					>
						<img src={pin} style={{ width: '100%' }} />
					</Box>
				</Box>
			)}
			{index == 9 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g5})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							width: '95%',
							top: '8%',
							left: '2.5%',
							zIndex: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						<img src={formgame} style={{ width: '100%', backdropFilter: 'blur(8px)' }} />
					</Box>

					<Box
						sx={{
							position: 'absolute',
							width: '95%',
							height: '90%',
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							backdropFilter: 'blur(8px)',
							top: '5%',
							left: '2.5%',
							zIndex: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					></Box>

					<Box
						sx={{
							position: 'absolute',
							width: '88%',
							aspectRatio: '1212/632',
							top: '11%',
							left: '6%',
							zIndex: 1,
							padding: '20px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-around',
						}}
					>
						<Typography
							variant='body1'
							sx={{
								color: 'white',
								marginBottom: '5px',
								fontWeight: '300',
								fontFamily: 'Poppins, sans-serif',
								fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
							}}
						>
							Você avista um desconhecido sem identificação, ele é um visitante e diz que
							esqueceu o crachá. O que você faz?
						</Typography>

						<RadioGroup
							value={selectedAnswer}
							onChange={e => setSelectedAnswer(e.target.value)}
						>
							<FormControlLabel
								value='1'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										variant='body1'
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Permite a entrada confiando no argumento.
									</Typography>
								}
							/>
							<FormControlLabel
								value='2'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Solicita que ele se registre na recepção.
									</Typography>
								}
							/>
							<FormControlLabel
								value='3'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Ignora e finge que não viu.
									</Typography>
								}
							/>
						</RadioGroup>

						{isAnswered && (
							<Typography
								variant='body1'
								sx={{
									width: '100%',
									textAlign: 'center',
									color: 'white',
									fontWeight: '500',
									fontFamily: 'Poppins, sans-serif',
									marginTop: '5px',
									fontSize: { xs: '0.8rem', md: '0.8rem', lg: '0.8rem' },
								}}
							>
								{selectedAnswer === '2'
									? 'Correto!'
									: 'Errado! Lembre-se: confiança cega pode facilitar acessos indevidos.'}
							</Typography>
						)}

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								gap: 2,
								marginTop: '10px',
							}}
						>
							<Button
								variant='contained'
								onClick={handleAnswer}
								disabled={isAnswered || !selectedAnswer}
								sx={{
									px: 3,
									py: 0.5,
									opacity: isAnswered || !selectedAnswer ? 0.5 : 1,
									border: '2px solid #AD61FF',
									background: 'transparent',
									borderRadius: '99px',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										transform: 'scale(1.1)',
										border: '2px solid #AD61FF',
										background: 'transparent',
										borderRadius: '99px',
									},
									'&:focus': {
										outline: 'none',
										border: '2px solid #AD61FF',
										borderRadius: '99px',
										background: 'transparent',
									},
								}}
							>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Tektur, sans-serif',
										color: 'white',
										textAlign: 'center',
										fontSize: { xs: '0.5rem', md: '0.8rem', lg: '0.75rem' },
										fontWeight: 'bold',
									}}
								>
									Responder
								</Typography>
							</Button>
							<Button
								variant='contained'
								onClick={handleContinue4}
								disabled={!isAnswered}
								sx={{
									px: 3,
									py: 0.5,
									opacity: !isAnswered ? 0.5 : 1,
									border: '2px solid #AD61FF',
									background: 'transparent',
									borderRadius: '99px',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										transform: 'scale(1.1)',
										border: '2px solid #AD61FF',
										background: 'transparent',
										borderRadius: '99px',
									},
									'&:focus': {
										outline: 'none',
										border: '2px solid #AD61FF',
										borderRadius: '99px',
										background: 'transparent',
									},
								}}
							>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Tektur, sans-serif',
										color: 'white',
										textAlign: 'center',
										fontSize: { xs: '0.5rem', md: '0.8rem', lg: '0.75rem' },
										fontWeight: 'bold',
									}}
								>
									Continuar
								</Typography>
							</Button>
						</Box>
					</Box>
				</Box>
			)}
			{index == 10 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g6})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						onClick={() => setIndex(11)}
						className='ping-animation'
						sx={{
							cursor: 'pointer',
							position: 'absolute',
							width: '10%',
							top: '20%',
							left: '3%',
						}}
					>
						<img src={pin} style={{ width: '100%' }} />
					</Box>
				</Box>
			)}
			{index == 11 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g6})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							width: '95%',
							top: '8%',
							left: '2.5%',
							zIndex: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						<img src={formgame} style={{ width: '100%', backdropFilter: 'blur(8px)' }} />
					</Box>

					<Box
						sx={{
							position: 'absolute',
							width: '95%',
							height: '90%',
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							backdropFilter: 'blur(8px)',
							top: '5%',
							left: '2.5%',
							zIndex: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					></Box>

					<Box
						sx={{
							position: 'absolute',
							width: '88%',
							aspectRatio: '1212/632',
							top: '11%',
							left: '6%',
							zIndex: 1,
							padding: '20px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-around',
						}}
					>
						<Typography
							variant='body1'
							sx={{
								color: 'white',
								marginBottom: '5px',
								fontWeight: '300',
								fontFamily: 'Poppins, sans-serif',
								fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
							}}
						>
							Você encontra relatórios confidenciais deixados sobre a mesa após uma reunião.
							O que fazer?
						</Typography>

						<RadioGroup
							value={selectedAnswer}
							onChange={e => setSelectedAnswer(e.target.value)}
						>
							<FormControlLabel
								value='1'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										variant='body1'
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Descartar os papéis no lixo comum
									</Typography>
								}
							/>
							<FormControlLabel
								value='2'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Entregar os documentos ao responsável pela sala de reuniões.
									</Typography>
								}
							/>
							<FormControlLabel
								value='3'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Triturar os documentos imediatamente.
									</Typography>
								}
							/>
						</RadioGroup>

						{isAnswered && (
							<Typography
								variant='body1'
								sx={{
									width: '100%',
									textAlign: 'center',
									color: 'white',
									fontWeight: '500',
									fontFamily: 'Poppins, sans-serif',
									marginTop: '5px',
									fontSize: { xs: '0.8rem', md: '0.8rem', lg: '0.8rem' },
								}}
							>
								{selectedAnswer === '3'
									? 'Correto!'
									: 'Cuidado! Deixar papéis em locais inseguros pode levar ao vazamento de informações.'}
							</Typography>
						)}

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								gap: 2,
								marginTop: '10px',
							}}
						>
							<Button
								variant='contained'
								onClick={handleAnswer}
								disabled={isAnswered || !selectedAnswer}
								sx={{
									px: 3,
									py: 0.5,
									opacity: isAnswered || !selectedAnswer ? 0.5 : 1,
									border: '2px solid #AD61FF',
									background: 'transparent',
									borderRadius: '99px',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										transform: 'scale(1.1)',
										border: '2px solid #AD61FF',
										background: 'transparent',
										borderRadius: '99px',
									},
									'&:focus': {
										outline: 'none',
										border: '2px solid #AD61FF',
										borderRadius: '99px',
										background: 'transparent',
									},
								}}
							>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Tektur, sans-serif',
										color: 'white',
										textAlign: 'center',
										fontSize: { xs: '0.5rem', md: '0.8rem', lg: '0.75rem' },
										fontWeight: 'bold',
									}}
								>
									Responder
								</Typography>
							</Button>
							<Button
								variant='contained'
								onClick={handleContinue5}
								disabled={!isAnswered}
								sx={{
									px: 3,
									py: 0.5,
									opacity: !isAnswered ? 0.5 : 1,
									border: '2px solid #AD61FF',
									background: 'transparent',
									borderRadius: '99px',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										transform: 'scale(1.1)',
										border: '2px solid #AD61FF',
										background: 'transparent',
										borderRadius: '99px',
									},
									'&:focus': {
										outline: 'none',
										border: '2px solid #AD61FF',
										borderRadius: '99px',
										background: 'transparent',
									},
								}}
							>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Tektur, sans-serif',
										color: 'white',
										textAlign: 'center',
										fontSize: { xs: '0.5rem', md: '0.8rem', lg: '0.75rem' },
										fontWeight: 'bold',
									}}
								>
									Continuar
								</Typography>
							</Button>
						</Box>
					</Box>
				</Box>
			)}
			{index == 12 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g7})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						onClick={() => setIndex(13)}
						className='ping-animation'
						sx={{
							cursor: 'pointer',
							position: 'absolute',
							width: '10%',
							top: '28%',
							left: '10%',
						}}
					>
						<img src={pin} style={{ width: '100%' }} />
					</Box>
				</Box>
			)}
			{index == 13 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g7})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							width: '95%',
							top: '8%',
							left: '2.5%',
							zIndex: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						<img src={formgame} style={{ width: '100%', backdropFilter: 'blur(8px)' }} />
					</Box>

					<Box
						sx={{
							position: 'absolute',
							width: '95%',
							height: '90%',
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							backdropFilter: 'blur(8px)',
							top: '5%',
							left: '2.5%',
							zIndex: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					></Box>

					<Box
						sx={{
							position: 'absolute',
							width: '88%',
							aspectRatio: '1212/632',
							top: '11%',
							left: '6%',
							zIndex: 1,
							padding: '20px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-around',
						}}
					>
						<Typography
							variant='body1'
							sx={{
								color: 'white',
								marginBottom: '5px',
								fontWeight: '300',
								fontFamily: 'Poppins, sans-serif',
								fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
							}}
						>
							Você percebe que há senhas anotadas em um post-it colado na parede.Como agir
							ao identificar uma prática insegura de gestão de acessos?
						</Typography>

						<RadioGroup
							value={selectedAnswer}
							onChange={e => setSelectedAnswer(e.target.value)}
						>
							<FormControlLabel
								value='1'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										variant='body1'
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Ignorar, pois não é sua responsabilidade.
									</Typography>
								}
							/>
							<FormControlLabel
								value='2'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Informar o responsável para remover o post-it e criar uma
										senha forte.
									</Typography>
								}
							/>
							<FormControlLabel
								value='3'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Fotografar e mostrar para outros colegas como exemplo
										negativo.
									</Typography>
								}
							/>
						</RadioGroup>

						{isAnswered && (
							<Typography
								variant='body1'
								sx={{
									width: '100%',
									textAlign: 'center',
									color: 'white',
									fontWeight: '500',
									fontFamily: 'Poppins, sans-serif',
									marginTop: '5px',
									fontSize: { xs: '0.8rem', md: '0.8rem', lg: '0.8rem' },
								}}
							>
								{selectedAnswer === '2'
									? 'Correto!'
									: 'Errado! Ignorar ou expor o erro para outros pode comprometer ainda mais a segurança.'}
							</Typography>
						)}

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								gap: 2,
								marginTop: '10px',
							}}
						>
							<Button
								variant='contained'
								onClick={handleAnswer}
								disabled={isAnswered || !selectedAnswer}
								sx={{
									px: 3,
									py: 0.5,
									opacity: isAnswered || !selectedAnswer ? 0.5 : 1,
									border: '2px solid #AD61FF',
									background: 'transparent',
									borderRadius: '99px',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										transform: 'scale(1.1)',
										border: '2px solid #AD61FF',
										background: 'transparent',
										borderRadius: '99px',
									},
									'&:focus': {
										outline: 'none',
										border: '2px solid #AD61FF',
										borderRadius: '99px',
										background: 'transparent',
									},
								}}
							>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Tektur, sans-serif',
										color: 'white',
										textAlign: 'center',
										fontSize: { xs: '0.5rem', md: '0.8rem', lg: '0.75rem' },
										fontWeight: 'bold',
									}}
								>
									Responder
								</Typography>
							</Button>
							<Button
								variant='contained'
								onClick={handleContinue6}
								disabled={!isAnswered}
								sx={{
									px: 3,
									py: 0.5,
									opacity: !isAnswered ? 0.5 : 1,
									border: '2px solid #AD61FF',
									background: 'transparent',
									borderRadius: '99px',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										transform: 'scale(1.1)',
										border: '2px solid #AD61FF',
										background: 'transparent',
										borderRadius: '99px',
									},
									'&:focus': {
										outline: 'none',
										border: '2px solid #AD61FF',
										borderRadius: '99px',
										background: 'transparent',
									},
								}}
							>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Tektur, sans-serif',
										color: 'white',
										textAlign: 'center',
										fontSize: { xs: '0.5rem', md: '0.8rem', lg: '0.75rem' },
										fontWeight: 'bold',
									}}
								>
									Continuar
								</Typography>
							</Button>
						</Box>
					</Box>
				</Box>
			)}
			{index == 14 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g8})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						onClick={() => setIndex(15)}
						className='ping-animation'
						sx={{
							cursor: 'pointer',
							position: 'absolute',
							width: '10%',
							bottom: '43%',
							right: '18%',
						}}
					>
						<img src={pin} style={{ width: '100%' }} />
					</Box>
				</Box>
			)}
			{index == 15 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g8})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							width: '95%',
							top: '8%',
							left: '2.5%',
							zIndex: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						<img src={formgame} style={{ width: '100%', backdropFilter: 'blur(8px)' }} />
					</Box>

					<Box
						sx={{
							position: 'absolute',
							width: '95%',
							height: '90%',
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							backdropFilter: 'blur(8px)',
							top: '5%',
							left: '2.5%',
							zIndex: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					></Box>

					<Box
						sx={{
							position: 'absolute',
							width: '88%',
							aspectRatio: '1212/632',
							top: '11%',
							left: '6%',
							zIndex: 1,
							padding: '20px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-around',
						}}
					>
						<Typography
							variant='body1'
							sx={{
								color: 'white',
								marginBottom: '5px',
								fontWeight: '300',
								fontFamily: 'Poppins, sans-serif',
								fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
							}}
						>
							Você percebe que um colega deixou o computador ligado ao sair para o fim do
							expediente. O que fazer para evitar acessos não autorizados quando alguém
							esquece de encerrar o trabalho?
						</Typography>

						<RadioGroup
							value={selectedAnswer}
							onChange={e => setSelectedAnswer(e.target.value)}
						>
							<FormControlLabel
								value='1'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										variant='body1'
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Desligar o computador por conta própria.
									</Typography>
								}
							/>
							<FormControlLabel
								value='2'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Ignorar, pois não é responsabilidade sua.
									</Typography>
								}
							/>
							<FormControlLabel
								value='3'
								control={
									<Radio
										size='0.3rem'
										sx={{ color: 'white', paddingTop: '0.1rem' }}
									/>
								}
								label={
									<Typography
										sx={{
											color: 'white',
											fontWeight: '300',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
										}}
									>
										Avisar o colega e pedir para ele encerrar a sessão
										remotamente.
									</Typography>
								}
							/>
						</RadioGroup>

						{isAnswered && (
							<Typography
								variant='body1'
								sx={{
									width: '100%',
									textAlign: 'center',
									color: 'white',
									fontWeight: '500',
									fontFamily: 'Poppins, sans-serif',
									marginTop: '5px',
									fontSize: { xs: '0.8rem', md: '0.8rem', lg: '0.8rem' },
								}}
							>
								{selectedAnswer === '3'
									? 'Correto!'
									: 'Atenção! Ignorar pode expor informações sensíveis ao risco.'}
							</Typography>
						)}

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								gap: 2,
								marginTop: '10px',
							}}
						>
							<Button
								variant='contained'
								onClick={handleAnswer}
								disabled={isAnswered || !selectedAnswer}
								sx={{
									px: 3,
									py: 0.5,
									opacity: isAnswered || !selectedAnswer ? 0.5 : 1,
									border: '2px solid #AD61FF',
									background: 'transparent',
									borderRadius: '99px',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										transform: 'scale(1.1)',
										border: '2px solid #AD61FF',
										background: 'transparent',
										borderRadius: '99px',
									},
									'&:focus': {
										outline: 'none',
										border: '2px solid #AD61FF',
										borderRadius: '99px',
										background: 'transparent',
									},
								}}
							>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Tektur, sans-serif',
										color: 'white',
										textAlign: 'center',
										fontSize: { xs: '0.5rem', md: '0.8rem', lg: '0.75rem' },
										fontWeight: 'bold',
									}}
								>
									Responder
								</Typography>
							</Button>
							<Button
								variant='contained'
								onClick={handleContinue7}
								disabled={!isAnswered}
								sx={{
									px: 3,
									py: 0.5,
									opacity: !isAnswered ? 0.5 : 1,
									border: '2px solid #AD61FF',
									background: 'transparent',
									borderRadius: '99px',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										transform: 'scale(1.1)',
										border: '2px solid #AD61FF',
										background: 'transparent',
										borderRadius: '99px',
									},
									'&:focus': {
										outline: 'none',
										border: '2px solid #AD61FF',
										borderRadius: '99px',
										background: 'transparent',
									},
								}}
							>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Tektur, sans-serif',
										color: 'white',
										textAlign: 'center',
										fontSize: { xs: '0.5rem', md: '0.8rem', lg: '0.75rem' },
										fontWeight: 'bold',
									}}
								>
									Continuar
								</Typography>
							</Button>
						</Box>
					</Box>
				</Box>
			)}
			{index == 16 && (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${g9})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							width: '95%',
							top: '8%',
							left: '2.5%',
							zIndex: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						<img src={formgame} style={{ width: '100%', backdropFilter: 'blur(8px)' }} />
					</Box>

					<Box
						sx={{
							position: 'absolute',
							width: '95%',
							height: '90%',
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							backdropFilter: 'blur(8px)',
							top: '5%',
							left: '2.5%',
							zIndex: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					></Box>
					<Box
						sx={{
							position: 'absolute',
							width: '88%',
							aspectRatio: '1212/632',
							top: '11%',
							left: '6%',
							zIndex: 1,
							padding: '20px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-around',
						}}
					>
						<Typography
							variant='h6'
							sx={{
								color: 'white',
								fontWeight: '600',
								textAlign: 'center',
								lineHeight: '1.2',
								px: '10%',
								fontFamily: 'Tektur, sans-serif',
							}}
						>
							Parabéns! Você Concluiu o GAME de Segurança da Informação no Ambiente
							Corporativo
						</Typography>
						<Typography
							variant='body1'
							sx={{
								color: 'white',
								fontWeight: '300',
								fontFamily: 'Poppins, sans-serif',
								textAlign: 'justify',
								fontSize: { xs: '0.8rem', md: '1rem', lg: '1rem' },
							}}
						>
							Você enfrentou situações desafiadoras no ambiente corporativo e aprendeu
							práticas essenciais para proteger dados e informações. Com suas escolhas, você
							demonstrou como aplicar boas práticas de segurança no dia a dia, garantindo a
							proteção dos ativos da empresa contra ameaças cibernéticas. Lembre-se: a
							segurança da informação depende de todos nós! Continue praticando e sendo um
							exemplo de responsabilidade no ambiente corporativo.
						</Typography>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								gap: 2,
								marginTop: '10px',
							}}
						>
							<Button
								variant='contained'
								onClick={handleRestart}
								sx={{
									px: 3,
									py: 0.5, 
									border: '2px solid #AD61FF',
									background: 'transparent',
									borderRadius: '99px',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										transform: 'scale(1.1)',
										border: '2px solid #AD61FF',
										background: 'transparent',
										borderRadius: '99px',
									},
									'&:focus': {
										outline: 'none',
										border: '2px solid #AD61FF',
										borderRadius: '99px',
										background: 'transparent',
									},
								}}
							>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Tektur, sans-serif',
										color: 'white',
										textAlign: 'center',
										fontSize: { xs: '0.5rem', md: '0.8rem', lg: '0.75rem' },
										fontWeight: 'bold',
									}}
								>
									Revisitar Conceitos
								</Typography>
							</Button>
							<Button
								variant='contained'
								onClick={handleFinalize}
								sx={{
									px: 3,
									py: 0.5, 
									border: '2px solid #AD61FF',
									background: 'transparent',
									borderRadius: '99px',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										transform: 'scale(1.1)',
										border: '2px solid #AD61FF',
										background: 'transparent',
										borderRadius: '99px',
									},
									'&:focus': {
										outline: 'none',
										border: '2px solid #AD61FF',
										borderRadius: '99px',
										background: 'transparent',
									},
								}}
							>
								<Typography
									variant='body1'
									sx={{
										fontFamily: 'Tektur, sans-serif',
										color: 'white',
										textAlign: 'center',
										fontSize: { xs: '0.5rem', md: '0.8rem', lg: '0.75rem' },
										fontWeight: 'bold',
									}}
								>
									Encerrar o Jogo
								</Typography>
							</Button>
						</Box>
					</Box>
				</Box>
			)}
		</Box>
	);
};

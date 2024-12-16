import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Botao } from '../../components/Botao';
import backgorund from '../../assets/img/Finalizacao.png';
import Title from '../../components/Texts/title';
import { Capa } from '../../assets/svg/Capa';
import Subtitle from '../../components/Texts/subtitle';
import { Game } from '../../components/Game/Game';

const Modulo04 = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [block1, setBlock1] = useState(false);
	const [block2, setBlock2] = useState(false);
	const [block3, setBlock3] = useState(false);
	const [block4, setBlock4] = useState(false);
	const [block5, setBlock5] = useState(false);

	const handleAnswerCallback = () => {
		setBlock2(true);
	};

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timeout);
	}, []);
	const handleUnlockBlock = index => {
		setBlock1(true);
	};
	const handleUnlockBlock1 = index => {
		setBlock2(true);
	};

	const handleUnlockBlock2 = index => {
		setBlock3(true);
	};

	const handleUnlockBlock3 = index => {
		setBlock4(true);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				background: '#030012',
				backgroundImage: `url(${backgorund})`,
				backgroundSize: '100vw',
				fontFamily: 'Poppins',
				backgroundRepeat: 'no-repeat',
				alignItems: 'center',
				width: '100vw',
				margin: 0,
				padding: 0,
				paddingRight: { xs: 1, md: 0 },
				color: '#fff',
				gap: 8,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%',
					height: '100vh',
					margin: 0,
					padding: 0,
					color: '#fff',
					gap: 20,
					transform: isVisible ? 'scale(1)' : 'scale(0.5)',
					opacity: isVisible ? 1 : 0,
					transition: 'all 700ms ease-in-out',
				}}
			>
				<Box
					sx={{
						alignItems: 'center',
						width: '100%',
						gap: 2,
						margin: '0 auto',
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
					}}
				>
					<Title text='Ambiente Corporativo' />
					<Typography
						variant='body1'
						color='secondary'
						align='center'
						maxWidth='50rem'
						sx={{ fontFamily: 'Poppins', color: '#fff' }}
					>
						Entenda como funciona a segurança no ambiente de trabalho
					</Typography>
					<Capa />
				</Box>
				<Botao.Primary text='Iniciar Etapa' onClick={handleUnlockBlock} />
			</Box>

			{block1 && (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'top',
						flexDirection: 'column',
						alignItems: 'center',
						width: { xs: '80%', lg: '60%', xl: '45%' },
						marginBottom: '5rem',
						py: 5,
						padding: 0,
						color: '#fff',
						gap: { xs: 5, md: 8, xl: 10 },
					}}
				> 
					<Subtitle text='GAME' />
					<Typography
						variant='body1'
						color='secondary'
						align='justify'
						maxWidth='50rem'
						sx={{
							fontFamily: 'Poppins',
							color: '#fff',
							fontWeight: '300',
							fontSize: { xs: '0.8rem', md: '0.8rem', lg: '0.85rem', xl: '0.9rem' },
						}}
					>
						Bem-vindo ao jogo de Segurança da Informação no Ambiente Corporativo! Você enfrentará situações reais do dia a dia, tomando decisões importantes para proteger os dados da empresa. Explore o cenário, interaja com objetos e personagens, e faça escolhas inteligentes para avançar no jogo. Caso erre, receberá um feedback que ajudará a corrigir seu caminho. O objetivo é aprender na prática como aplicar boas práticas de segurança e se tornar um aliado na proteção da informação corporativa! Clique em iniciar para começar o jogo:
					</Typography>
					<Game/>
					<Botao.Navigation text='Avaliação Final' page={'Modulo05'} />
				</Box>
			)}
		</Box>
	);
};

export default Modulo04;

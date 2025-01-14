import { useState, useEffect, useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Botao } from '../../components/Botao';
import backgorund from '../../assets/img/Finalizacao.png';
import Title from '../../components/Texts/title';
import { Capa } from '../../assets/svg/Capa';
import Subtitle from '../../components/Texts/subtitle';
import { Game } from '../../components/Game/Game';
import { HomeRounded } from '@mui/icons-material';
import { useNavigation } from '../../hooks/NavigationContext';
import { changeProgress } from '../../services/userService';
import { LoggedUser } from '../../services/authService';

const Modulo04 = () => {
	const [isVisible, setIsVisible] = useState(false);
	const { navigateTo } = useNavigation();
	const [block1, setBlock1] = useState(false);

	const block1Ref = useRef(null);

	const [interactics, setInteractics] = useState([]);

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timeout);
	}, []);
	const handleUnlockBlock = index => {
		setBlock1(true);
		changeProgress(19);
	};
	const handleUnlockBlockGame = index => {
		addInteractics('game');
		changeProgress(20);
	};
	const hasAllProgress = interactions => {
		var response = true;
		console.log(interactions);
		console.log(interactics);
		for (let i = 0; i < interactions.length; i++) {
			const e = interactions[i];
			if (!interactics.includes(e)) {
				response = false;
			}
		}
		console.log(response);

		return !response;
	};

	const scrollToBlock = blockRef => {
		if (blockRef?.current) {
			// Adiciona um pequeno atraso para garantir que o DOM está renderizado
			setTimeout(() => {
				blockRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}, 50);
		} else {
			console.error('Bloco não encontrado ou ref inválida:', blockRef);
		}
	};

	const addInteractics = item => {
		if (!interactics.some(i => i === item)) {
			setInteractics([...interactics, item]); // Adiciona o novo item ao array
		}
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
			<IconButton
				onClick={() => {
					navigateTo('Menu');
				}}
				sx={{
					borderRadius: '50%',
					backgroundColor: '#14F194',
					color: 'white',
					padding: '10px',
					position: 'fixed',
					top: '20px',
					right: '15px',
					cursor: 'pointer',
					zIndex: 9999,
					transition: 'all 200ms ease-in-out',

					'&:hover': {
						backgroundColor: '#14F194',
					},
				}}
			>
				<HomeRounded />
			</IconButton>
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
						Bem-vindo ao jogo de Segurança da Informação no Ambiente Corporativo! Você
						enfrentará situações reais do dia a dia, tomando decisões importantes para proteger
						os dados da empresa. Explore o cenário, interaja com objetos e personagens, e faça
						escolhas inteligentes para avançar no jogo. Caso erre, receberá um feedback que
						ajudará a corrigir seu caminho. O objetivo é aprender na prática como aplicar boas
						práticas de segurança e se tornar um aliado na proteção da informação corporativa!
						Clique em iniciar para começar o jogo:
					</Typography>
					<Game Completed={e => handleUnlockBlockGame()} />
					<Botao.Navigation
						text='Avaliação Final'
						page={'Modulo05'}
						disable={hasAllProgress(['game']) && LoggedUser.get().progress < 20}
					/>
				</Box>
			)}
		</Box>
	);
};

export default Modulo04;

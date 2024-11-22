import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Botao } from '../../components/Botao';
import backgorund from '../../assets/img/Finalizacao.png';
import Title from '../../components/Texts/title';
import Subtitle from '../../components/Texts/subtitle';

const Modulo01 = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [block1, setBlock1] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timeout);
	}, []);

	const handleUnlockBlock = () => {
		setBlock1(true);
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
				backgroundRepeat: 'no-repeat',
				alignItems: 'center',
				width: '100vw',
				margin: 0,
				padding: 0,
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
						gap: 3,
						margin: '0 auto',
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
					}}
				>
					<Title text='O que é Segurança da Informação?' />
					<Typography variant='body1' color='secondary' align='center' maxWidth='50rem'>
						Vamos aprender os pilares da segurança da informação
					</Typography>
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
						width: '100%',
						py: 5,
						margin: 0,
						padding: 0,
						color: '#fff',
						gap: 20,
					}}
				>
					<Subtitle text='O que é Segurança da Informação?' />
				</Box>
			)}
		</Box>
	);
};

export default Modulo01;

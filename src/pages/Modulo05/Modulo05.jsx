import { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Botao } from '../../components/Botao';
import backgorund from '../../assets/img/Finalizacao.png';
import Title from '../../components/Texts/title';
import { Capa } from '../../assets/svg/Capa';
import ExamComponent from '../../components/ExamComponent/ExamComponent';
import { HomeRounded } from '@mui/icons-material';

const Modulo05 = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [block1, setBlock1] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timeout);
	}, []);
	const handleUnlockBlock = index => {
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
							onClick={() => {}}
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
					<Title text='Avaliação Final' />
					<Typography
						variant='body1'
						color='secondary'
						align='center'
						maxWidth='50rem'
						sx={{ fontFamily: 'Poppins', color: '#fff' }}
					>
						Vamos botar em pratica o que aprendemos!
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
					<Typography
						variant='body1'
						color='secondary'
						align='center'
						maxWidth='50rem'
						sx={{
							fontFamily: 'Poppins',
							color: '#fff', 
							fontWeight: '300',
							fontSize: { xs: '0.8rem', md: '0.8rem', lg: '0.85rem', xl: '0.9rem' },
						}}
					>
						<b>Responda as perguntas da avaliação final</b> para desbloquear o certificado do curso!
						Lembre-se de que é necessário alcançar uma nota mínima de 7 para obter o
						certificado. Caso não alcance a nota mínima, você poderá refazer a prova. Boa sorte!
					</Typography>
					<ExamComponent/>
					<Botao.Navigation text='Baixar Certificado' page={'Modulo05'} />
				</Box>
			)}
		</Box>
	);
};

export default Modulo05;

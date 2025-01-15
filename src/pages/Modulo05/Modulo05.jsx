import { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Botao } from '../../components/Botao';
import backgorund from '../../assets/img/Finalizacao.png';
import Title from '../../components/Texts/title';
import { Capa } from '../../assets/svg/Capa';
import ExamComponent from '../../components/ExamComponent/ExamComponent';
import { HomeRounded } from '@mui/icons-material';
import { useNavigation } from '../../hooks/NavigationContext';
import { changeProgress } from '../../services/userService';
import { LoggedUser } from '../../services/authService';
import { jsPDF } from 'jspdf';
import certificado from '../../assets/img/certificado.png';

const Modulo05 = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [block1, setBlock1] = useState(false);
	const [dowload, setDowload] = useState(false);
	const [blockFinal, setBlockFinal] = useState(false);
	const { navigateTo } = useNavigation();
	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timeout);
	}, []);
	const handleUnlockBlock = index => {
		setBlock1(true);
	};
	const handleUnlockBlockFinal = index => {
		setBlockFinal(true);
	};

	const finalize = async name => {
		setDowload(true);
		await generatePDF(name);
		await changeProgress(21);
	};

	const generatePDF = async studentName => {
		try {
			const widthMm = 1804 / 3.78;
			const heightMm = 1005 / 3.78;

			const doc = new jsPDF({
				orientation: 'l',
				unit: 'mm',
				format: [widthMm, heightMm],
			});

			const response = await fetch(certificado);
			if (!response.ok) throw new Error('Erro ao carregar a imagem.');

			const blob = await response.blob();

			const backgroundImage = await new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onloadend = () => resolve(reader.result);
				reader.onerror = () => reject(new Error('Erro ao ler a imagem.'));
				reader.readAsDataURL(blob);
			});

			doc.addImage(backgroundImage, 'PNG', 0, 0, widthMm, heightMm);

			doc.setTextColor('#00CDBB');
			doc.setFontSize(60);

			// Calculando nova posição
			const originalX = 114 / 3.78;
			const originalY = 525 / 3.78;

			const adjustedX = originalX + widthMm * 0.04; 
			const adjustedY = originalY + heightMm * 0.06; 

			// Inserindo o nome do aluno
			doc.text(studentName, adjustedX, adjustedY);

			doc.save('certificado.pdf');
			setDowload(false);
		} catch (error) {
			console.error('Erro ao gerar o PDF:', error.message);
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
						<b>Responda as perguntas da avaliação final</b> para desbloquear o certificado do
						curso! Lembre-se de que é necessário alcançar uma nota mínima de 7 para obter o
						certificado. Caso não alcance a nota mínima, você poderá refazer a prova. Boa sorte!
					</Typography>
					<ExamComponent onComplete={handleUnlockBlockFinal} />
					{blockFinal ||
						(LoggedUser.get().progress == 21 && (
							<Botao.Navigation
								text={dowload ? 'Baixando...' : 'Baixar Certificado'}
								page={'Modulo05'}
								callback={() => finalize('Mavi')}
							/>
						))}
				</Box>
			)}
		</Box>
	);
};

export default Modulo05;

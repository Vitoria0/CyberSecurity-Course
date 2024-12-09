import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Botao } from '../../components/Botao';
import Title from '../../components/Texts/title';
import backgorund from '../../assets/img/Finalizacao.png';
import Subtitle from '../../components/Texts/subtitle';
import { CardExpanded } from '../../components/Cards/CardExpanded';
import { Slider } from '../../components/Slider/slider';

const Modulo02 = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [block1, setBlock1] = useState(false);
	const [block2, setBlock2] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timeout);
	}, []);

	const handleUnlockBlock = () => {
		setBlock1(true);
	};
	const SlideIsEnded = () => {
		setBlock2(true);
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
					<Title text='Principais Ameaças e Vulnerabilidades' />
					<Typography variant='body1' color='secondary' align='center' maxWidth='50rem'>
						Você sabe Identificar as ameaças mais comuns e como elas afetam a segurança da
						informação? Vamos descobrir
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
						maxWidth: { xs: '20rem', md: '60rem' },
						marginBottom: block2 ? '0' : '5rem',
						py: 5,
						padding: 0,
						color: '#fff',
						gap: 5,
					}}
				>
					<Subtitle text='Quais são os tipos de ameaças virtuais' />
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Poppins, sans-serif',
							color: '#FFF',
							fontWeight: '200',
							textAlign: 'center',
						}}
					>
						Diversos tipos de ameaças virtuais são abordados pela cibersegurança, clique nos
						cards para saber um pouco mais:
					</Typography>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: { xs: 'column', md: 'row' },
							gap: 3,
							width: '100%',
							margin: '0 auto',
						}}
					>
						<CardExpanded
							title={'Crime digital'}
							text={
								'Envolve pessoas ou grupos que buscam sistemas para lucro financeiro ou para causar interrupções'
							}
						/>
						<CardExpanded
							title={'Terrorismo cibernético'}
							text={
								'Visa sabotar sistemas eletrônicos com o foco em provocar pânico ou medo'
							}
						/>
						<CardExpanded
							title={'Ataques cibernéticos'}
							text={'Ameaças que visam coletar informações com motivações políticas'}
						/>
					</Box>
					<Subtitle text='Métodos e estratégias de ameaças virtuais' />
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Poppins, sans-serif',
							color: '#FFF',
							fontWeight: '200',
							textAlign: 'center',
						}}
					>
						A <strong> engenharia social</strong> é uma técnica usada por cibercriminosos para
						enganar e manipular pessoas, a fim de acessar informações sensíveis, como senhas,
						dados financeiros ou até mesmo infraestruturas críticas. Esses ataques exploram a
						confiança, a curiosidade e, muitas vezes, a falta de atenção do alvo. Conheça os 5
						pilares da engenharia social:
					</Typography>
					<Slider isEnded={SlideIsEnded} />
				</Box>
			)}
			{block2 && (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'top',
						flexDirection: 'column',
						alignItems: 'center',
						width: '100%',
						maxWidth: { xs: '20rem', md: '60rem' },
						// marginBottom: block2 ? '0' : '5rem',
						py: 5,
						padding: 0,
						color: '#fff',
						gap: 5,
					}}
				>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Poppins, sans-serif',
							color: '#FFF',
							fontWeight: '200',
							textAlign: { xs: 'justify', md: 'center' },
							width: { xs: '100%', md: '50%' },
							mt: 5,
						}}
					>
						<strong>
							Assista ao video para entender melhor como funciona por dentro de um ataque de
							phishing
						</strong>
					</Typography>
				</Box>
			)}
		</Box>
	);
};

export default Modulo02;

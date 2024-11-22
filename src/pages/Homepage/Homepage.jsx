import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Botao } from '../../components/Botao';
import backgorund from '../../assets/img/Finalizacao.png';
import Title from '../../components/Texts/title';

const HomePage = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				backgroundImage: `url(${backgorund})`,
				backgroundSize: '100vw',
				backgroundRepeat: 'no-repeat',
				alignItems: 'center',
				width: '100%',
				height: '100%',
				margin: 0,
				padding: 0,
				color: '#fff',
				gap: 8,
			}}
		>
			<Box
				sx={{
					alignItems: 'center',
					width: '100%',
					gap: 8,
					margin: '0 auto',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					transition: 'all 700ms ease-in-out',
					transform: isVisible ? 'scale(1)' : 'scale(0.5)',
					opacity: isVisible ? 1 : 0,
				}}
			>
				<Title text='Segurança da Informação' />
				<Typography variant='p' color='secondary' align='center' maxWidth='50rem'>
					Vivemos em um mundo cada vez mais digital, onde a informação é um dos ativos mais valiosos
					de seja ela pessoal, profissional ou empresarial. Com o aumento da conectividade, crescem
					também as ameaças aos dados, como ataques cibernéticos, fraudes e vazamentos de
					informações. Por isso, entender os princípios de segurança da informação não é apenas
					importante, é essencial para proteger você, sua organização e até mesmo sua privacidade.
					<br />
					Neste curso, você aprenderá os conceitos fundamentais de segurança da informação, os
					principais riscos e vulnerabilidades, e como adotar boas práticas no dia a dia para
					minimizar ameaças. Por meio de vídeos interativos, atividades práticas e quizzes, o
					objetivo é tornar o aprendizado envolvente e aplicável.
				</Typography>
				<Botao.Navigation page='Modulo01' text='começar' />
			</Box>
		</Box>
	);
};

export default HomePage;

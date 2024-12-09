import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Botao } from '../../components/Botao';
import backgorund from '../../assets/img/Finalizacao.png';
import escudo from '../../assets/img/escudo.png';
import confidencialidade from '../../assets/img/confidencialidade.png';
import Disponibilidade from '../../assets/img/disponibilidade.png';
import Integridade from '../../assets/img/integridade.png';
import Title from '../../components/Texts/title';
import Subtitle from '../../components/Texts/subtitle';
import { CardIcon } from '../../components/Cards/CardIcon';
import QuizComponent from '../../components/Quiz/quiz';
import IframePlayer from '../../components/Iframe/Iframe';

const Modulo01 = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [blocks, setBlocks] = useState([false, false, false]); 

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timeout);
	}, []);
 const handleUnlockBlock = (index) => {
    setBlocks((prev) => prev.map((block, i) => (i === index ? true : block)));
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
					<Title text='Mundo Digital' />
					<Typography variant='body1' color='secondary' align='center' maxWidth='50rem'>
						Vamos embarcar nessa jornada e entender melhor como funciona tudo isso
					</Typography>
				</Box>
				<Botao.Primary text='Iniciar Etapa' onClick={handleUnlockBlock(1)} />
			</Box>

			{block1 && (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'top',
						flexDirection: 'column',
						alignItems: 'center',
						width: '100%',
						marginBottom: block2 ? '0' : '5rem',
						py: 5,
						padding: 0,
						color: '#fff',
						gap: 5,
					}}
				>
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
						<Box
							sx={{
								width: { xs: '15rem', md: '20rem' },
							}}
						>
							<img
								src={escudo}
								alt='Segurança da Informação'
								style={{
									width: '100%',
								}}
							/>
						</Box>
						<Typography
							variant='body1'
							sx={{
								fontFamily: 'Poppins, sans-serif',
								color: '#FFF',
								textAlign: { xs: 'justify', md: 'right' },
								width: { xs: '20rem', md: '35rem' },
								borderRight: '4px solid #FFF',
								fontWeight: '200',
								paddingRight: '2rem',
								display: 'flex',
								justifyContent: 'start',
								flexDirection: 'column',
								gap: 1,
								alignItems: 'end',
							}}
						>
							<Subtitle text='O que é Segurança da Informação?' />
							Segurança da Informação consiste em proteger os dados contra acessos não
							autorizados, alterações indevidas ou destruição. Ela é essencial em um mundo
							onde informações pessoais e corporativas são ativos valiosos.
						</Typography>
					</Box>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Poppins, sans-serif',
							color: '#FFF',
							fontWeight: '200',
							textAlign: { xs: 'justify', md: 'center' },
							width: { xs: '20rem', md: '50rem' },
						}}
					>
						A segurança da informação se baseia em <strong>três pilares principais:</strong>{' '}
						confidencialidade, integridade e disponibilidade. Estes sustentam as práticas e
						políticas de proteção de dados nas empresas, servindo como parâmetros para guiar os
						processos.
						<br></br>
						<br></br>
						<strong>Clique nos cards para saber mais sobre cada pilar:</strong>
					</Typography>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: { xs: 'column', md: 'row' },
							gap: 5,
							width: '100%',
							margin: '0 auto',
						}}
					>
						<CardIcon
							img={confidencialidade}
							title={'Confidencialidade'}
							text={
								'A confidencialidade está relacionada a privacidade dos dados. Seu objetivo é restringir o acesso às informações, garantindo que ela chegue apenas às pessoas autorizadas.'
							}
						/>
						<CardIcon
							img={Integridade}
							title={'Integridade'}
							text={
								'A integridade está associada a veracidade e confiabilidade da informação, garantindo à preservação dos dados. Ela deve garantir que as informações estejam livres de qualquer alteração sem autorização, se mantendo conforme foram criadas.'
							}
						/>
						<CardIcon
							img={Disponibilidade}
							title={'Disponibilidade'}
							text={
								'A disponibilidade tem o foco de garantir que dados e sistemas ficarão acessíveis sempre que necessário, podendo ser acessados por qualquer pessoa ou processo autorizado quando for preciso.'
							}
						/>
					</Box>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Poppins, sans-serif',
							color: '#FFF',
							fontWeight: '200',
							textAlign: { xs: 'justify', md: 'center' },
							width: { xs: '20rem', md: '50rem' },
							mt: 5,
						}}
					>
						<strong>Agora, responda o quiz abaixo para seguir com o conteúdo:</strong>
					</Typography>
					<QuizComponent
						question='Qual é o pilar da segurança da informação violado quando um sistema está fora do ar por um ataque de negação de serviço (DDoS)?'
						options={['Confidencialidade', 'Integridade', 'Disponibilidade']}
						correctAnswer='Confidencialidade'
						onAnswer={handleAnswerCallback}
					/>
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
						py: 5,
						marginBottom: '5rem',
						padding: 0,
						color: '#fff',
						gap: 5,
					}}
				>
					<Subtitle text='Por que a Segurança da Informação é Importante?' />
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'start',
							alignItems: 'start',
							flexDirection: { xs: 'column', md: 'row' },
							gap: 3,
							width: { xs: '20rem', md: '50rem' },
							margin: '0 auto',
						}}
					>
						<Typography
							variant='body1'
							sx={{
								fontFamily: 'Poppins, sans-serif',
								color: '#FFF',
								textAlign: 'justify',
								width: '100%',
								fontWeight: '200',
							}}
						>
							Vivemos na era dos dados. Toda ação digital que realizamos – desde o envio de
							e-mails até transações bancárias – gera dados valiosos. A proteção desses
							dados é essencial para evitar consequências como:
						</Typography>
						<Typography
							variant='body1'
							sx={{
								fontFamily: 'Poppins, sans-serif',
								color: '#FFF',
								textAlign: 'justify',
								width: '100%',
								fontWeight: '200',
							}}
						>
							&bull; Roubo de identidade. <br></br> &bull; Vazamento de informações
							corporativas.<br></br> &bull; Perdas financeiras.<br></br> &bull;
							Comprometimento da privacidade.
						</Typography>
					</Box>
					<Typography
						variant='h6'
						sx={{
							fontFamily: 'Poppins, sans-serif',
							color: '#FFF',
							textAlign: 'center',
							width: '100%',
						}}
					>
						<strong>Assista o video para entender melhor:</strong>
					</Typography>
					<Box sx={{ width: { xs: '20rem', md: '50rem' } }}>
						<IframePlayer
							videoUrl='https://cursosmavi.nyc3.cdn.digitaloceanspaces.com/SEGURAN%C3%87A%20DA%20INFORMA%C3%87%C3%83O%20(online-video-cutter.com).mp4'
							onVideoEnd={handleVideoEnded}
						/>
					</Box>
					<Box
						sx={{
							cursor: block3 ? 'pointer' : 'default',
							pointerEvents: block3 ? 'auto' : 'none',
							opacity: block3 ? 1 : 0.5,
						}}
					>
						<Botao.Navigation page='Modulo02' text='Próxima etapa' />
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default Modulo01;

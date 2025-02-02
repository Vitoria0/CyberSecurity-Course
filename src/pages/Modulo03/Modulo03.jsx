import { useState, useEffect, useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Botao } from '../../components/Botao';
import backgorund from '../../assets/img/Finalizacao.png';
import Title from '../../components/Texts/title';
import { Capa } from '../../assets/svg/Capa';
import { ImageText } from '../../components/Cards/ImageText';
import image1 from '../../assets/img/computador.png';
import image3 from '../../assets/img/redesfio.png';
import image2 from '../../assets/img/vpn.png';
import Subtitle from '../../components/Texts/subtitle';
import IframePlayer from '../../components/Iframe/Iframe';
import QuizComponent from '../../components/Quiz/quiz';
import CardFlip from '../../components/Cards/CardFlip';
import { HomeRounded } from '@mui/icons-material';
import { useNavigation } from '../../hooks/NavigationContext';
import { changeProgress } from '../../services/userService';
import { LoggedUser } from '../../services/authService';

const Modulo03 = () => {
	const [isVisible, setIsVisible] = useState(false);
	const { navigateTo } = useNavigation();
	const [block1, setBlock1] = useState(false);
	const [block2, setBlock2] = useState(false);

	const block1Ref = useRef(null);
	const block2Ref = useRef(null);

	const [interactics, setInteractics] = useState([]);
	const handleAnswerCallback = () => {
		setBlock2(true);
	};

	useEffect(() => {
		const user = LoggedUser.get();

		if (user && typeof user.progress === 'number') {
			const progress = user.progress;
			if (progress >= 16) {
				setBlock1(true);
				if (progress > 16) {
					setInteractics([
						...interactics,
						'video-1',
						'CardFlip-1',
						'CardFlip-2',
						'CardFlip-3',
						'CardFlip-4',
						'CardFlip-5',
						'CardFlip-6',
						'CardFlip-7',
					]);
				}
			}
			if (progress >= 17) {
				setBlock2(true);
				if (progress > 17) {
					setInteractics([
						...interactics,
						'CardFlip-8',
						'CardFlip-9',
						'CardFlip-10',
						'CardFlip-11',
						'CardFlip-12',
						'CardFlip-13',
						'CardFlip-14',
						'quiz',
					]);
				}
			}
		}
		const timeout = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timeout);
	}, []);

	const handleUnlockBlock = index => {
		changeProgress(16);
		setBlock1(true);
		scrollToBlock(block1Ref);
	};

	const handleUnlockBlock1 = index => {
		changeProgress(17);
		setBlock2(true);
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
					<Title text='Dispositivos Moveis e Redes sem Fio' />
					<Typography
						variant='body1'
						color='secondary'
						align='center'
						maxWidth='50rem'
						sx={{ fontFamily: 'Poppins', color: '#fff' }}
					>
						Garanta um ambiente mais seguro para usuários e empresas
					</Typography>
					<Capa />
				</Box>
				<Botao.Primary text='Iniciar Etapa' onClick={handleUnlockBlock} />
			</Box>
			<Box ref={block1Ref}></Box>
			{block1 && (
				<Box
					sx={{
						mt: 8,
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
					<ImageText
						image={image1}
						reverse={true}
						titulo='Dispositivos Móveis'
						texto='Os dispositivos móveis são ferramentas indispensáveis no cotidiano moderno, permitindo acesso à internet, comunicações e trabalho remoto de qualquer lugar. No entanto, essa conveniência também traz desafios significativos de segurança. A mobilidade aumenta o risco de perda de dispositivos, roubo de dados e exposição a ataques maliciosos. Navegue pelo slide abaixo para saber mais sobre Riscos Associados a Dispositivos Móveis:'
					/>
					<Subtitle text='Ameaças e Como se Proteger' />
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
						No mundo digital, enfrentamos diversos desafios de segurança que podem comprometer
						dados pessoais e corporativos. Para cada ameaça, há soluções eficazes que ajudam a
						proteger informações e dispositivos. Explore os cards abaixo para conhecer os
						principais riscos e as melhores práticas para garantir sua segurança digital. Clique
						em cada card para saber as ameaças comuns e como combatê-las de forma prática.
					</Typography>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'top',
							flexDirection: 'column',
							alignItems: 'center',
							padding: 0,
							color: '#fff',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: { xs: 'column', md: 'row' },
								justifyContent: 'center',
								alignItems: 'center',
								gap: { xs: 2, md: 2, xl: 3 },
								marginBottom: 5,
							}}
						>
							<CardFlip
								frontText='Perda ou Roubo de Dispositivos'
								backText='Proteja dispositivos removíveis com criptografia e senhas fortes para evitar acesso não autorizado em caso de perda ou roubo.'
								callback={e => addInteractics('CardFlip-1')}
							/>
							<CardFlip
								frontText='Aplicativos Maliciosos'
								backText='Evite executar arquivos ou programas desconhecidos em mídias removíveis e mantenha um antivírus atualizado no sistema.'
								callback={e => addInteractics('CardFlip-2')}
							/>
							<CardFlip
								frontText='Conexões Wi-Fi Públicas'
								backText='Nunca conecte mídias removíveis em dispositivos que utilizam redes públicas sem proteção, pois podem ser alvos de interceptação.'
								callback={e => addInteractics('CardFlip-3')}
							/>
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexDirection: { xs: 'column', md: 'row' },
								justifyContent: 'center',
								alignItems: 'center',
								gap: { xs: 2, md: 2, xl: 3 },
								marginBottom: 5,
							}}
						>
							<CardFlip
								frontText='Dispositivos IoT Vulneráveis'
								backText='Não conecte mídias removíveis a dispositivos IoT sem verificar se estão atualizados e protegidos contra ameaças conhecidas.'
								callback={e => addInteractics('CardFlip-5')}
							/>
							<CardFlip
								frontText='Falta de Atualizações'
								backText='Certifique-se de que os sistemas e dispositivos que utilizam mídias removíveis estejam sempre atualizados para corrigir vulnerabilidades.'
								callback={e => addInteractics('CardFlip-6')}
							/>
							<CardFlip
								frontText='.Ataques de Spoofing em Redes Públicas'
								backText='Evite conectar mídias removíveis em dispositivos desconhecidos, pois ataques de spoofing podem comprometer dados transferidos.'
								callback={e => addInteractics('CardFlip-7')}
							/>
						</Box>
					</Box>
					<ImageText
						image={image3}
						titulo='Redes Sem Fio'
						texto='As redes Wi-Fi oferecem praticidade no acesso à internet, mas, quando mal configuradas, podem se tornar vulneráveis a ataques. Redes públicas são especialmente arriscadas, pois os dados podem ser interceptados por invasores. Além disso, redes domésticas ou corporativas com senhas fracas ou protocolos antigos, como o WEP, são alvos fáceis para ataques, incluindo técnicas como o "man-in-the-middle", que capturam dados em trânsito.'
					/>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Poppins, sans-serif',
							width: '100%',
							textAlign: 'justify',
							fontWeight: '300',
						}}
					>
						Para melhorar a segurança em redes sem fio, é importante adotar boas práticas como
						usar o protocolo WPA3, que oferece criptografia mais robusta, configurar senhas
						fortes e complexas, ocultar o SSID da rede e desabilitar o WPS. Outras medidas
						incluem ativar o firewall do roteador para bloquear acessos não autorizados e
						segmentar redes, criando redes separadas para convidados e dispositivos IoT, o que
						reduz a exposição a riscos.
					</Typography>
					<ImageText
						reverse
						image={image2}
						titulo='Redes Públicas e VPN'
						texto='Ao usar redes públicas, como as de cafés ou aeroportos, é importante tomar precauções para proteger seus dados. Redes públicas podem ser vulneráveis à interceptação de informações, como senhas e dados bancários, e ataques de spoofing, onde redes falsas são criadas para roubar dados. Para se proteger, é recomendado usar uma VPN, evitar acessar informações sensíveis, desativar a conexão automática a redes públicas e sempre verificar se os sites acessados são seguros, utilizando HTTPS.'
					/>
					<Subtitle text='Dispositivos IoT e Redes Sem Fio' />
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
						Dispositivos IoT (Internet das Coisas) estão cada vez mais presentes em nossas casas
						e ambientes corporativos, conectando desde eletrodomésticos até sistemas de
						segurança à internet. No entanto, esses dispositivos, que dependem de redes sem fio
						para funcionar, podem ser vulneráveis a ataques se não forem configurados
						adequadamente. Muitos dispositivos IoT têm padrões de segurança fracos e podem ser
						facilmente acessados por invasores se não forem protegidos corretamente. Para
						garantir a segurança, é essencial utilizar redes Wi-Fi seguras, configurar senhas
						fortes, atualizar regularmente os dispositivos e, quando possível, segmentar as
						redes, separando os dispositivos IoT da rede principal. Assista o video e entenda
						melhor:
					</Typography>
					<IframePlayer
						videoUrl={
							'https://cursosmavi.nyc3.cdn.digitaloceanspaces.com/Cyberseguran%C3%A7a/V5-Dispositivos-IOT-e-Redes.mp4'
						}
						onVideoEnd={e => addInteractics('video-1')}
					/>
					<Botao.Primary
						text='Continuar'
						onClick={handleUnlockBlock1}
						disable={hasAllProgress([
							'video-1',
							'CardFlip-1',
							'CardFlip-2',
							'CardFlip-3',
							'CardFlip-5',
							'CardFlip-6',
							'CardFlip-7',
						])}
					/>
				</Box>
			)}
			<Box ref={block2Ref}></Box>
			{block2 && (
				<Box
					sx={{
						mt: 8,
						display: 'flex',
						justifyContent: 'top',
						flexDirection: 'column',
						alignItems: 'center',
						width: { xs: '80%', lg: '60%', xl: '45%' },
						marginBottom: '5rem',
						pb: 5,
						padding: 0,
						color: '#fff',
						gap: { xs: 5, md: 8, xl: 10 },
					}}
				>
					<Subtitle text='Vamos Praticar!' />
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
						Evite realizar transações sensíveis (como compras online ou acesso a bancos) em
						redes Wi-Fi públicas sem o uso de uma VPN (Rede Virtual Privada). Redes abertas são
						vulneráveis e podem ser monitoradas por hackers. Sabendo disso responda o cenário a
						seguir:
					</Typography>
					<QuizComponent
						question='Você precisa acessar sua conta bancária em um café. O que você NÂO deve fazer?'
						options={[
							'Usar Wi-Fi público',
							'Usar dados móveis',
							'Acessar depois em uma rede segura',
						]}
						correctAnswer='Usar Wi-Fi público'
						callback={e => addInteractics('quiz')}
					/>
					<Botao.Navigation
						text='Próximo Modulo'
						page={'Menu'}
						disable={hasAllProgress([
							'quiz',
						])}
						callback={() => changeProgress(18)}
					/>
				</Box>
			)}
		</Box>
	);
};

export default Modulo03;

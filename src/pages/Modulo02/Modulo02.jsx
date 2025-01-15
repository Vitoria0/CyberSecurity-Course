import { useState, useEffect, useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Botao } from '../../components/Botao';
import Title from '../../components/Texts/title';
import backgorund from '../../assets/img/Finalizacao.png';
import Subtitle from '../../components/Texts/subtitle';
import chip from '../../assets/img/chip.png';
import navegacao from '../../assets/img/navegacao.png';
import { Capa } from '../../assets/svg/Capa';
import image1 from '../../assets/img/image1.png';
import people from '../../assets/img/people.png';
import cell from '../../assets/img/cell.png';
import lixeira from '../../assets/img/lixeira.png';
import redes from '../../assets/img/redes.png';
import IframePlayer from '../../components/Iframe/Iframe';
import CardDinamico from '../../components/Cards/CardNeonChip';
import { ImageText } from '../../components/Cards/ImageText';
import AccordionComponent from '../../components/Accordion/Accordion';
import PasswordComponent from '../../components/PasswordComponent/PasswordComponent';
import { PhishingTest } from '../../components/PhishingTest/PhishingTest';
import chipCards from '../../assets/img/chipcards.png';
import CardFlip from '../../components/Cards/CardFlip';
import QuizComponent from '../../components/Quiz/quiz';
import { HomeRounded } from '@mui/icons-material';
import { changeProgress } from '../../services/userService';
import { LoggedUser } from '../../services/authService';
import { Slider2 } from '../../components/Slider2/Slider2';
import { useNavigation } from '../../hooks/NavigationContext';

const Modulo02 = () => {
const { navigateTo } = useNavigation();
	const [isVisible, setIsVisible] = useState(false);
	const [block1, setBlock1] = useState(false);
	const [block2, setBlock2] = useState(false);
	const [block3, setBlock3] = useState(false);
	const [block4, setBlock4] = useState(false);
	const [block5, setBlock5] = useState(false);
	const [block6, setBlock6] = useState(false);
	const [block7, setBlock7] = useState(false);
	const [block8, setBlock8] = useState(false);
	const [block9, setBlock9] = useState(false);
	const [interactics, setInteractics] = useState([]);

	const block1Ref = useRef(null);
	const block2Ref = useRef(null);
	const block3Ref = useRef(null);
	const block4Ref = useRef(null);
	const block5Ref = useRef(null);
	const block6Ref = useRef(null);
	const block7Ref = useRef(null);
	const block8Ref = useRef(null);
	const block9Ref = useRef(null);

	useEffect(() => {
		const user = LoggedUser.get();

		if (user && typeof user.progress === 'number') {
			var goRef = null;
			const progress = user.progress;
			if (progress >= 6) {
				setBlock1(true);
				goRef = block1Ref;
				setInteractics([...interactics, 'video-1']);
			}
			if (progress >= 7) {
				setBlock2(true);
				goRef = block2Ref;
				setInteractics([
					...interactics,
					'CardDinamico-1',
					'CardDinamico-2',
					'CardDinamico-3',
					'CardDinamico-4',
					'CardDinamico-5',
					'CardDinamico-6',
				]);
			}
			if (progress >= 8) {
				setBlock3(true);
				goRef = block3Ref;
				setInteractics([
					...interactics,
					'CardDinamico-7',
					'CardDinamico-8',
					'CardDinamico-9',
					'CardDinamico-10',
					'CardDinamico-11',
				]);
			}
			if (progress >= 9) {
				setBlock4(true);
				goRef = block4Ref;
				setInteractics([...interactics, 'PasswordComponent-1']);
			}
			if (progress >= 10) {
				setBlock5(true);
				goRef = block5Ref;
				setInteractics([
					...interactics,
					'CardDinamico-12',
					'CardDinamico-13',
					'CardDinamico-14',
					'CardDinamico-15',
					'CardDinamico-16',
					'video-2',
				]);
			}
			if (progress >= 11) {
				setBlock6(true);
				goRef = block6Ref;
				setInteractics([...interactics, 'phishing-test']);
			}
			if (progress >= 12) {
				setBlock7(true);
				goRef = block7Ref;
			}
			if (progress >= 13) {
				setBlock8(true);
				goRef = block8Ref;
				setInteractics([
					...interactics,
					'CardFlip-1',
					'CardFlip-2',
					'CardFlip-3',
					'CardFlip-4',
					'CardFlip-5',
					'CardFlip-6',
					'CardFlip-7',
					'CardDinamico-17',
					'CardDinamico-18',
					'CardDinamico-19',
					'CardDinamico-20',
					'CardDinamico-21',
					'CardDinamico-22',
				]);
			}
			if (progress >= 14) {
				setBlock9(true);
				goRef = block9Ref;
				setInteractics([...interactics, 'quiz']);
			}

			if (goRef != null) {
				scrollToBlock(goRef);
			}
		}
		const timeout = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timeout);
	}, []);

	const handleUnlockBlock = () => {
		changeProgress(6);
		setBlock1(true);
		scrollToBlock(block1Ref);
	};
	const handleUnlockBlock2 = () => {
		changeProgress(7);
		setBlock2(true);
		scrollToBlock(block2Ref);
	};

	const handleUnlockBlock3 = () => {
		changeProgress(8);
		setBlock3(true);
		scrollToBlock(block3Ref);
	};

	const handleUnlockBlock4 = () => {
		changeProgress(9);
		setBlock4(true);
		scrollToBlock(block4Ref);
	};

	const handleUnlockBlock5 = () => {
		changeProgress(10);
		setBlock5(true);
		scrollToBlock(block5Ref);
	};

	const handleUnlockBlock6 = () => {
		changeProgress(11);
		setBlock6(true);
		scrollToBlock(block6Ref);
	};

	const handleUnlockBlock7 = () => {
		changeProgress(12);
		setBlock7(true);
		scrollToBlock(block7Ref);
	};

	const handleUnlockBlock8 = () => {
		changeProgress(13);
		setBlock8(true);
		scrollToBlock(block8Ref);
	};

	const handleUnlockBlock9 = () => {
		changeProgress(14);
		setBlock9(true);
		scrollToBlock(block9Ref);
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

	const array = [
		{
			title: 'Ela é longa?',
			text: 'Tente usar pelo menos 10 ou 12 caracteres, ou o máximo possível.',
		},
		{
			title: 'Ela é difícil de adivinhar?',
			text: 'Evite sequências, como "12345" ou "qwerty", pois elas podem ser hackeadas por força bruta em segundos. Pelo mesmo motivo, evite também palavras comuns ("senha1").',
		},
		{
			title: 'Ele tem tipos variados de caracteres?',
			text: 'Letras minúsculas e maiúsculas, símbolos e números devem fazer parte da senha. A variedade pode tornar a sua senha mais imprevisível.',
		},
		{
			title: 'Substituições óbvias de caracteres são evitadas?',
			text: 'Por exemplo, usar o número zero "0" no lugar da letra "O". Essas substituições já estão codificadas nos softwares de hackeamento atuais. Então, evite isso.',
		},
		{
			title: 'A senha usa combinações de palavras incomuns?',
			text: 'As senhas podem ser mais seguras se usarem palavras inesperadas. Mesmo que você use palavras comuns, é possível organizá-las em uma ordem estranha e certificar-se de que não estejam relacionadas. Ambos os métodos podem neutralizar os hackeamentos baseados em dicionários.',
		},
		{
			title: 'Você consegue memorizá-la?',
			text: 'Use algo que faça sentido para você, mas que será difícil para os computadores adivinharem. Mesmo senhas aleatórias podem ser lembradas pela memória muscular, sendo semilegíveis. Mas senhas que impeçam o seu acesso não ajudam muito.',
		},
		{
			title: 'Você já usou a senha antes?',
			text: 'Reutilizar senhas compromete várias contas. Use sempre algo original.',
		},
		{
			title: 'A senha apresenta uma regra difícil de ser adivinhada por computadores?',
			text: 'Um exemplo pode ser uma senha de três palavras com quatro letras cada, onde as duas primeiras letras de cada palavra são substituídas por números e símbolos. Por exemplo: "?4sa#2to?6da" em vez de "casagatovida".',
		},
	];
	const array2 = [
		{
			title: 'Adquirir Licenças Legítimas',
			text: 'Invista em softwares originais de fontes confiáveis.',
		},
		{
			title: 'Manter Softwares Atualizados',
			text: 'Atualizações corrigem vulnerabilidades e fortalecem a segurança.',
		},
		{
			title: 'Usar Ferramentas de Segurança',
			text: 'Instale antivírus e firewalls confiáveis para proteger dispositivos.',
		},
		{
			title: 'Educação em Cibersegurança',
			text: 'Ensine usuários sobre os perigos de softwares piratas e como evitá-los.',
		},
		{
			title: 'Verificar a Origem do Software',
			text: 'Baixe programas apenas de sites oficiais ou marketplaces confiáveis.',
		},
	];

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
					mt: 8,
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
					<Title text='Como Se Proteger' />
					<Typography
						variant='body1'
						color='secondary'
						align='center'
						maxWidth='50rem'
						sx={{ fontFamily: 'Poppins', color: '#fff' }}
					>
						Saiba como se proteger em casos de ataques ciberneticos
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
						marginBottom: block2 ? '0' : '5rem',
						py: 5,
						padding: 0,
						color: '#fff',
						gap: { xs: 5, md: 8, xl: 10 },
					}}
				>
					<Subtitle text='Estudo de caso - Invasão de babás eletronicas' />
					<Box
						sx={{
							backgroundImage: `url(${chip})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							width: '100%',
							padding: '1rem',
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
							alignItems: 'center',
							aspectRatio: '1332/278',
						}}
					>
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
							A invasão de hardwares é um caso clássico de ataque à Internet das Coisas
							(IoT), em que dispositivos conectados à internet, como câmeras de vigilância
							ou babás eletrônicas, são acessados por terceiros não autorizados. A invasão
							de babás eletrônicas refere-se a ataques em que hackers acessam remotamente
							esses dispositivos para monitorar, ouvir, ou até mesmo interagir com o
							ambiente ou as pessoas no local. Babás eletrônicas são câmeras conectadas que
							permitem aos pais monitorarem seus filhos a partir de outro cômodo ou mesmo de
							um local remoto, por meio de aplicativos em smartphones ou computadores.
						</Typography>
					</Box>
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
						Hackers acessaram babás eletrônicas para espionar crianças ou transmitir mensagens
						perturbadoras. Em alguns casos, os invasores falaram com as crianças diretamente,
						causando grande alarme entre as famílias. Veja um exemplo sobre o caso assistindo o
						video abaixo:
					</Typography>
					<IframePlayer
						videoUrl={
							'https://cursosmavi.nyc3.cdn.digitaloceanspaces.com/SEGURAN%C3%87A%20DA%20INFORMA%C3%87%C3%83O%20(online-video-cutter.com).mp4'
						}
						onVideoEnd={() => addInteractics('video-1')}
					/>
					<Botao.Primary
						text='Continuar'
						onClick={handleUnlockBlock2}
						disable={hasAllProgress(['video-1'])}
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
						py: 5,
						padding: 0,
						color: '#fff',
						gap: { xs: 5, md: 8, xl: 10 },
					}}
				>
<Box sx={{
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
width: '100%',
flexDirection: 'column',}}>
					<Subtitle text='Como poderia ter sido evitado?' />
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
						>Clique nos cads para saber:</Typography></Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							justifyContent: 'center',
							alignItems: 'center',
							gap: { xs: 10, md: 8, xl: 9 },
							marginY: 5,
						}}
					>
						<CardDinamico
							texto='Alterar senhas padrão: Sempre defina senhas fortes e únicas para cada dispositivo.'
							callback={e => addInteractics('CardDinamico-1')}
							isActive={LoggedUser.get().progress > 7}
						/>
						<CardDinamico
							texto='Atualizar firmware: Certifique-se de que o dispositivo esteja rodando a versão mais recente do firmware, com correções de segurança aplicadas.'
							callback={e => addInteractics('CardDinamico-2')}
							isActive={LoggedUser.get().progress >= 7}
						/>
						<CardDinamico
							texto='Usar redes Wi-Fi seguras: Configure o Wi-Fi com criptografia forte (WPA3, se disponível) e altere a senha periodicamente.'
							callback={e => addInteractics('CardDinamico-3')}
							isActive={LoggedUser.get().progress >= 7}
						/>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							justifyContent: 'center',
							alignItems: 'center',
							gap: { xs: 10, md: 8, xl: 9 },
							marginBottom: 5,
						}}
					>
						<CardDinamico
							texto='Desativar acesso remoto não necessário: Se você não precisa acessar o dispositivo remotamente, desative essa função.'
							callback={e => addInteractics('CardDinamico-4')}
							isActive={LoggedUser.get().progress >= 7}
						/>
						<CardDinamico
							texto='Configurar autenticação de dois fatores (2FA): Caso disponível, ative 2FA para maior segurança no login.'
							callback={e => addInteractics('CardDinamico-5')}
							isActive={LoggedUser.get().progress >= 7}
						/>
						<CardDinamico
							texto='Monitorar atividades suspeitas: Fique atento a comportamentos estranhos, como movimentos inesperados da câmera.'
							callback={e => addInteractics('CardDinamico-6')}
							isActive={LoggedUser.get().progress >= 7}
						/>
					</Box>
					<Botao.Primary
						text='Continuar'
						onClick={handleUnlockBlock3}
						disable={hasAllProgress([
							'CardDinamico-1',
							'CardDinamico-2',
							'CardDinamico-3',
							'CardDinamico-4',
							'CardDinamico-5',
							'CardDinamico-6',
						])}
					/>
				</Box>
			)}

			<Box ref={block3Ref}></Box>
			{block3 && (
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
					<Subtitle text='Navegação Segura' />
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
						Verifique se os sites possuem o prefixo “https://” na URL antes de unserir
						informações pessoais ou financeiras. Se tiver apenas “http://” (sem o s), não
						confie. Quando navegamos pela internet , são muitas ameaças que se escondem por tras
						de cada clique.
					</Typography>
					<Box
						sx={{
							backgroundImage: `url(${navegacao})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							width: '100%',
							padding: '1rem',
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
							alignItems: 'center',
							aspectRatio: '1369/390',
						}}
					></Box>
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
						Evite cair nelas e navegue de forma segura, saiba como se proteger seguindo algumas
						dicas que aparecerão quando você clicar nos cards
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							justifyContent: 'center',
							alignItems: 'center',
							gap: { xs: 10, md: 8, xl: 9 },
							marginBottom: 5,
						}}
					>
						<CardDinamico
							texto='NO momento de proporcionar informação sigilosa (senhas, dados bancários...)em algum site, reveja a barra de navegação e confira se tem o prefixo HTTPS.'
							callback={e => addInteractics('CardDinamico-7')}
							isActive={LoggedUser.get().progress > 8}
						/>
						<CardDinamico
							texto='Desabilite a opção de “lembrar senha” no seu navegador e feche as suas sessões ao sair de algum site'
							callback={e => addInteractics('CardDinamico-8')}
							isActive={LoggedUser.get().progress > 8}
						/>
						<CardDinamico
							texto='Preste atenção nos anexos e links dispolibilizados antes de acessa-los.'
							callback={e => addInteractics('CardDinamico-9')}
							isActive={LoggedUser.get().progress > 8}
						/>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							justifyContent: 'center',
							alignItems: 'center',
							gap: { xs: 10, md: 8, xl: 9 },
							marginBottom: 5,
						}}
					>
						<CardDinamico
							texto='Mantenha sempre os seus equipamentos atualizados (sistemas operacionais, navegadores e aplicativos) e instale, sempre que possivel,, um antivirus.'
							callback={e => addInteractics('CardDinamico-10')}
							isActive={LoggedUser.get().progress > 8}
						/>
						<CardDinamico
							texto='Ocasionalmente elimite o histórico de navegação, os cookies e os ficheiros temporários do seu navegador'
							callback={e => addInteractics('CardDinamico-11')}
							isActive={LoggedUser.get().progress > 8}
						/>
					</Box>

					<Botao.Primary
						text='Continuar'
						onClick={handleUnlockBlock4}
						disable={hasAllProgress([
							'CardDinamico-7',
							'CardDinamico-8',
							'CardDinamico-9',
							'CardDinamico-10',
							'CardDinamico-11',
						])}
					/>
				</Box>
			)}

			<Box ref={block4Ref}></Box>
			{block4 && (
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
						titulo='Protegendo senhas'
						texto='Senhas fracas podem causar grandes prejuízos. Hackers utilizam métodos como: Invasões baseadas em dicionários: programas combinam palavras comuns para adivinhar senhas simples. Ataques de força bruta: testam todas as combinações possíveis de caracteres, descobrindo senhas curtas rapidamente. Exploração de informações públicas: dados pessoais expostos em redes sociais, como nomes e aniversários, ajudam hackers a criar ataques direcionados. Proteja suas senhas escolhendo combinações fortes e únicas.'
					/>
					<Subtitle text='Como criar uma senha forte' />
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
						Para se proteger dos mais novos métodos de invasão, você precisa de senhas robustas.
						E se você está se perguntando: "qual é a força da minha senha?", veja algumas dicas
						de como criar senhas fortes:
					</Typography>

					<AccordionComponent arrayAccordionItems={array} />
					<Box
						sx={{
							display: 'flex',
							width: {xs:'100%', md:'50%'},
							justifyContent: 'top',
							flexDirection: 'column',
							alignItems: 'center',
							padding: 0,
							color: '#fff',
							gap: { xs: 2, md: 3, xl: 5 },
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
							<b>Vamos Tentar Criar uma senha juntos?</b> Digite abaixo uma senha e clique
							em verificar para receber um feedback:
						</Typography>

						<PasswordComponent  callback={() => addInteractics('PasswordComponent-1')} />
					</Box>
					<Botao.Primary
						text='Continuar'
						onClick={handleUnlockBlock5}
						disable={hasAllProgress(['PasswordComponent-1'])}
					/>
				</Box>
			)}

			<Box ref={block5Ref}></Box>
			{block5 && (
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
						reverse
						image={redes}
						titulo='Redes Sociais'
						texto='As redes sociais possuem uma relevância muito alta bos dias atuais, permitindo-nos contectar ocm amigos, famili e colegas de trabalho. No entanto, é crucial utiliza-lás de forma segura para proteger nossas informações pessoais e evitar riscos online. Veremos algumas dicas simples e práticas para garantir que você possa desfrutar das redes sociais de maneira segura e conciente, clique nos cards para ver:'
					/>
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							justifyContent: 'center',
							alignItems: 'center',
							gap: { xs: 10, md: 8, xl: 9 },
							marginBottom: 5,
						}}
					>
						<CardDinamico
							texto='Roubo de identidade: criminosos podem coletar informações pessoais para se passar por você e realizar fraudes'
							callback={e => addInteractics('CardDinamico-12')}
							isActive={LoggedUser.get().progress > 10}
						/>
						<CardDinamico
							texto='Exposição de informações pessoais: compartilhar dados sensiveis publicamente pode levar ao uso indevido dessas informaçções por terceiros mal intencionados'
							callback={e => addInteractics('CardDinamico-13')}
							isActive={LoggedUser.get().progress > 10}
						/>
						<CardDinamico
							texto='Privacidade comprometida: configurações de privacidade inadequadas podem permitir que desconhecidos acessem suas postagens e informações pessoais'
							callback={e => addInteractics('CardDinamico-14')}
							isActive={LoggedUser.get().progress > 10}
						/>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							justifyContent: 'center',
							alignItems: 'center',
							gap: { xs: 10, md: 8, xl: 9 },
							marginBottom: 5,
						}}
					>
						<CardDinamico
							texto='Perfis falsos: criminosos podem criar perfis falsos para enganar e obter dados pessoais ou financeiros'
							callback={e => addInteractics('CardDinamico-15')}
							isActive={LoggedUser.get().progress > 10}
						/>
						<CardDinamico
							texto='Geolocalização: publicações com localização em tempo real podem expor sua localização para pessoas não confiáveis.'
							callback={e => addInteractics('CardDinamico-16')}
							isActive={LoggedUser.get().progress > 10}
						/>
					</Box>
					<Subtitle text='Phishing' />
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
						Phishing é um tipo de ataque cibernético no qual hackers tentam enganar pessoas para
						obter informações sensíveis, como senhas, dados bancários ou números de cartões de
						crédito. Isso é feito por meio de comunicações fraudulentas que parecem legítimas,
						como e-mails, mensagens de texto ou sites falsos.{' '}
						<b>
							Assista ao video para entender melhor como funciona por dentro de um ataque de
							phishing
						</b>
					</Typography>
					<IframePlayer
						videoUrl={
							'https://cursosmavi.nyc3.cdn.digitaloceanspaces.com/SEGURAN%C3%87A%20DA%20INFORMA%C3%87%C3%83O%20(online-video-cutter.com).mp4'
						}
						onVideoEnd={e => addInteractics('video-2')}
					/>
					<Botao.Primary
						text='Continuar'
						onClick={handleUnlockBlock6}
						disable={hasAllProgress([
							'CardDinamico-12',
							'CardDinamico-13',
							'CardDinamico-14',
							'CardDinamico-15',
							'CardDinamico-16',
							'video-2',
						])}
					/>
				</Box>
			)}

			<Box ref={block6Ref}></Box>
			{block6 && (
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
					<Subtitle text='Como funciona?' />
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
						O atacante se passa por uma entidade confiável, como um banco, empresa ou
						instituição, cria uma sensação de urgência, pedindo ações imediatas, como clicar em
						um link ou fornecer informações pessoais e a vítima insere dados sensíveis em
						formulários ou sites falsificados.
						<b> Veja abaixo navegando pelo slide os tipos mais comuns de phishing:</b>
					</Typography>
					<Slider2 />
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
						Na tela abaixo você verá uma serie de imagens e situações e terá que analisar para
						saber se é ou não um phishing, baseado em tudo que você aprendeu até agora. Clique
						em nos botões para dizer se é ou não phishing.
					</Typography>
					<PhishingTest callback={addInteractics('phishing-test')} />
					<Botao.Primary
						text='Continuar'
						onClick={handleUnlockBlock7}
						disable={hasAllProgress(['phishing-test'])}
					/>
				</Box>
			)}

			<Box ref={block7Ref}></Box>
			{block7 && (
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
						reverse
						image={cell}
						titulo='Softwares Não Legítimos'
						texto='Softwares não legítimos, também conhecidos como softwares piratas, falsificados ou não autorizados, representam um risco significativo para a cibersegurança de indivíduos e organizações. Usá-los pode expor sistemas a vulnerabilidades, ataques cibernéticos e perda de dados. São programas obtidos sem autorização legal, seja por meio de pirataria, cracks, versões falsificadas ou distribuídos por fontes não confiáveis. Saiba alguns exemplos:'
					/>
					<img src={chipCards} style={{ width: '100%' }} alt='Chip Cards' />
					<Box
						sx={{
							backgroundImage: `url(${chip})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							width: '100%',
							padding: '1rem',
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
							alignItems: 'center',
							aspectRatio: '1332/275',
						}}
					>
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
							O caso XcodeGhost (2015) envolveu hackers que distribuíram uma versão
							adulterada do Xcode, ferramenta de desenvolvimento para iOS e macOS. Essa
							versão infectava automaticamente os aplicativos criados com ela, incluindo
							apps famosos como WeChat e Didi Kuaidi, coletando dados básicos de usuários e
							enviando para servidores remotos. Embora o malware não tenha causado grandes
							danos diretos, ele revelou vulnerabilidades no ecossistema Apple, alertando
							para o uso de ferramentas de fontes não confiáveis. Saiba mais sobre o caso{' '}
							<a
								href='https://noticias.uol.com.br/ultimas-noticias/deutschewelle/2015/09/21/apple-e-alvo-de-ataque-cibernetico-em-grande-escala.htm'
								target='_blank'
							>
								{' '}
								clicando aqui.
							</a>
						</Typography>
					</Box>{' '}
					<Subtitle text='Como Evitar os Riscos?' />
					<AccordionComponent arrayAccordionItems={array2} />
					<Botao.Primary
						text='Continuar'
						onClick={handleUnlockBlock8}
						disable={hasAllProgress([])}
					/>
				</Box>
			)}

			<Box ref={block8Ref}></Box>
			{block8 && (
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
						image={people}
						titulo='Dispositivos Compartilhados'
						texto='Dispositivos compartilhados são aqueles utilizados por várias pessoas, como computadores públicos, tablets em empresas, dispositivos de coworking ou até mesmo aparelhos domésticos usados por membros da família. Embora convenientes, eles apresentam desafios de cibersegurança que exigem atenção especial para evitar vulnerabilidades.'
					/>
					<Subtitle text={'Boas Práticas'} />
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
						Quando dispositivos são usados por várias pessoas, a segurança e a privacidade das
						informações se tornam prioridades. Para proteger os dados e garantir que o
						dispositivo funcione de forma segura, é essencial adotar práticas recomendadas, como
						usar perfis de usuário separados, habilitar a navegação privada, evitar o salvamento
						de senhas e manter o software atualizado. Essas medidas simples ajudam a evitar
						vazamentos de informações e garantir uma experiência segura para todos os usuários.
						Clique nos cards para ver alguns exemplos:
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							justifyContent: 'center',
							alignItems: 'center',
							gap: { xs: 10, md: 8, xl: 9 },
							marginBottom: 5,
						}}
					>
						<CardDinamico
							texto='Usar Perfis de Usuário Separados: Crie contas distintas para cada usuário com permissões limitadas. Isso ajuda a evitar acessos indevidos a informações privadas.'
							callback={e => addInteractics('CardDinamico-17')}
							isActive={LoggedUser.get().progress > 13}
						/>
						<CardDinamico
							texto='Habilitar a Navegação Privada: Oriente os usuários a usar o modo de navegação anônima para evitar que histórico e credenciais sejam salvos.'
							callback={e => addInteractics('CardDinamico-18')}
							isActive={LoggedUser.get().progress > 13}
						/>
						<CardDinamico
							texto='Evitar Salvar Senhas: Nunca permita que navegadores ou aplicativos salvem senhas em dispositivos compartilhados.'
							callback={e => addInteractics('CardDinamico-19')}
							isActive={LoggedUser.get().progress > 13}
						/>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							justifyContent: 'center',
							alignItems: 'center',
							gap: { xs: 10, md: 8, xl: 9 },
							marginBottom: 5,
						}}
					>
						<CardDinamico
							texto='Desativar Downloads Não Autorizados: Restrinja a instalação de aplicativos ou downloads de fontes desconhecidas.'
							callback={e => addInteractics('CardDinamico-20')}
							isActive={LoggedUser.get().progress > 13}
						/>
						<CardDinamico
							texto='Manter o Software Atualizado: Atualize regularmente o sistema operacional, navegadores e antivírus para corrigir vulnerabilidades.'
							callback={e => addInteractics('CardDinamico-21')}
							isActive={LoggedUser.get().progress > 13}
						/>
						<CardDinamico
							texto='Utilizar Softwares de Monitoramento: Em ambientes corporativos, implemente ferramentas que monitorem e limitem atividades no dispositivo.'
							callback={e => addInteractics('CardDinamico-22')}
							isActive={LoggedUser.get().progress > 13}
						/>
					</Box>
					<ImageText
						reverse
						image={lixeira}
						titulo='Mídias Removíveis'
						texto='Mídias removíveis, como pen drives, HDs externos, cartões de memória, CDs/DVDs e outros dispositivos portáteis de armazenamento, oferecem conveniência para transferir e armazenar dados. No entanto, seu uso pode representar sérios riscos de cibersegurança, especialmente em ambientes corporativos e redes públicas. Alguns exemplos de midias removiveis são: Pen Drive, Hds Externos, CDs, DVDs, MP3, SDs. E assim como as demais tecnologias as Midias removiveis também contém seus riscos de segurança associados, clique nos cards para saber como se precaver de cada situação:'
					/>{' '}
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
							<CardFlip
								frontText='Configurações Inseguras de Redes Wi-Fi'
								backText='Garanta que redes Wi-Fi utilizadas estejam configuradas com criptografia WPA3 para minimizar riscos ao transferir dados.'
								callback={e => addInteractics('CardFlip-4')}
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
						</Box>{' '}
					</Box>{' '}
					<Subtitle text='Antivírus' />
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
						É um programa que analisa o comportamento de arquivos e programas para identificar
						atividades suspeitas. Detecta e remove malwares, como: Virus, Trojans, Spyware,
						Ransomware, Adware. Assista o video para saber mais sobre como funcionam os antviruz
					</Typography>
					<IframePlayer
						videoUrl={
							'https://cursosmavi.nyc3.cdn.digitaloceanspaces.com/SEGURAN%C3%87A%20DA%20INFORMA%C3%87%C3%83O%20(online-video-cutter.com).mp4'
						}
						onVideoEnd={e => addInteractics('video-3')}
					/>
					<Botao.Primary
						text='Continuar'
						onClick={handleUnlockBlock9}
						disable={hasAllProgress([
							'CardFlip-1',
							'CardFlip-2',
							'CardFlip-3',
							'CardFlip-4',
							'CardFlip-5',
							'CardFlip-6',
							'CardFlip-7',
							'CardDinamico-17',
							'CardDinamico-18',
							'CardDinamico-19',
							'CardDinamico-20',
							'CardDinamico-21',
							'CardDinamico-22',
						])}
					/>
				</Box>
			)}

			<Box ref={block9Ref}></Box>
			{block9 && (
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
					<Typography
						variant='body1'
						color='secondary'
						align='justify'
						maxWidth='50rem'
						sx={{
							fontFamily: 'Poppins',
							color: '#fff',
							fontWeight: '500',
							fontSize: { xs: '0.8rem', md: '0.8rem', lg: '0.85rem', xl: '0.9rem' },
						}}
					>
						Responda o quiz abaixo para seguir com o conteúdo:
					</Typography>
					<QuizComponent
						question='Qual das seguintes práticas ajuda a prevenir ataques de phishing?'
						options={['Clicar em links de fontes desconhecidas', 'Verificar a autenticidade do remetente antes de clicar em links ou abrir anexos', 'Ignorar atualizações de segurança']}
						correctAnswer='Verificar a autenticidade do remetente antes de clicar em links ou abrir anexos'
						callback={e => addInteractics('quiz')}
					/>
					<Botao.Navigation
						text='Próximo Modulo'
						page={'Menu'}
						callback={() => changeProgress(15)}
						disable={hasAllProgress(['quiz'])}
					/>
				</Box>
			)}
		</Box>
	);
};

export default Modulo02;

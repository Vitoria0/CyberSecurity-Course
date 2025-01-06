import { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Botao } from '../../components/Botao';
import Title from '../../components/Texts/title';
import backgorund from '../../assets/img/Finalizacao.png';
import Subtitle from '../../components/Texts/subtitle';
import chip from '../../assets/img/chip.png';
import navegacao from '../../assets/img/navegacao.png';
import { Capa } from '../../assets/svg/Capa';
import image1 from '../../assets/img/image1.png';
import IframePlayer from '../../components/Iframe/Iframe';
import CardDinamico from '../../components/Cards/CardNeonChip';
import { ImageText } from '../../components/Cards/ImageText';
import AccordionComponent from '../../components/Accordion/Accordion';
import PasswordComponent from '../../components/PasswordComponent/PasswordComponent';
import { Slider } from '../../components/Slider/slider';
import { PhishingTest } from '../../components/PhishingTest/PhishingTest';
import chipCards from '../../assets/img/chipcards.png';
import CardFlip from '../../components/Cards/CardFlip';
import QuizComponent from '../../components/Quiz/quiz';
import { HomeRounded } from '@mui/icons-material';
import { useNavigation } from '../../hooks/NavigationContext';

const Modulo02 = () => {
	const [isVisible, setIsVisible] = useState(false);
const { navigateTo } = useNavigation();
	const [block1, setBlock1] = useState(false);
	const [block2, setBlock2] = useState(false);
	const [block3, setBlock3] = useState(false);
	const [block4, setBlock4] = useState(false);
	const [block5, setBlock5] = useState(false);
	const [block6, setBlock6] = useState(false);
	const [block7, setBlock7] = useState(false);
	const [block8, setBlock8] = useState(false);
	const [block9, setBlock9] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timeout);
	}, []);

	const handleUnlockBlock = () => {
		setBlock1(true);
	};
	const handleUnlockBlock2 = () => {
		setBlock2(true);
	};

	const handleUnlockBlock3 = () => {
		setBlock3(true);
	};

	const handleUnlockBlock4 = () => {
		setBlock4(true);
	};

	const handleUnlockBlock5 = () => {
		setBlock5(true);
	};

	const handleUnlockBlock6 = () => {
		setBlock6(true);
	};

	const handleUnlockBlock7 = () => {
		setBlock7(true);
	};

	const handleUnlockBlock8 = () => {
		setBlock8(true);
	};

	const handleUnlockBlock9 = () => {
		setBlock9(true);
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
				gap: 8,
			}}
		>

			 <IconButton
							onClick={() => {navigateTo('Menu');}}
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

			{block1 && (
				<Box
					sx={{
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
					/>
					<Botao.Primary text='Continuar' onClick={handleUnlockBlock2} />
				</Box>
			)}
			{block2 && (
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
					<Subtitle text='Como poderia ter sido evitado?' />
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
						<CardDinamico texto='Uso massivo da internet e dispositivos digitais' />
						<CardDinamico texto='Conectividade global e comunicação instantânea' />
						<CardDinamico texto='Automação e digitalização de processos' />
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
						<CardDinamico texto='Uso massivo da internet e dispositivos digitais' />
						<CardDinamico texto='Conectividade global e comunicação instantânea' />
						<CardDinamico texto='Automação e digitalização de processos' />
					</Box>
					<Botao.Primary text='Continuar' onClick={handleUnlockBlock3} />
				</Box>
			)}
			{block3 && (
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
						<CardDinamico texto='Uso massivo da internet e dispositivos digitais' />
						<CardDinamico texto='Conectividade global e comunicação instantânea' />
						<CardDinamico texto='Automação e digitalização de processos' />
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
						<CardDinamico texto='Uso massivo da internet e dispositivos digitais' />
						<CardDinamico texto='Conectividade global e comunicação instantânea' />
					</Box>

					<Botao.Primary text='Continuar' onClick={handleUnlockBlock4} />
				</Box>
			)}
			{block4 && (
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
							align='justify'
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

						<PasswordComponent />
					</Box>
					<Botao.Primary text='Continuar' onClick={handleUnlockBlock5} />
				</Box>
			)}
			{block5 && (
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
					<ImageText
						reverse
						image={image1}
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
						<CardDinamico texto='Roubo de identidade: criminosos podem coletar informações pessoais para se passar por você e realizar fraudes' />
						<CardDinamico texto='Exposição de informações pessoais: compartilhar dados sensiveis publicamente pode levar ao uso indevido dessas informaçções por terceiros mal intencionados' />
						<CardDinamico texto='Privacidade comprometida: configurações de privacidade inadequadas podem permitir que desconhecidos acessem suas postagens e informações pessoais' />
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
						<CardDinamico texto='Perfis falsos: criminosos podem criar perfis falsos para enganar e obter dados pessoais ou financeiros' />
						<CardDinamico texto='Geolocalização: publicações com localização em tempo real podem expor sua localização para pessoas não confiáveis.' />
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
					/>
					<Botao.Primary text='Continuar' onClick={handleUnlockBlock6} />
				</Box>
			)}
			{block6 && (
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
					<Slider />
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
					<PhishingTest />
					<Botao.Primary text='Continuar' onClick={handleUnlockBlock7} />
				</Box>
			)}
			{block7 && (
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
					<ImageText
						reverse
						image={image1}
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
					<Botao.Primary text='Continuar' onClick={handleUnlockBlock8} />
				</Box>
			)}
			{block8 && (
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
					<ImageText
						image={image1}
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
						<CardDinamico texto='Usar Perfis de Usuário Separados: Crie contas distintas para cada usuário com permissões limitadas. Isso ajuda a evitar acessos indevidos a informações privadas.' />
						<CardDinamico texto='Habilitar a Navegação Privada: Oriente os usuários a usar o modo de navegação anônima para evitar que histórico e credenciais sejam salvos.' />
						<CardDinamico texto='Evitar Salvar Senhas: Nunca permita que navegadores ou aplicativos salvem senhas em dispositivos compartilhados.' />
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
						<CardDinamico texto='Desativar Downloads Não Autorizados: Restrinja a instalação de aplicativos ou downloads de fontes desconhecidas.' />
						<CardDinamico texto='Manter o Software Atualizado: Atualize regularmente o sistema operacional, navegadores e antivírus para corrigir vulnerabilidades.' />
						<CardDinamico texto='Utilizar Softwares de Monitoramento: Em ambientes corporativos, implemente ferramentas que monitorem e limitem atividades no dispositivo.' />
					</Box>
					<ImageText
						reverse
						image={image1}
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
							/>
							<CardFlip
								frontText='Aplicativos Maliciosos'
								backText='Evite executar arquivos ou programas desconhecidos em mídias removíveis e mantenha um antivírus atualizado no sistema.'
							/>
							<CardFlip
								frontText='Conexões Wi-Fi Públicas'
								backText='Nunca conecte mídias removíveis em dispositivos que utilizam redes públicas sem proteção, pois podem ser alvos de interceptação.'
							/>
							<CardFlip
								frontText='Configurações Inseguras de Redes Wi-Fi'
								backText='Garanta que redes Wi-Fi utilizadas estejam configuradas com criptografia WPA3 para minimizar riscos ao transferir dados.'
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
							/>
							<CardFlip
								frontText='Falta de Atualizações'
								backText='Certifique-se de que os sistemas e dispositivos que utilizam mídias removíveis estejam sempre atualizados para corrigir vulnerabilidades.'
							/>
							<CardFlip
								frontText='.Ataques de Spoofing em Redes Públicas'
								backText='Evite conectar mídias removíveis em dispositivos desconhecidos, pois ataques de spoofing podem comprometer dados transferidos.'
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
					/>
					<Botao.Primary text='Continuar' onClick={handleUnlockBlock9} />
				</Box>
			)}
			{block9 && (
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
						question='Qual é o pilar da segurança da informação violado quando um sistema está fora do ar por um ataque de negação de serviço (DDoS)?'
						options={['Confidencialidade', 'Integridade', 'Disponibilidade']}
						correctAnswer='Confidencialidade' 
					/>
					<Botao.Navigation text='Próximo Modulo' page={'Menu'}/>
			
				</Box>
			)}
		</Box>
	);
};

export default Modulo02;

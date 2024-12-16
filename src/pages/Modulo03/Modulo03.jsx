import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Botao } from '../../components/Botao';
import backgorund from '../../assets/img/Finalizacao.png';
import Title from '../../components/Texts/title';
import { Capa } from '../../assets/svg/Capa';
import { ImageText } from '../../components/Cards/ImageText';
import image1 from '../../assets/img/vr.png';
import image3 from '../../assets/img/block.png';
import Subtitle from '../../components/Texts/subtitle';
import IframePlayer from '../../components/Iframe/Iframe';
import { Slider } from '../../components/Slider/slider';
import QuizComponent from '../../components/Quiz/quiz';
import CardFlip from '../../components/Cards/CardFlip';

const Modulo03 = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [block1, setBlock1] = useState(false);
	const [block2, setBlock2] = useState(false);
	const [block3, setBlock3] = useState(false);
	const [block4, setBlock4] = useState(false);
	const [block5, setBlock5] = useState(false);

	const handleAnswerCallback = () => {
		setBlock2(true);
	};

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timeout);
	}, []);
	const handleUnlockBlock = index => {
		setBlock1(true);
	};
	const handleUnlockBlock1 = index => {
		setBlock2(true);
	};

	const handleUnlockBlock2 = index => {
		setBlock3(true);
	};

	const handleUnlockBlock3 = index => {
		setBlock4(true);
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
					<ImageText
						image={image1}
						reverse={true}
						titulo='Dispositivos Móveis'
						texto='Os dispositivos móveis são ferramentas indispensáveis no cotidiano moderno, permitindo acesso à internet, comunicações e trabalho remoto de qualquer lugar. No entanto, essa conveniência também traz desafios significativos de segurança. A mobilidade aumenta o risco de perda de dispositivos, roubo de dados e exposição a ataques maliciosos. Navegue pelo slide abaixo para saber mais sobre Riscos Associados a Dispositivos Móveis:'
					/>
					<Slider />
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
						image={image3}
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
							'https://cursosmavi.nyc3.cdn.digitaloceanspaces.com/SEGURAN%C3%87A%20DA%20INFORMA%C3%87%C3%83O%20(online-video-cutter.com).mp4'
						}
					/>
					<Botao.Primary text='Continuar' onClick={handleUnlockBlock1} />
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
						Riscos e boas práticas, clique nos cards para aprendar mais sobre:
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
						</Box>
					</Box>
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
					/>
					<Botao.Navigation text='Próximo Modulo' page={'Menu'} />
				</Box>
			)}
		</Box>
	);
};

export default Modulo03;

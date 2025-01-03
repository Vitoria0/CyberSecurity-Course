import { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { Botao } from '../../components/Botao';
import backgorund from '../../assets/img/Finalizacao.png';
import Title from '../../components/Texts/title';
import { Capa } from '../../assets/svg/Capa';
import { ImageText } from '../../components/Cards/ImageText';
import image1 from '../../assets/img/vr.png';
import image2 from '../../assets/img/www.png';
import image3 from '../../assets/img/block.png';
import confidencialidade from '../../assets/img/confidencialidade.png';
import Disponibilidade from '../../assets/img/disponibilidade.png';
import Integridade from '../../assets/img/integridade.png';
import CardDinamico from '../../components/Cards/CardNeonChip';
import { InterativeImageText } from '../../components/Cards/InterativeImageText';
import { CardIcon } from '../../components/Cards/CardIcon';
import Subtitle from '../../components/Texts/subtitle';
import IframePlayer from '../../components/Iframe/Iframe';
import { Slider } from '../../components/Slider/slider';
import QuizComponent from '../../components/Quiz/quiz';
import { changeProgress } from '../../services/userService';
import { LoggedUser } from '../../services/authService';

const Modulo01 = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [interactics, setInteractics] = useState([]);
	const [block1, setBlock1] = useState(false);
	const [block2, setBlock2] = useState(false);
	const [block3, setBlock3] = useState(false);
	const [block4, setBlock4] = useState(false);

	const block1Ref = useRef(null);
	const block2Ref = useRef(null);
	const block3Ref = useRef(null);
	const block4Ref = useRef(null);

	useEffect(() => {
		const user = LoggedUser.get();
		if (user && typeof user.progress === 'number') {
			const progress = user.progress;
			if (progress >= 5) {
				setBlock4(true);
				setBlock3(true);
				setBlock2(true);
				setBlock1(true);
				setInteractics([
					'CardDinamico-1',
					'CardDinamico-2',
					'CardDinamico-3',
					'InterativeImageText-1',
					'InterativeImageText-2',
					'CardIcon-1',
					'CardIcon-2',
					'CardIcon-3',
					'video',
					'block3',
					'quiz',
				]);
			}
			if (progress === 4) {
				setBlock4(true);
				setBlock3(true);
				setBlock2(true);
				setBlock1(true);
				scrollToBlock(block4Ref);
				setInteractics([
					'CardDinamico-1',
					'CardDinamico-2',
					'CardDinamico-3',
					'InterativeImageText-1',
					'InterativeImageText-2',
					'CardIcon-1',
					'CardIcon-2',
					'CardIcon-3',
					'video',
					'block3',
				]);
			}
			if (progress === 3) {
				setBlock3(true);
				setBlock2(true);
				setBlock1(true);
				scrollToBlock(block3Ref);
				setInteractics([
					'CardDinamico-1',
					'CardDinamico-2',
					'CardDinamico-3',
					'InterativeImageText-1',
					'InterativeImageText-2',
					'CardIcon-1',
					'CardIcon-2',
					'CardIcon-3',
					'video',
				]);
			}
			if (progress === 2) {
				setBlock2(true);
				setBlock1(true);
				scrollToBlock(block2Ref);
				setInteractics([
					'CardDinamico-1',
					'CardDinamico-2',
					'CardDinamico-3',
					'InterativeImageText-1',
					'InterativeImageText-2',
					'CardIcon-1',
					'CardIcon-2',
					'CardIcon-3',
				]);
			}
			if (progress === 1) {
				setBlock1(true);
				scrollToBlock(block1Ref);
			}
		}
	}, []); // Executa apenas uma vez

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

	const handleAnswerCallback = () => {
		setBlock2(true);
	};

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timeout);
	}, []);
	const handleUnlockBlock = index => {
		changeProgress(1);
		setBlock1(true);
		scrollToBlock(block1Ref);
	};
	const handleUnlockBlock1 = index => {
		changeProgress(2);
		setBlock2(true);
		scrollToBlock(block2Ref);
	};

	const handleUnlockBlock2 = index => {
		changeProgress(3);
		setBlock3(true);
		scrollToBlock(block3Ref);
	};

	const handleUnlockBlock3 = index => {
		changeProgress(4);
		setBlock4(true);
		scrollToBlock(block4Ref);
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
					<Title text='Mundo Digital' />
					<Typography
						variant='body1'
						color='secondary'
						align='center'
						maxWidth='50rem'
						sx={{ fontFamily: 'Poppins', color: '#fff' }}
					>
						Vamos embarcar nessa jornada e entender melhor como funciona tudo isso
					</Typography>
					<Capa />
				</Box>
				<Botao.Primary text='Iniciar Etapa' onClick={handleUnlockBlock} />
			</Box>
			<Box ref={block1Ref}></Box>
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
						titulo=' Era Digital e Internet'
						texto='A Era Digital, também conhecida como Era da Informação, é o período atual da história caracterizado pela rápida transição da indústria tradicional para a economia baseada na informação e tecnologia. o. Suas principais características são o aumento da capacidade de armazenar e compartilhar dados e o impacto da integração global, que conecta pessoas em todo o mundo por meio da internet, promovendo o intercâmbio de informações, culturas e conhecimentos.'
					/>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Poppins, sans-serif',
							textAlign: 'center',
							width: '100%',
							textAlign: 'center',
							fontWeight: '300',
						}}
					>
						Clique noscards para saber quais as <b>principais caracteristicas:</b>
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							justifyContent: 'center',
							alignItems: 'center',
							gap: { xs: 10, md: 5, xl: 9 },
							marginBottom: 5,
						}}
					>
						<CardDinamico
							texto='Uso massivo da internet e dispositivos digitais'
							callback={e => addInteractics('CardDinamico-1')}
							isActive={LoggedUser.get().progress >= 2}
						/>
						<CardDinamico
							texto='Conectividade global e comunicação instantânea'
							callback={e => addInteractics('CardDinamico-2')}
							isActive={LoggedUser.get().progress >= 2}
						/>
						<CardDinamico
							texto='Automação e digitalização de processos'
							callback={e => addInteractics('CardDinamico-3')}
							isActive={LoggedUser.get().progress >= 2}
						/>
					</Box>

					<InterativeImageText
						image={image2}
						titulo='A Internet'
						texto='A internet tem suas origens no ARPANET, um projeto financiado pelo Departamento de Defesa dos EUA e criado pela ARPA (atualmente DARPA) para conectar computadores em universidades e institutos de pesquisa. O primeiro nó foi instalado na UCLA em 1969. A internet é formada por milhões de redes interconectadas, e cada dispositivo possui um endereço IP único para comunicação e identificação.'
						callback={e => addInteractics('InterativeImageText-1')}
						isActive={LoggedUser.get().progress >= 2}
					/>
					<InterativeImageText
						reverse
						image={image3}
						titulo='O Poder dos dados'
						texto='Na Era Digital, os dados são extremamente críticos e têm um impacto significativo em diversos aspectos do mundo atual. Eles são essenciais para a tomada de decisões informadas, personalização de serviços e inovação tecnológica. A segurança dos dados é fundamental, exigindo proteção contra perda e acesso não autorizado, bem como conformidade com regulamentações como a LGPD - (multas associadas a LGPD podem ser de até 2% do faturamento da empresa, limitado a R$ 50.000.000,00) por infração.'
						callback={e => addInteractics('InterativeImageText-2')}
						isActive={LoggedUser.get().progress >= 2}
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
						A segurança da informação se baseia em <b>três pilares principais:</b>{' '}
						confidencialidade, integridade e disponibilidade. Estes sustentam as práticas e
						políticas de proteção de dados nas empresas, servindo como parâmetros para guiar os
						processos.
					</Typography>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Poppins, sans-serif',
							textAlign: 'center',
							width: '100%',
							textAlign: 'center',
							fontWeight: '600',
						}}
					>
						Clique nos cards para saber mais sobre cada pilar:
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							justifyContent: 'center',
							alignItems: 'center',
							gap: { xs: 8, md: 3, xl: 5 },
						}}
					>
						<CardIcon
							img={confidencialidade}
							title={'Confidencialidade'}
							text={
								'A confidencialidade está relacionada a privacidade dos dados. Seu objetivo é restringir o acesso às informações, garantindo que ela chegue apenas às pessoas autorizadas.'
							}
							callback={e => addInteractics('CardIcon-1')}
							isActive={LoggedUser.get().progress >= 2}
						/>
						<CardIcon
							img={Integridade}
							title={'Integridade'}
							text={
								'A integridade está associada a veracidade e confiabilidade da informação, garantindo à preservação dos dados. Ela deve garantir que as informações estejam livres de qualquer alteração sem autorização, se mantendo conforme foram criadas.'
							}
							callback={e => addInteractics('CardIcon-2')}
							isActive={LoggedUser.get().progress >= 2}
						/>
						<CardIcon
							img={Disponibilidade}
							title={'Disponibilidade'}
							text={
								'A disponibilidade tem o foco de garantir que dados e sistemas ficarão acessíveis sempre que necessário, podendo ser acessados por qualquer pessoa ou processo autorizado quando for preciso.'
							}
							callback={e => addInteractics('CardIcon-3')}
							isActive={LoggedUser.get().progress >= 2}
						/>
					</Box>
					<Botao.Primary
						text='Continuar'
						onClick={interactics.length >= 8 ? handleUnlockBlock1 : null}
						disable={interactics.length < 8}
					/>
				</Box>
			)}
			<Box ref={block2Ref}></Box>
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
					<Subtitle text={'Por que a Segurança da Informação é Importante?'} />
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							justifyContent: 'center',
							alignItems: 'start',
							gap: { xs: 3, md: 3, xl: 5 },
						}}
					>
						<Typography
							variant='body1'
							sx={{
								fontFamily: 'Poppins, sans-serif',
								width: '100%',
								textAlign: 'justify',
								fontWeight: '300',
							}}
						>
							Vivemos na era dos dados. Toda ação digital que realizamos – desde o envio de
							e-mails até transações bancárias – gera dados valiosos. A proteção desses
							dados é essencial para evitar consequências como
						</Typography>
						<Typography
							variant='body1'
							sx={{
								fontFamily: 'Poppins, sans-serif',
								width: '100%',
								textAlign: 'justify',
								fontWeight: '300',
							}}
						>
							&#x2022; Roubo de identidade.<br></br>
							&#x2022; Vazamento de informações corporativas.<br></br>
							&#x2022; Perdas financeiras.<br></br>
							&#x2022; Comprometimento da privacidade.
						</Typography>
					</Box>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Poppins, sans-serif',
							textAlign: 'center',
							width: '100%',
							textAlign: 'center',
							fontWeight: '600',
						}}
					>
						Assista o video para entender melhor:
					</Typography>
					<IframePlayer
						videoUrl={
							'https://cursosmavi.nyc3.cdn.digitaloceanspaces.com/SEGURAN%C3%87A%20DA%20INFORMA%C3%87%C3%83O%20(online-video-cutter.com).mp4'
						}
						onVideoEnd={() => addInteractics('video')}
					/>
					<Botao.Primary
						text='Continuar'
						onClick={interactics.includes('video') ? handleUnlockBlock2 : null}
						disable={!interactics.includes('video')}
					/>
				</Box>
			)}
			<Box ref={block3Ref}></Box>
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
						gap: { xs: 2, md: 3, xl: 5 },
					}}
				>
					{' '}
					<Subtitle text={'Métodos e estratégias de ameaças virtuais'} />
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Poppins, sans-serif',
							width: '100%',
							textAlign: 'justify',
							fontWeight: '300',
						}}
					>
						A engenharia social é um método usado para enganar, manipular ou explorar a
						confiança das pessoas. É uma forma de ataque sem violência física que busca fazer
						com que a vítima realize voluntariamente ações prejudiciais a si mesma, como
						divulgar informações sensíveis ou transferir dinheiro para desconhecidos. Quando
						alguém convence uma pessoa a divulgar sua senha, está realizando uma ação de
						engenharia social. Se alguém obriga uma pessoa a dar sua senha sob ameaça de
						violência, isso não é engenharia social. Esses ataques exploram a confiança, a
						curiosidade e, muitas vezes, a falta de atenção do alvo. Conheça os 4 pilares da
						engenharia social navegando pelos slides:
					</Typography>
					<Slider />
					<InterativeImageText
						reverse
						image={image3}
						titulo='Tipos Comuns de Ataques'
						texto='Ataques cibernéticos, ou ciberataques, são ações maliciosas que se aproveitam da vulnerabilidade de sistemas e redes, assim como de seus usuários, para acessar ou danificar dados confidenciais, sejam eles pessoais ou empresariais. As tentativas de ataques são executadas por indivíduos ou organizações e podem apresentar objetivos criminosos, políticos ou pessoais.'
						callback={e => addInteractics('block3')}
						isActive={LoggedUser.get().progress >= 4}
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
						Esses objetivos incluem vazamento de dados, aplicação de golpes, roubo de
						identidade, extorsão, interrupção de serviços, comprometimento da reputação de
						empresas e espionagem corporativa.<b> Clique nas setas</b> e navegue pelo slide para
						ver alguns exemplos de ataques ciberneticos:
					</Typography>
					<Slider />
					<Botao.Primary
						text='Continuar'
						onClick={interactics.includes('block3') ? handleUnlockBlock3 : null}
						disable={!interactics.includes('block3')}
					/>
				</Box>
			)}
			<Box ref={block4Ref}></Box>
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
						gap: { xs: 2, md: 3, xl: 5 },
					}}
				>
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
						currentAnswer= {LoggedUser.get().progress >= 5 ? 'Confidencialidade' : ''}
						callback={e => addInteractics('quiz')}
					/>
					<Botao.Navigation
						text='Próximo Modulo'
						page={'Menu'}
						disable={!interactics.includes('quiz')}
						callback={() => changeProgress(5)}
					/>
				</Box>
			)}
		</Box>
	);
};

export default Modulo01;

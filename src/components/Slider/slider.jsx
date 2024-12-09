// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Keyboard } from 'swiper/modules';
// import { Box, Typography } from '@mui/material';
// import { useRef } from 'react';
// import Subtitle from '../Texts/subtitle';
// import slide1 from '../../assets/img/slide1.png';
// import slide2 from '../../assets/img/slide2.png';
// import slide3 from '../../assets/img/slide3.png';
// import slide4 from '../../assets/img/slide4.png';
// import slide5 from '../../assets/img/slide5.png';

// export const Slider = ({ isEnded }) => {
// 	const swiperRef = useRef(null);

// 	const handleSlideChange = () => {
// 		if (swiperRef.current && swiperRef.current.isEnd) {
// 			isEnded();
// 		}
// 	};

// 	return (
// 		<Box
// 			sx={{
// 				width: '100%',
// 			}}
// 		>
// 			<Swiper
// 				onSlideChange={handleSlideChange}
// 				slidesPerView={1}
// 				spaceBetween={30}
// 				onSwiper={swiper => (swiperRef.current = swiper)}
// 				keyboard={{
// 					enabled: true,
// 				}}
// 				pagination={{
// 					clickable: true,
// 				}}
// 				navigation={true}
// 				modules={[Keyboard, Pagination, Navigation]}
// 				className='mySwiper'
// 			>
// 				<SwiperSlide>
// 					<Box
// 						sx={{
// 							display: 'flex',
// 							flexDirection: 'row',
// 							gap: 5,
// 							p: { xs: '15%', md: '7%' },
// 							justifyContent: 'center',
// 							alignItems: 'center',
// 						}}
// 					>
// 						<Box
// 							sx={{
// 								width: { xs: 0, md: '15rem' },
// 								display: { xs: 'none', md: 'flex' },
// 							}}
// 						>
// 							<img src={slide1} alt='' style={{ width: '100%' }} />
// 						</Box>
// 						<Typography
// 							variant='body1'
// 							sx={{
// 								fontFamily: 'Poppins, sans-serif',
// 								color: '#FFF',
// 								textAlign: 'justify',
// 								width: { xs: '20rem', md: '35rem' },
// 								borderLeft: '4px solid #FFF',
// 								fontWeight: '200',
// 								paddingLeft: '2rem',
// 								display: 'flex',
// 								justifyContent: 'start',
// 								flexDirection: 'column',
// 								gap: 1,
// 								fontSize: { xs: '0.5rem', md: '0.8rem' },
// 								alignItems: 'start',
// 							}}
// 						>
// 							<Subtitle text='Phishing' />
// 							Phishing é um crime no qual uma pessoa mal-intencionada se passa por uma
// 							personalidade ou entidade confiável, com o objetivo de enganar pessoas para
// 							que compartilhem informações confidenciais, como senhas e números de contas
// 							bancárias.<br></br> Ou seja, o termo é uma analogia à pesca, na qual a pessoa
// 							maliciosa procura fisgar uma vítima utilizando estratégias persuasivas por
// 							meio de e-mails e mensagens de texto.
// 						</Typography>
// 					</Box>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<Box
// 						sx={{
// 							display: 'flex',
// 							flexDirection: 'row-reverse',
// 							gap: 5,
// 							p: { xs: '15%', md: '7%' },
// 							justifyContent: 'center',
// 							alignItems: 'center',
// 						}}
// 					>
// 						<Box
// 							sx={{
// 								width: { xs: 0, md: '15rem' },
// 								display: { xs: 'none', md: 'flex' },
// 							}}
// 						>
// 							<img src={slide2} alt='' style={{ width: '100%' }} />
// 						</Box>
// 						<Typography
// 							variant='body1'
// 							sx={{
// 								fontFamily: 'Poppins, sans-serif',
// 								color: '#FFF',
// 								textAlign: 'justify',
// 								width: { xs: '20rem', md: '35rem' },
// 								borderLeft: '4px solid #FFF',
// 								fontWeight: '200',
// 								paddingLeft: '2rem',
// 								display: 'flex',
// 								justifyContent: 'start',
// 								flexDirection: 'column',
// 								gap: 1,
// 								fontSize: { xs: '0.5rem', md: '0.8rem' },
// 								alignItems: 'start',
// 							}}
// 						>
// 							<Subtitle text='Baiting' />A isca atrai (sem trocadilho) as vítimas para,
// 							consciente ou involuntariamente, liberar informações confidenciais ou baixar
// 							código malicioso tentando-as com uma oferta valiosa ou até mesmo um objeto
// 							valioso.<br></br>O golpe do príncipe nigeriano é provavelmente o exemplo mais
// 							conhecido dessa técnica de engenharia social. Exemplos mais atuais são
// 							downloads de jogos, músicas ou software gratuitos, mas infectados por
// 							malware. 
// 						</Typography>
// 					</Box>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<Box
// 						sx={{
// 							display: 'flex',
// 							flexDirection: 'row',
// 							gap: 5,
// 							p: { xs: '15%', md: '7%' },
// 							justifyContent: 'center',
// 							alignItems: 'center',
// 						}}
// 					>
// 						<Box
// 							sx={{
// 								width: { xs: 0, md: '15rem' },
// 								display: { xs: 'none', md: 'flex' },
// 							}}
// 						>
// 							<img src={slide3} alt='' style={{ width: '100%' }} />
// 						</Box>
// 						<Typography
// 							variant='body1'
// 							sx={{
// 								fontFamily: 'Poppins, sans-serif',
// 								color: '#FFF',
// 								textAlign: 'justify',
// 								width: { xs: '20rem', md: '35rem' },
// 								borderLeft: '4px solid #FFF',
// 								fontWeight: '200',
// 								paddingLeft: '2rem',
// 								display: 'flex',
// 								justifyContent: 'start',
// 								flexDirection: 'column',
// 								gap: 1,
// 								fontSize: { xs: '0.5rem', md: '0.8rem' },
// 								alignItems: 'start',
// 							}}
// 						>
// 							<Subtitle text='Tailgating' />
// 							No tailgating, também chamado de "piggybacking" ou carona, uma pessoa não
// 							autorizada segue de perto uma pessoa autorizada em uma área que contém
// 							informações confidenciais ou ativos valiosos.<br></br> A utilização não
// 							autorizada pode ser conduzida pessoalmente, por exemplo, um criminoso pode
// 							seguir um funcionário e passar por uma porta destrancada. Mas o tailgating
// 							também pode ser uma tática digital, como quando uma pessoa deixa um computador
// 							sem supervisão enquanto ainda está conectado a uma conta ou rede privada.
// 						</Typography>
// 					</Box>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<Box
// 						sx={{
// 							display: 'flex',
// 							flexDirection: 'row-reverse',
// 							gap: 5,
// 							p: { xs: '15%', md: '7%' },
// 							justifyContent: 'center',
// 							alignItems: 'center',
// 						}}
// 					>
// 						<Box
// 							sx={{
// 								width: { xs: 0, md: '15rem' },
// 								display: { xs: 'none', md: 'flex' },
// 							}}
// 						>
// 							<img src={slide4} alt='' style={{ width: '100%' }} />
// 						</Box>
// 						<Typography
// 							variant='body1'
// 							sx={{
// 								fontFamily: 'Poppins, sans-serif',
// 								color: '#FFF',
// 								textAlign: 'justify',
// 								width: { xs: '20rem', md: '35rem' },
// 								borderLeft: '4px solid #FFF',
// 								fontWeight: '200',
// 								paddingLeft: '2rem',
// 								display: 'flex',
// 								justifyContent: 'start',
// 								flexDirection: 'column',
// 								gap: 1,
// 								fontSize: { xs: '0.5rem', md: '0.8rem' },
// 								alignItems: 'start',
// 							}}
// 						>
// 							<Subtitle text='Pretexting' />
// 							No pretexting, o criminoso cria uma situação falsa para a vítima e se
// 							apresenta como a pessoa certa para resolvê-la. Muitas vezes (e o mais
// 							irônico), o golpista alega que a vítima foi afetada por uma violação de
// 							segurança e, em seguida, oferece-se para corrigir tudo se a vítima liberar
// 							informações importantes da conta, ou controlar o computador ou dispositivo da
// 							vítima. Tecnicamente falando, quase todos os ataques de engenharia social
// 							envolvem algum grau de pretexting.
// 						</Typography>
// 					</Box>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<Box
// 						sx={{
// 							display: 'flex',
// 							flexDirection: 'row',
// 							gap: 5,
// 							p: { xs: '15%', md: '7%' },
// 							justifyContent: 'center',
// 							alignItems: 'center',
// 						}}
// 					>
// 						<Box
// 							sx={{
// 								width: { xs: 0, md: '15rem' },
// 								display: { xs: 'none', md: 'flex' },
// 							}}
// 						>
// 							<img src={slide5} alt='' style={{ width: '100%' }} />
// 						</Box>
// 						<Typography
// 							variant='body1'
// 							sx={{
// 								fontFamily: 'Poppins, sans-serif',
// 								color: '#FFF',
// 								textAlign: 'justify',
// 								width: { xs: '20rem', md: '35rem' },
// 								borderLeft: '4px solid #FFF',
// 								fontWeight: '200',
// 								paddingLeft: '2rem',
// 								display: 'flex',
// 								justifyContent: 'start',
// 								flexDirection: 'column',
// 								gap: 1,
// 								fontSize: { xs: '0.5rem', md: '0.8rem' },
// 								alignItems: 'start',
// 							}}
// 						>
// 							<Subtitle text='Scareware' />
// 							Também considerado uma forma de malware, o scareware é um software que usa o
// 							medo para manipular as pessoas para compartilhar informações confidenciais ou
// 							baixar malware.<br></br> O scareware frequentemente assume a forma de um aviso
// 							falso de segurança pública acusando o usuário de um crime, ou uma mensagem
// 							falsa do suporte técnico avisando o usuário sobre malware em seu dispositivo
// 						</Typography>
// 					</Box>
// 				</SwiperSlide>
// 			</Swiper>
// 		</Box>
// 	);
// };

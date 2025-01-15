import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Box, Typography } from '@mui/material';
import { useRef } from 'react';
import Subtitle from '../Texts/subtitle';
import slide1 from '../../assets/img/S2I1.png';
import slide2 from '../../assets/img/S2I2.png';
import slide3 from '../../assets/img/S2I3.png';
import slide4 from '../../assets/img/S2I4.png';
import slide5 from '../../assets/img/S2I5.png';

export const Slider2 = ({ isEnded }) => {
	const swiperRef = useRef(null);

	const handleSlideChange = () => {
		if (swiperRef.current && swiperRef.current.isEnd) {
			isEnded();
		}
	};

	return (
		<Box
			sx={{
				width: '100%',
			}}
		>
			<Swiper
				onSlideChange={handleSlideChange}
				slidesPerView={1}
				spaceBetween={30}
				onSwiper={swiper => (swiperRef.current = swiper)}
				keyboard={{
					enabled: true,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Keyboard, Pagination, Navigation]}
				className='mySwiper'
			>
				<SwiperSlide>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							gap: 5,
							p: { xs: '15%', md: '7%' },
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								width: { xs: 0, md: '15rem' },
								display: { xs: 'none', md: 'flex' },
							}}
						>
							<img src={slide1} alt='' style={{ width: '100%' }} />
						</Box>
						<Typography
							variant='body1'
							sx={{
								fontFamily: 'Poppins, sans-serif',
								color: '#FFF',
								textAlign: 'justify',
								width: { xs: '20rem', md: '35rem' },
								borderLeft: '4px solid #FFF',
								fontWeight: '200',
								paddingLeft: '2rem',
								display: 'flex',
								justifyContent: 'start',
								flexDirection: 'column',
								gap: 1,
								fontSize: { xs: '0.5rem', md: '0.8rem' },
								alignItems: 'start',
							}}
						>
							<Subtitle text='Phishing Tradicional' />
							O phishing tradicional envolve o envio de e-mails fraudulentos ou mensagens de texto que se passam por uma empresa ou instituição confiável, como bancos, lojas online ou serviços públicos. O objetivo é enganar os destinatários para que eles revelem informações pessoais, como senhas, números de cartão de crédito ou dados bancários.
						</Typography>
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row-reverse',
							gap: 5,
							p: { xs: '15%', md: '7%' },
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								width: { xs: 0, md: '15rem' },
								display: { xs: 'none', md: 'flex' },
							}}
						>
							<img src={slide2} alt='' style={{ width: '100%' }} />
						</Box>
						<Typography
							variant='body1'
							sx={{
								fontFamily: 'Poppins, sans-serif',
								color: '#FFF',
								textAlign: 'justify',
								width: { xs: '20rem', md: '35rem' },
								borderLeft: '4px solid #FFF',
								fontWeight: '200',
								paddingLeft: '2rem',
								display: 'flex',
								justifyContent: 'start',
								flexDirection: 'column',
								gap: 1,
								fontSize: { xs: '0.5rem', md: '0.8rem' },
								alignItems: 'start',
							}}
						>
							<Subtitle text='Spear Phishing' />
Ao contrário do phishing tradicional, que é enviado em massa, o spear phishing é um ataque mais direcionado. O criminoso personaliza a mensagem de phishing com informações específicas sobre a vítima, como seu nome, cargo ou detalhes da empresa, para torná-la mais convincente. Esse tipo de ataque é geralmente realizado em uma organização ou indivíduo específico, tornando-o mais perigoso.
						</Typography>
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							gap: 5,
							p: { xs: '15%', md: '7%' },
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								width: { xs: 0, md: '15rem' },
								display: { xs: 'none', md: 'flex' },
							}}
						>
							<img src={slide3} alt='' style={{ width: '100%' }} />
						</Box>
						<Typography
							variant='body1'
							sx={{
								fontFamily: 'Poppins, sans-serif',
								color: '#FFF',
								textAlign: 'justify',
								width: { xs: '20rem', md: '35rem' },
								borderLeft: '4px solid #FFF',
								fontWeight: '200',
								paddingLeft: '2rem',
								display: 'flex',
								justifyContent: 'start',
								flexDirection: 'column',
								gap: 1,
								fontSize: { xs: '0.5rem', md: '0.8rem' },
								alignItems: 'start',
							}}
						>
							<Subtitle text='Phishing por SMS (Smishing)' />
							O smishing é uma forma de phishing que ocorre por meio de mensagens de texto (SMS). Nesse caso, os criminosos enviam mensagens fraudulentas que podem conter links maliciosos ou solicitações de informações pessoais, como senhas e números de cartão de crédito. Como as mensagens de texto são frequentemente vistas como mais confiáveis, muitas vítimas caem nesse tipo de golpe.
						</Typography>
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row-reverse',
							gap: 5,
							p: { xs: '15%', md: '7%' },
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								width: { xs: 0, md: '15rem' },
								display: { xs: 'none', md: 'flex' },
							}}
						>
							<img src={slide4} alt='' style={{ width: '100%' }} />
						</Box>
						<Typography
							variant='body1'
							sx={{
								fontFamily: 'Poppins, sans-serif',
								color: '#FFF',
								textAlign: 'justify',
								width: { xs: '20rem', md: '35rem' },
								borderLeft: '4px solid #FFF',
								fontWeight: '200',
								paddingLeft: '2rem',
								display: 'flex',
								justifyContent: 'start',
								flexDirection: 'column',
								gap: 1,
								fontSize: { xs: '0.5rem', md: '0.8rem' },
								alignItems: 'start',
							}}
						>
							<Subtitle text='Phishing por Telefone (Vishing)' />
							O vishing, ou phishing por telefone, envolve um golpista que liga para a vítima se passando por uma autoridade confiável, como um representante de banco, uma empresa de serviços públicos ou até mesmo um agente governamental. O objetivo é convencer a vítima a fornecer informações pessoais sensíveis, como números de conta, senhas ou até mesmo transferir dinheiro.
						</Typography>
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							gap: 5,
							p: { xs: '15%', md: '7%' },
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								width: { xs: 0, md: '15rem' },
								display: { xs: 'none', md: 'flex' },
							}}
						>
							<img src={slide5} alt='' style={{ width: '100%' }} />
						</Box>
						<Typography
							variant='body1'
							sx={{
								fontFamily: 'Poppins, sans-serif',
								color: '#FFF',
								textAlign: 'justify',
								width: { xs: '20rem', md: '35rem' },
								borderLeft: '4px solid #FFF',
								fontWeight: '200',
								paddingLeft: '2rem',
								display: 'flex',
								justifyContent: 'start',
								flexDirection: 'column',
								gap: 1,
								fontSize: { xs: '0.5rem', md: '0.8rem' },
								alignItems: 'start',
							}}
						>
							<Subtitle text='Website Spoofing' />
							 O website spoofing envolve a criação de uma página da web falsa que imita um site legítimo, como um banco, uma loja online ou uma plataforma de pagamento. O objetivo é enganar as vítimas para que elas insiram suas credenciais ou outras informações confidenciais, como números de cartão de crédito ou CPF. Muitas vezes, os sites fraudulentos são quase idênticos aos originais, com apenas pequenas variações no URL.
						</Typography>
					</Box>
				</SwiperSlide>
			</Swiper>
		</Box>
	);
};

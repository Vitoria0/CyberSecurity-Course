import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Box, Typography } from '@mui/material';
import { useRef } from 'react';
import Subtitle from '../Texts/subtitle';
import slide1 from '../../assets/img/Slide11.png';
import slide2 from '../../assets/img/Slide21.png';
import slide3 from '../../assets/img/Slide31.png';
import slide4 from '../../assets/img/Slide41.png';
import slide5 from '../../assets/img/Slide51.png';

export const Slider1 = ({ isEnded }) => {
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
							<Subtitle text='Vírus e Malwares' />
							Softwares maliciosos desenvolvidos para infectar dispositivos, replicar-se e causar danos ao sistema, roubo de informações ou controle remoto.
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
							<Subtitle text='Ataques de DDoS' />
Consiste em sobrecarregar servidores ou redes com uma quantidade massiva de solicitações para torná-los inacessíveis. Exemplo: Indisponibilidade de sites comerciais durante datas importantes como Black Friday.
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
							<Subtitle text='Spyware' />
							 Software que coleta informações de um dispositivo sem o conhecimento do usuário. Pode monitorar teclas digitadas, capturar senhas ou acessar arquivos.
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
							<Subtitle text='Ataques Man-in-the-Middle' />
							Quando o invasor intercepta a comunicação entre duas partes para roubar dados ou alterar informações.
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
							<Subtitle text='SQL Injection' />
							 Técnica que insere comandos maliciosos em campos de entrada de sistemas web para acessar bancos de dados e extrair informações.
						</Typography>
					</Box>
				</SwiperSlide>
			</Swiper>
		</Box>
	);
};

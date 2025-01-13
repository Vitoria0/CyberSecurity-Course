import { Box, IconButton, Typography } from '@mui/material';
import { useEffect } from 'react';
import background from '../../assets/img/Finalizacao.png';
import Title from '../../components/Texts/title';
import modulo01 from '../../assets/img/modulo01.png';
import modulo02 from '../../assets/img/modulo02.png';
import modulo03 from '../../assets/img/modulo03.png';
import modulo04 from '../../assets/img/modulo04.png';
import { useNavigation } from '../../hooks/NavigationContext';
import { LoggedUser, logout } from '../../services/authService';
import { ExitToAppRounded } from '@mui/icons-material';
const Menu = () => {
	const { navigateTo } = useNavigation();

	useEffect(() => {
		// Atualiza o LoggedUser sempre que o componente é carregado
		async function fetchUserData() {
		  try {
			const user = LoggedUser.get();
			console.log('Dados do usuário atualizados:', user);
		  } catch (error) {
			console.error('Erro ao atualizar dados do usuário:', error);
		  }
		}
	
		fetchUserData();
	  }, []);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				background: '#030012',
				backgroundImage: `url(${background})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				alignItems: 'center',
				minHeight: '100vh',
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
					margin: 0,
					padding: 0,
					color: '#fff',
					gap: 20,
					transition: 'all 700ms ease-in-out',
				}}
			>
				<Box
					sx={{
						alignItems: 'center',
						width: '100%',
						gap: 2,
						margin: {xs:'5rem 0' , md:'0 auto'},
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
					}}
				>
					  <IconButton
							onClick={() => {
								logout();
								navigateTo('Homepage');
							}}
							sx={{
							borderRadius: '50%',
							backgroundColor: '#14F194',
							color: 'white',
							padding: '10px',
								position: 'absolute',
							top: '20px',
							right: '15px',
							cursor: 'pointer',
							transition: 'all 200ms ease-in-out',

							'&:hover': {
								backgroundColor: '#14F194',
							},
							}}
						>
							<ExitToAppRounded />
						</IconButton>
					<Title text='Segurança da Informação' />
					<Typography variant='body1' color='white' align='center' maxWidth='50rem'>
						Conforme você vai avançando no conteudo os modulos serão desbloqueados.<br></br>
						Clique no modulo abaixo para acessa-lo:
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							flexWrap: { xs: 'wrap', sm: 'nowrap' },
							justifyContent: 'center',
							alignItems: 'center',
							gap: 2,
							margin: '0 auto',
							width: { xs: '80%', md: '70%' },
						}}
					>
						<ModuloMenu
							onClick={() => navigateTo('Modulo01')}
							image={modulo01}
							nomeModulo='Mundo Digital'
							isIncomplete={LoggedUser.get().progress < 5}
						/>
						<ModuloMenu
							onClick={() => navigateTo('Modulo02')}
							image={modulo02}
							nomeModulo='Como Se Proteger'
							isIncomplete={LoggedUser.get().progress < 15}
							isBlocked={LoggedUser.get().progress < 5}
						/>
						<ModuloMenu
							onClick={() => navigateTo('Modulo03')}
							image={modulo03}
							nomeModulo='Dispositivos Moveis e Redes sem Fio'
							isBlocked={LoggedUser.get().progress < 15}
							isIncomplete={LoggedUser.get().progress < 18}
						/>
						<ModuloMenu
							onClick={() => navigateTo('Modulo04')}
							image={modulo04}
							nomeModulo='Ambiente Corporativo'
							isBlocked={LoggedUser.get().progress < 18}
							isIncomplete={true}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Menu;

const ModuloMenu = ({ onClick, image, nomeModulo, isBlocked, isIncomplete }) => {
	const handleClick = () => {
		if (!isBlocked) {
			onClick();
		}
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 2,
				margin: '0 auto',
				width: { xs: '40%', md: '25%' },
				height: '50vh',
				backgroundImage: `url(${image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				borderRadius: 5,
				padding: 2,
				cursor: isBlocked ? 'not-allowed' : 'pointer',
				pointerEvents: isBlocked ? 'none' : 'auto',
				filter: isIncomplete || isBlocked ? 'grayscale(100%)' : 'none',
				opacity: isBlocked ? 0.3 : 1,
				transition: 'all 300ms ease-in-out',
				position: 'relative',
				':hover': {
					width: '50%',
					filter: isIncomplete ? 'saturate(100%)' : 'none',
				},
			}}
			onClick={handleClick}
		>
			<Box
				sx={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					width: '100%',
					height: '100%',
					zIndex: 1,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'end',
					background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
					borderRadius: '0 0 5px 5px',
					transform: 'translateY(20px)',
					transition: 'transform 0.3s ease, opacity 0.3s ease',
					opacity: 0,
					':hover': {
						opacity: 1,
						transform: 'translateY(0)',
						visibility: 'visible',
					},
				}}
			>
				<Typography
					sx={{
						color: 'white',
						fontSize: '1.2rem',
						fontWeight: 'bold',
						textAlign: 'center',
						paddingBottom: '1rem',
					}}
				>
					{nomeModulo}
				</Typography>
			</Box>
		</Box>
	);
};

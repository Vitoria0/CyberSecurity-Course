import { useState, useEffect } from 'react';
import { Box, Typography, TextField, Link, Button, InputAdornment, IconButton } from '@mui/material';
import background from '../../assets/img/Finalizacao.png';
import Title from '../../components/Texts/title';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import img from '../../assets/img/login.png';
import { useNavigation } from '../../hooks/NavigationContext';

const Homepage = () => {
const { navigateTo } = useNavigation(); 
	const [isVisible, setIsVisible] = useState(false);
	const [isLogin, setIsLogin] = useState(true);  
	const [formData, setFormData] = useState({ email: '', password: '', name: '' });
	const [showPassword, setShowPassword] = useState(false); 
	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timeout);
	}, []);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prevData => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = e => {
		e.preventDefault();  
		if (isLogin) { 
			navigateTo('Menu')
		} else { 
			console.log('Cadastro realizado:', formData);
			setIsLogin(true);  
		}
	};

	const toggleForm = () => {
		setIsLogin(!isLogin);
	};
 
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				backgroundImage: `url(${background})`,
				backgroundSize: { xs: 'cover', md: '100vw' },
				backgroundRepeat: 'no-repeat',
				alignItems: 'center',
				width: '100%',
				height: '100%',
				margin: 0,
				padding: 0,
				color: '#fff',
				gap: 2,
			}}
		>
			<Box
				sx={{
					alignItems: 'start',
					width: '80%',
					gap: 2,
					margin: '0 auto',
					display: 'flex',
					justifyContent: 'start',
					flexDirection: 'column',
					transition: 'all 700ms ease-in-out',
					transform: isVisible ? 'scale(1)' : 'scale(0.5)',
					opacity: isVisible ? 1 : 0,
				}}
			>
				<Title text='Segurança da Informação' />
				<Typography variant='body1' color='white' align='left'>
					{isLogin
						? 'Faça login para acessar o curso'
						: 'Cadastre-se para acessar o curso e não perder seu progresso!'}
				</Typography>
				<Box
					sx={{
						width: '100%', 
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'start', 
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 3,
							width: '100%',
							maxWidth: '450px',
						}}
					>
						<form onSubmit={handleSubmit}>
							{!isLogin && (
								<TextField
									label='Nome'
									variant='outlined'
									color='primary'
									fullWidth
									margin='normal'
									name='name'
									value={formData.name}
									onChange={handleChange}
								/>
							)}
							<TextField
								label='Email'
								variant='outlined'
								color='primary'
								fullWidth
								margin='normal'
								name='email'
								value={formData.email}
								onChange={handleChange}
							/>
							<TextField
								label='Senha'
								type={showPassword ? 'text' : 'password'}
								variant='outlined'
								color='secondary'
								fullWidth
								margin='normal'
								name='password'
								value={formData.password}
								onChange={handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<IconButton
												aria-label='toggle password visibility'
												onClick={handleClickShowPassword}
												edge='end'
												sx={{
													'&:focus': { border: 'none' },
												}}
											>
												{showPassword ? (
													<VisibilityOff
														sx={{
															color: '#fff',
															'&:focus': { border: 'none' },
														}}
													/>
												) : (
													<Visibility
														sx={{
															color: '#fff',
															'&:focus': { border: 'none' },
														}}
													/>
												)}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
							<Button
								type='submit'
								variant='contained'
								color='primary'
								fullWidth
								sx={{ marginTop: 2 }}
							>
								{isLogin ? 'Entrar' : 'Cadastrar'}
							</Button>
						</form>
						<Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
							<Link component='button' variant='body2' color='primary' onClick={toggleForm}>
								{isLogin ? 'Cadastrar-se' : 'Já tenho uma conta'}
							</Link>
							<Link
								component='button'
								variant='body2'
								color='primary'
								onClick={() => alert('Redirecionar para o "Esqueci a senha"')}
							>
								Esqueci a senha
							</Link>
						</Box>
					</Box>
					<Box
						sx={{
							width: '40%', 
							display: {xs: 'none', lg: 'flex'},
							justifyContent: 'center', 
							height: '20rem',
							alignItems: 'center',
							flexDirection: 'column', 

						}}
					>
						<img src={img} style={{ width: '100%',  objectFit: 'contain', transform: 'translateX(-5rem)' }} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Homepage;

import { useState, useEffect } from 'react';
import {
	Box,
	Typography,
	TextField,
	Link,
	Button,
	InputAdornment,
	IconButton,
	CircularProgress,
	Alert,
} from '@mui/material';
import background from '../../assets/img/Finalizacao.png';
import Title from '../../components/Texts/title';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import img from '../../assets/img/login.png';
import { useNavigation } from '../../hooks/NavigationContext';
import { loginWithEmailAndPassword, createUserWithEmailAndPassword, LoggedUser } from '../../services/authService';

const Homepage = () => {
	const { navigateTo } = useNavigation();
	const [isVisible, setIsVisible] = useState(false);
	const [isLogin, setIsLogin] = useState(true);
	const [formData, setFormData] = useState({ email: '', password: '', name: '' });
	const [showPassword, setShowPassword] = useState(false);
	const [isPaying, setIsPaying] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 100);
		return () => clearTimeout(timeout);
	}, []);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prevData => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setIsLoading(true);
		setError('');
		try {
			if (isLogin) {
				await loginWithEmailAndPassword(formData.email, formData.password);
				if (LoggedUser.get()) {
					if (isPaying) {
						// Se ele pagou
						navigateTo('Menu');
					} else {
						setIsPaying(true);
					}
				} else {
					setError('Usuário ou senha incorretos');
				}
			} else {
				const user = await createUserWithEmailAndPassword(
					formData.name,
					formData.email,
					formData.password,
				);
				if (user !== null) {
					setIsLogin(true);
				} else {
					setError('Erro ao criar conta. Tente novamente.');
				}
			}
		} catch (error) {
			if (error.code === 'auth/invalid-credential') {
				setError('Usuário ou senha incorretos');
			} else {
				setError('Ocorreu um erro. Tente novamente.');
			}
		} finally {
			setIsLoading(false);
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
					alignItems: isPaying ? 'center' : 'start',
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

				{isPaying ? (
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: 2,
							padding: 2,
							background: '#FFF',
							borderRadius: 2,
							maxWidth: '400px',
						}}
					>
						<Typography variant='body1' color='#000' align='left' gutterBottom>
							Estamos muito felizes em tê-lo(a) conosco! Para aproveitar todo o conteúdo do
							curso, é necessário realizar o pagamento. Caso ainda não tenha feito, clique
							no botão abaixo para concluir essa etapa.
						</Typography>
						<Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, width: '100%' }}>
							<Button
								variant='outlined'
								onClick={() => {
									setIsPaying(false);
								}}
								color='primary'
								sx={{
									px: { xs: 1, sm: 1.5, md: 2, xl: 3 },
									py: { xs: 1, sm: 1, md: 1.5 },
									borderRadius: '10px'
								}}
							>
								Voltar
							</Button>
							<Button
								variant='contained'
								color='primary'
								href='https://w.app/OVacNf'
								target='_blank'
								rel='noopener noreferrer'
								sx={{
									color: '#FFF',
									px: { xs: 1, sm: 1.5, md: 2, xl: 3 },
									py: { xs: 1, sm: 1, md: 1.5 },
									borderRadius: '10px',
									boxShadow: '0px 10px 10px #FE706270',
									transition: 'all 200ms ease-in-out',
									'&:hover': {
										border: 0,
										transform: 'scale(1.03)',
										color: '#FFF',
									},
									'&:focus': {
										outline: 'none',
										color: '#FFF',
									},
								}}
							>
								Realizar Pagamento
							</Button>
						</Box>
					</Box>
				) : (
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
																'&:focus': {
																	border: 'none',
																},
															}}
														/>
													) : (
														<Visibility
															sx={{
																color: '#fff',
																'&:focus': {
																	border: 'none',
																},
															}}
														/>
													)}
												</IconButton>
											</InputAdornment>
										),
									}}
								/>
								{error && (
									<Alert severity='error' sx={{ marginTop: 2 }}>
										{error}
									</Alert>
								)}
								<Button
									type='submit'
									variant='contained'
									color='primary'
									fullWidth
									sx={{ marginTop: 2 }}
								>
									{isLoading ? (
										<CircularProgress size={24} sx={{ color: '#fff' }} />
									) : isLogin ? (
										'Entrar'
									) : (
										'Cadastrar'
									)}
								</Button>
							</form>
							<Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
								<Link
									component='button'
									variant='body2'
									color='primary'
									onClick={toggleForm}
								>
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
								display: { xs: 'none', lg: 'flex' },
								justifyContent: 'center',
								height: '20rem',
								alignItems: 'center',
								flexDirection: 'column',
							}}
						>
							<img
								src={img}
								style={{
									width: '100%',
									objectFit: 'contain',
									transform: 'translateX(-5rem)',
								}}
							/>
						</Box>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default Homepage;

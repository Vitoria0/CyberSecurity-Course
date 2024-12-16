import { useState } from 'react';
import { Box, Typography } from '@mui/material';

const CardDinamico = ({ titulo, texto }) => {
	const [showTitle, setShowTitle] = useState(true);

	const handleCardClick = () => {
		setShowTitle(!showTitle);
	};

	return (
		<Box
			onClick={handleCardClick}
			sx={{
				width: '200px',
				margin: '10px',
				aspectRatio: '1/1',
				position: 'relative',
				boxShadow: showTitle ? 'none' : '10px 10px 30px 10px #14F194, -20px -20px 30px 10px #AD61FF',
				cursor: 'pointer',
				transition: 'all 0.3s ease-in-out',
				':hover': {
					boxShadow: '10px 10px 30px 10px #14F194, -20px -20px 30px 10px #AD61FF',
				},
			}}
		>
			<Box
				sx={{
					display: showTitle ? 'hidden' : 'flex',
					position: 'absolute',
					top: -25,
					left: -25,
					right: 0,
					aspectRatio: '1/1',
					bottom: 0,
					width: '120%',
					display: 'flex',
					clipPath: 'polygon(0 0, 92% 0, 100% 10%, 100% 89%, 100% 100%, 10% 100%, 0 90%, 0 12%)',
					overflow: 'hidden',
					border: '1px solid #14F194',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
					color: 'white',
					backgroundColor: '#14F194',
					padding: '2px',
					fontSize: '1rem',
					fontWeight: 'bold',
					transition: 'opacity 0.5s ease-in-out',
				}}
			>
				<Box
					sx={{
						clipPath: 'polygon(0 0, 92% 0, 100% 10%, 100% 89%, 100% 100%, 10% 100%, 0 90%, 0 12%)',

						height: '100%',
						bottom: 0,
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
						color: 'white',
						backgroundColor: '#1A1624',
						position: 'relative',
					}}
				>
					<Typography
						sx={{
							padding: '20px',
							textAlign: 'center',
							fontSize: '1rem',
							fontFamily: 'Poppins',
							fontWeight: '200',
							opacity: showTitle ? 1 : 0,
							transition: 'all 0.3s ease-in-out',
							position: 'absolute',
						}}
					>
						{titulo}
					</Typography>
					<Typography
						variant='body1'
						sx={{
							padding: '20px',
							textAlign: 'center',
							fontSize: '1rem',
							fontFamily: 'Poppins',
							fontWeight: '200',
							opacity: showTitle ? 0 : 1,
							transition: 'all 0.3s ease-in-out',
							position: 'absolute',
							fontSize:14
						}}
					>
						{texto}
					</Typography>
				</Box>{' '}
			</Box>
		</Box>
	);
};

export default CardDinamico;

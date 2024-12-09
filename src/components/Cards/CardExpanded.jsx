import { Box, Typography } from '@mui/material';
import { useState } from 'react';

export const CardExpanded = ({ img, title, text }) => {
	const [isClicked, setIsClicked] = useState(false);

	const handleCardClick = () => {
		setIsClicked(prev => !prev);
	};

	return (
		<Box
			onClick={handleCardClick}
			sx={{
				width: '20rem',
				height: isClicked ? '11.5rem' : '4.5rem',
				overflow: 'hidden',
				borderRadius: 3,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'start',
				border: `2px solid #FFF`,
				borderImage: 'linear-gradient(90deg, #14F194, #AD61FF) 1 radius 3',
				padding: 2,
				backgroundColor: isClicked ? '#280F77' : '#280F77',
				boxShadow: isClicked ? '0px 4px 20px rgba(47, 27, 102, 0.7)' : 'none',
				filter: isClicked ? 'saturate(1)' : 'saturate(0)',
				position: 'relative',
				cursor: 'pointer',
				transition: 'all 0.3s ease-in-out',
				color: isClicked ? '#FFF' : 'transparent',
				'&:hover': {
					transform: 'scale(1.05)',
				},
				gap: 2,
			}}
		>
			<Typography
				variant='h6'
				sx={{
					fontFamily: 'Tektur, sans-serif',
					color: '#14F194',
					textAlign: 'center',
					fontWeight: 'bold',
				}}
			>
				{title}
			</Typography>
			<Typography
				variant='body1'
				sx={{
					fontFamily: 'Poppins, sans-serif',
					color: isClicked ? '#FFF' : 'transparent',
					fontWeight: '200',
					textAlign: 'center',
					// opacity: isClicked ? 1 : 0,
					transition: 'all 0.3s ease-in-out',
				}}
			>
				{text}
			</Typography>
		</Box>
	);
};

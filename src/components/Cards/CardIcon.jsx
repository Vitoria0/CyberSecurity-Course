import { Box, Typography } from '@mui/material';
import { useState } from 'react';

export const CardIcon = ({ img, title, text, callback, isActive = false }) => {
	const [isClicked, setIsClicked] = useState(isActive);

	const handleCardClick = () => {
		callback(title);
		setIsClicked(prev => !prev);
	};

	return (
		<Box
			onClick={handleCardClick}
			sx={{
				width: '15rem',
				height: '20rem', 
				borderRadius: 3,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'end',
				border: `2px solid #FFF`,
				borderImage: 'linear-gradient(90deg, #14F194, #AD61FF) 1 radius 3',
				padding: 2,
				marginX: 2,
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
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					top: 10,
					left: 20,
					width: '8rem',
					height: '8rem',
					transform: isClicked
						? 'translateY(-3rem) translateX(-4rem)'
						: 'translateY(5rem) translateX(2rem)',
					transition: 'all 0.3s ease-in-out',
					filter: isClicked ? 'saturate(1)' : 'saturate(0)',
				}}
			>
				<img src={img} style={{ width: '100%' }} alt='icon' />
			</Box>
			<Typography
				variant='body1'
				sx={{
					fontFamily: 'Poppins, sans-serif',
					color: isClicked ? '#FFF' : 'transparent',
					fontWeight: '200',
					textAlign: 'center',
					fontSize: '0.8rem',
					opacity: isClicked ? 1 : 0,
					transition: 'all 0.3s ease-in-out',
				}}
			>
				<strong>{title}</strong>
				<br></br>
				<br></br>
				{text}
			</Typography>
		</Box>
	);
};

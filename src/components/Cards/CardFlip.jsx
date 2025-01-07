// src/components/CardFlip.jsx
import { useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const CardFlip = ({ frontText, backText, callback }) => {
	const [flipped, setFlipped] = useState(false);

	const handleFlip = () => {
		setFlipped(prev => !prev);
		callback();
	};

	return (
		<Box
			sx={{
				perspective: '1000px',
				width: 200,
				height: 300,
				cursor: 'pointer',
				margin: 'auto',
			}}
			onClick={handleFlip}
		>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					position: 'relative',
					transformStyle: 'preserve-3d',
					transition: 'transform 0.6s',
					transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
				}}
			>
				{/* Front Side */}
				<Card
					sx={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						backfaceVisibility: 'hidden',
						display: 'flex',
						border: 'solid 3px #565656',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: 8,
						backgroundColor: '#1C152E80',
						color: '#fff',
					}}
				>
					<CardContent>
						<Typography variant='h6' component='div' textAlign='center'sx={{fontFamily: 'Poppins', fontWeight: '500'}}>
							{frontText}
						</Typography>
					</CardContent>
				</Card>

				{/* Back Side */}
				<Card
					sx={{
						position: 'absolute',
						width: '100%',
						borderRadius: 8,
						border: 'solid 3px #AD61FF',
						height: '100%',
						backfaceVisibility: 'hidden',
						transform: 'rotateY(180deg)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#1C152E80',
						color: '#fff',
					}}
				>
					<CardContent>
						<Typography
							sx={{ 
								textAlign: 'center',
								fontSize: '1rem',
								fontFamily: 'Poppins',
								fontWeight: '200',  
							}}
						>
							{backText}
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</Box>
	);
};

export default CardFlip;

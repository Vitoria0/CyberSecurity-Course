import { Typography } from '@mui/material';

const Title = ({ text }) => {
	return (
		<Typography
			variant='h2'
			sx={{
				fontFamily: 'Tektur, sans-serif',
				backgroundImage: 'linear-gradient(to bottom, #AD61FF, #14F194)',
				color: 'transparent',
				backgroundClip: 'text',
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
				textAlign: 'center',
				fontWeight: 'bold',
			}}
		>
			{text}
		</Typography>
	);
};

export default Title;

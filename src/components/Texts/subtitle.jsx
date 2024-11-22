import { Typography } from '@mui/material';

const Subtitle = ({ text }) => {
	return (
		<Typography
			variant='h4'
			sx={{
				fontFamily: 'Tektur, sans-serif',
				color: '#14F194',
				textAlign: 'center',
				fontWeight: 'bold',
			}}
		>
			{text}
		</Typography>
	);
};

export default Subtitle;

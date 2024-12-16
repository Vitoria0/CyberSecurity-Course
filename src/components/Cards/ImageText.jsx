import { Box, Typography } from '@mui/material';
import Subtitle from '../Texts/subtitle';

export const ImageText = ({ reverse, image, titulo, texto }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: { md: reverse ? 'row-reverse' : 'row' },
				justifyContent: reverse ? 'flex-end' : 'flex-start',
				alignItems: 'center',
				width: '100%',
				gap: '3rem',
			}}
		>
			<Box
				sx={{
					width: '25%',
					aspectRatio: '1/1',
					display: { xs: 'none', md: 'flex' },
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '1rem',
					border: '5px solid #AD61FF',
					padding: '1rem',
				}}
			>
				<img src={image} alt='ilustração' style={{ width: '100%' }} />
			</Box>
			<Box
				sx={{
					width: { xs: '100%', md: '75%' },
					paddingLeft: {xs: '0rem', md: '1rem'},
				}}
			>
				<Subtitle text={titulo} />
				<Typography
					variant='body1'
					sx={{
						fontFamily: 'Poppins, sans-serif',
						borderLeft: 'solid 3px #FFF',
						marginTop: '1rem',
						paddingLeft: '1rem',
						textAlign: 'start',
lineHeight: '1.2',
						textAlign: 'justify',
						fontWeight: '300',
					}}
				>
					{texto}
				</Typography>
			</Box>
		</Box>
	);
};

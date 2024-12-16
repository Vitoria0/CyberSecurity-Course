import { Box, Typography } from '@mui/material';
import Subtitle from '../Texts/subtitle';
import { useState } from 'react';

export const InterativeImageText = ({ reverse, image, titulo, texto }) => {
    const [visible, setVisibles] = useState(false); 

    const handleClick = () => {
        setVisibles(!visible);
    }



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
					padding: '1rem',
                    gap: '1rem',
                    flexDirection: 'column',

				}}
			>
                <Typography variant='body1' sx={{color: '#FFF', fontWeight: 'bold'}}>
                    Clique na imagem:
                </Typography>
				<img src={image}   className={visible ? '' : 'pulse-animation'} alt='ilustração' style={{ width: '100%', transition: 'transform 0.3s ease-in-out', cursor: 'pointer',  }} onClick={handleClick}/>
			</Box>
			<Box
				sx={{
					width: { xs: '100%', md: '75%' },
					paddingLeft: '1rem',
					opacity: visible ? 1 : 0,
					transition: 'opacity 0.5s ease-in-out',

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

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import portraits from '~src/pages/Guests/CharacterPortraits';

interface Portraits {
	[key: string]: any;
}

export const CharacterPortrait = ({ character }: { character: string }) => {
	const portrait = (portraits as Portraits)[character];

	return (
		<Grid item xs={12} sm={4}>
			<Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
				<img src={portrait} alt="Character Picture" style={{ width: '100%', objectFit: 'cover', borderRadius: '10px' }} />
			</Box>
		</Grid>
	);
};

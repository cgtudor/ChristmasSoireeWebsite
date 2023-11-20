import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import portraits from '~src/assets/images/GuestPortraits';

interface Portraits {
	[key: string]: any;
}

export const CharacterPortrait = ({ character }: { character: string }) => {
	const portrait = (portraits as Portraits)[character];

	return (
		<Grid item xs={12} sm={4}>
			<Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
				<img src={portrait} alt="Arthur McDonald" style={{ width: '100%', objectFit: 'cover' }} />
			</Box>
		</Grid>
	);
};

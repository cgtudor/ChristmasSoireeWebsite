import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import portraits from '~pages/Guests/GuestProfiles/Portraits';

interface Portraits {
	[key: string]: any;
}

export const CharacterPortrait = ({ character }: { character: string }) => {
	const portrait = (portraits as Portraits)[character];

	return (
		<Grid item xs={12} sm={4}>
			<Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<img src={portrait} alt="Arthur McDonald" style={{ width: '100%', objectFit: 'cover' }} />
			</Box>
		</Grid>
	);
};

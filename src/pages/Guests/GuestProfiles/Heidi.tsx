import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CharacterPortrait } from '~src/components/CharacterPortrait';

const Heidi = () => {
	return (
		<Grid container spacing={2}>
			<CharacterPortrait character="Heidi" />
			<Grid item xs={12} sm={8}>
				<Box p={2}>
					<Typography variant="h3">Heidi Rosengart</Typography>
					<Typography variant="subtitle2">
						Heidi Rosengart is a musician from Germany. She is a renowned violinist who has performed in many countries around the
						world. She's caught the favour of the Croix family who has come to love her performances. Whilst she'd generally be
						invited to perform, this time around she was invited as a guest.
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Heidi;

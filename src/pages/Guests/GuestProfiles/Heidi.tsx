import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import HeidiPortrait from '~pages/Guests/GuestProfiles/Portraits/HeidiPortrait.png';

const Heidi = () => {
	return (
		<Grid container>
			<Grid item xs={3}>
				<img src={HeidiPortrait} alt="Heidi Rosengart" style={{ width: '100%' }} />
			</Grid>
			<Grid item xs={8} margin={2}>
				<Typography variant="h3">Heidi Rosengart</Typography>
				<Typography variant="subtitle2">
					Heidi Rosengart is a musician from Germany. She is a renowned violinist who has performed in many countries around the world.
					She's caught the favour of the Croix family who has come to love her performances. Whilst she'd generally be invited to
					perform, this time around she was invited as a guest.
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Heidi;

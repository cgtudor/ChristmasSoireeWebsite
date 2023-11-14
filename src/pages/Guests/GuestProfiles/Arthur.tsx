import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ArthurPortrait from '~pages/Guests/GuestProfiles/Portraits/ArthurPortrait.png';

const Arthur = () => {
	return (
		<Grid container>
			<Grid item xs={3}>
				<img src={ArthurPortrait} alt="Arthur McDonald" style={{ width: '100%' }} />
			</Grid>
			<Grid item xs={8} margin={2}>
				<Typography variant="h3">Arthur McDonald</Typography>
				<Typography variant="subtitle2">
					Arthur McDonald is a man with little known history. For those knowledgeable enough, he is a hit-man for hire. What he did,
					who he was or why he's doing it is of little importance, but he's completed a job for the Croix family before. He was
					employed to [REDACTED] by the father. A splendid job. The invitation to this Christmas party was a surprise, but he's
					intrigued and willing to bite.
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Arthur;

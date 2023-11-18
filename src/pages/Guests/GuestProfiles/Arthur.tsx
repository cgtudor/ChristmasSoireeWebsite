import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import ArthurPortrait from '~pages/Guests/GuestProfiles/Portraits/ArthurPortrait.png';
import { CharacterPortrait } from '~src/components/CharacterPortrait';

const Arthur = () => {
	return (
		<Grid container spacing={2}>
			<CharacterPortrait character="Arthur" />
			<Grid item xs={12} sm={8}>
				<Box p={2}>
					<Typography variant="h4" gutterBottom>
						Arthur McDonald
					</Typography>
					<Typography variant="body1">
						Arthur McDonald is a man with little known history. For those knowledgeable enough, he is a hit-man for hire. What he did,
						who he was or why he's doing it is of little importance, but he's completed a job for the Croix family before. He was
						employed to [REDACTED] by the father. A splendid job. The invitation to this Christmas party was a surprise, but he's
						intrigued and willing to bite.
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Arthur;

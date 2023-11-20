import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CharacterPortrait } from '~src/components/CharacterPortrait';
import Title from '~src/components/Title';

const Arthur = () => {
	return (
		<Grid container spacing={2} alignItems="flex-start">
			<CharacterPortrait character="Arthur" />
			<Grid item xs={12} sm={8}>
				<Box p={2}>
					<Title text="Arthur McDonald" />
					<Typography variant="body1" color={'#f5f5f5'}>
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

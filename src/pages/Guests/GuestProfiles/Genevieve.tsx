import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CharacterPortrait } from '~src/components/CharacterPortrait';

const Genevieve = () => {
	return (
		<Grid container spacing={2}>
			<CharacterPortrait character="Genevieve" />
			<Grid item xs={12} sm={8}>
				<Box p={2}>
					<Typography variant="h3">Genevieve Auclair</Typography>
					<Typography variant="subtitle2">
						Genevieve Auclair is a distinguished lady from Paris. Old friend of the family, she has always brought a sense of elegance
						to any room she stepped in, turning the eyes of men and women alike.
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Genevieve;

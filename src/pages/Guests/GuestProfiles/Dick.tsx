import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CharacterPortrait } from '~src/components/CharacterPortrait';

const Dick = () => {
	return (
		<Grid container spacing={2}>
			<CharacterPortrait character="Dick" />
			<Grid item xs={12} sm={8}>
				<Box p={2}>
					<Typography variant="h3">Richard O'Connell</Typography>
					<Typography variant="subtitle2">
						Richard O'Connell is a detective of questionable origins. Although he is known for his case solving skills, he is also
						renowned for his drinking tendencies. A sort of drunken master of detectives he's made a name for himself as a private
						investigator and he came to know the Croix siblings from a case of earring theft he's solved for Estelle during the last
						Christmas party. He was now surprisingly invited to the party as a guest, rather than an investigator.
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Dick;

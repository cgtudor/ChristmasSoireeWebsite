import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CharacterPortrait } from '~src/components/CharacterPortrait';

const Father = () => {
	return (
		<Grid container spacing={2}>
			<CharacterPortrait character="Father" />
			<Grid item xs={12} sm={8}>
				<Box p={2}>
					<Typography variant="h3">Father Raphael</Typography>
					<Typography variant="subtitle2">
						Father Raphael is a priest from the Vatican. He's a close friend of the Croix family and has personally baptised both of
						the siblings. While generally not of great renown, he is quite loved by the people that know him, although his preaching
						can grow tiring at times.
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Father;

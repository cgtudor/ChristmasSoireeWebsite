import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import FatherPortrait from '~pages/Guests/GuestProfiles/Portraits/FatherPortrait.png';

const Father = () => {
	return (
		<Grid container>
			<Grid item xs={3}>
				<img src={FatherPortrait} alt="Father Raphael" style={{ width: '100%' }} />
			</Grid>
			<Grid item xs={8} margin={2}>
				<Typography variant="h3">Father Raphael</Typography>
				<Typography variant="subtitle2">
					Father Raphael is a priest from the Vatican. He's a close friend of the Croix family and has personally baptised both of the
					siblings. While generally not of great renown, he is quite loved by the people that know him, although his preaching can grow
					tiring at times.
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Father;

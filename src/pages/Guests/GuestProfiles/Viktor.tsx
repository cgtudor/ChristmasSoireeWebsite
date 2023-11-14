import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ViktorPortrait from './Portraits/ViktorPortrait.png';

const Viktor = () => {
	return (
		<Grid container>
			<Grid item xs={3}>
				<img src={ViktorPortrait} alt="Viktor Kozlov" style={{ width: '100%' }} />
			</Grid>
			<Grid item xs={8} margin={2}>
				<Typography variant="h3">Viktor Koslov</Typography>
				<Typography variant="subtitle2">
					Viktor Kozlov is a physicist from the great mother nation. Having published many revolutionary works in the world of physics,
					he is widely renowned for his logical mind and his ability to solve any problem. He came to know the Croix family through a
					project he worked on with their father and has been a close friend of the family ever since.
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Viktor;

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import GenevievePortrait from './GenevievePortrait.png';

const Genevieve = () => {
	return (
		<Grid container>
			<Grid item xs={3}>
				<img src={GenevievePortrait} alt="Genevieve Auclair" style={{ width: '100%' }} />
			</Grid>
			<Grid item xs={8} margin={2}>
				<Typography variant="h3">Genevieve Auclair</Typography>
				<Typography variant="subtitle2">
					Genevieve Auclair is a distinguished lady from Paris. Old friend of the family, she has always brought a sense of elegance to
					any room she stepped in, turning the eyes of men and women alike.
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Genevieve;

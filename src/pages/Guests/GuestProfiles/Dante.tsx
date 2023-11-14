import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import DantePortrait from '~pages/Guests/GuestProfiles/Portraits/DantePortrait.png';

const Dante = () => {
	return (
		<Grid container>
			<Grid item xs={3}>
				<img src={DantePortrait} alt="Dante Bellucci" style={{ width: '100%' }} />
			</Grid>
			<Grid item xs={8} margin={2}>
				<Typography variant="h3">Dante Bellucci</Typography>
				<Typography variant="subtitle2">
					Dante Bellucci is a man of questionable profession and morals. Being as charitable as possible, he is a loan shark. While his
					business may seem legal on the surface, he is no stranger to the land of crime. He will use any means necessary to get what
					he is owed and then some. He's come to know the Croix family as they proved to be a good source of funds for his business. Be
					it lending or borrowing, they've proved to be valuable and trustworthy clients thus far.
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Dante;

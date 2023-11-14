import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import DickPortrait from '~pages/Guests/GuestProfiles/Portraits/DickPortrait.png';

const Dick = () => {
	return (
		<Grid container>
			<Grid item xs={3}>
				<img src={DickPortrait} alt="Richard O'Connell" style={{ width: '100%' }} />
			</Grid>
			<Grid item xs={8} margin={2}>
				<Typography variant="h3">Richard O'Connell</Typography>
				<Typography variant="subtitle2">
					Richard O'Connell is a detective of questionable origins. Although he is known for his case solving skills, he is also
					renowned for his drinking tendencies. A sort of drunken master of detectives he's made a name for himself as a private
					investigator and he came to know the Croix siblings from a case of earring theft he's solved for Estelle during the last
					Christmas party. He was now surprisingly invited to the party as a guest, rather than an investigator.
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Dick;

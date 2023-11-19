import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CharacterPortrait } from '~src/components/CharacterPortrait';
import Title from '~src/components/Title';

const Dante = () => {
	return (
		<Grid container spacing={2}>
			<CharacterPortrait character="Dante" />
			<Grid item xs={12} sm={8}>
				<Box p={2}>
					<Title text="Dante Bellucci" />
					<Typography variant="subtitle2" color={'#f5f5f5'}>
						Dante Bellucci is a man of questionable profession and morals. Being as charitable as possible, he is a loan shark. While
						his business may seem legal on the surface, he is no stranger to the land of crime. He will use any means necessary to get
						what he is owed and then some. He's come to know the Croix family as they proved to be a good source of funds for his
						business. Be it lending or borrowing, they've proved to be valuable and trustworthy clients thus far.
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Dante;

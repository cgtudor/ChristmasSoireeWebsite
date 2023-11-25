import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { CharacterPortrait } from '~src/components/CharacterPortrait';
import Title from '~src/components/Title';

interface CharacterCardProps {
	name: string;
	description: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, description }) => {
	return (
		<Paper elevation={10} sx={{ p: 2, backgroundColor: '#474747', height: '400px', overflow: 'auto' }}>
			<Grid container spacing={2} alignItems="flex-start">
				<CharacterPortrait character={name} />
				<Grid item xs={12} sm={8}>
					<Box p={2}>
						<Title text={name} />
						<Typography variant="body2" color={'#f5f5f5'} sx={{ lineHeight: 1.5, fontFamily: 'Open Sans, sans-serif' }}>
							{description}
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default CharacterCard;

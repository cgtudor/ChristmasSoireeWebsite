import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import CharacterCard from '~src/components/CharacterCard';

import { guestsList } from './GuestProfiles/GuestsList';

const Guests = () => {
	return (
		<>
			<Grid container spacing={2}>
				{guestsList.map((guest, index) => {
					return (
						<Grid item xs={12} sm={6} key={index}>
							<Paper elevation={10} sx={{ p: 2, backgroundColor: '#474747', height: '450px', overflow: 'auto' }}>
								<CharacterCard name={guest.name} description={guest.description} />
							</Paper>
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};

export default Guests;

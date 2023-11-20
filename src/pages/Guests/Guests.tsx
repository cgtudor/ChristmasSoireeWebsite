import Grid from '@mui/material/Grid';

import CharacterCard from '~src/components/CharacterCard';

import { guestsList } from './GuestProfiles/GuestsList';

const Guests = () => {
	return (
		<>
			<Grid container spacing={2}>
				{guestsList.map((guest, index) => {
					return (
						<Grid item xs={12} sm={6} key={index}>
							<CharacterCard name={guest.name} description={guest.description} />
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};

export default Guests;

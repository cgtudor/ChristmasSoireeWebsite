import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Arthur from './GuestProfiles/Arthur';
import Catherine from './GuestProfiles/Catherine';
import Dick from './GuestProfiles/Dick';
import Estelle from './GuestProfiles/Estelle';
import Father from './GuestProfiles/Father';
import Finn from './GuestProfiles/Finn';
import Genevieve from './GuestProfiles/Genevieve';
import Heidi from './GuestProfiles/Heidi';
import Olivier from './GuestProfiles/Olivier';
import Viktor from './GuestProfiles/Viktor';

type GuestNames = 'Olivier' | 'Estelle' | 'Arthur' | 'Catherine' | 'Father' | 'Finn' | 'Genevieve' | 'Heidi' | 'Dick' | 'Viktor';

const Guests = () => {
	const guestComponents: Record<GuestNames, JSX.Element> = {
		Olivier: <Olivier />,
		Estelle: <Estelle />,
		Arthur: <Arthur />,
		Catherine: <Catherine />,
		Father: <Father />,
		Finn: <Finn />,
		Genevieve: <Genevieve />,
		Heidi: <Heidi />,
		Dick: <Dick />,
		Viktor: <Viktor />,
	};

	return (
		<>
			<Grid container spacing={2}>
				{Object.values(guestComponents).map((Component, index) => {
					return (
						<Grid item xs={12} sm={6} key={index}>
							<Paper elevation={10} sx={{ p: 2, backgroundColor: '#474747', height: '450px', overflow: 'auto' }}>
								{Component}
							</Paper>
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};

export default Guests;

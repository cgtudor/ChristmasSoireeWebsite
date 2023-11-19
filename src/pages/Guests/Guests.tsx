import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Arthur from './GuestProfiles/Arthur';
import Catherine from './GuestProfiles/Catherine';
import Dante from './GuestProfiles/Dante';
import Dick from './GuestProfiles/Dick';
import Estelle from './GuestProfiles/Estelle';
import Father from './GuestProfiles/Father';
import Finn from './GuestProfiles/Finn';
import Genevieve from './GuestProfiles/Genevieve';
import Grace from './GuestProfiles/Grace';
import Heidi from './GuestProfiles/Heidi';
import Olivier from './GuestProfiles/Olivier';
import Viktor from './GuestProfiles/Viktor';

type GuestNames =
	| 'Arthur'
	| 'Catherine'
	| 'Dante'
	| 'Dick'
	| 'Estelle'
	| 'Father'
	| 'Finn'
	| 'Genevieve'
	| 'Grace'
	| 'Heidi'
	| 'Olivier'
	| 'Viktor'
	| '';

const Guests = () => {
	const [selectedGuest, setSelectedGuest] = useState<GuestNames>('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedGuest(event.target.value as GuestNames);
	};

	const guestComponents: Record<GuestNames, JSX.Element> = {
		'Arthur': <Arthur />,
		'Catherine': <Catherine />,
		'Dante': <Dante />,
		'Dick': <Dick />,
		'Estelle': <Estelle />,
		'Father': <Father />,
		'Finn': <Finn />,
		'Genevieve': <Genevieve />,
		'Grace': <Grace />,
		'Heidi': <Heidi />,
		'Olivier': <Olivier />,
		'Viktor': <Viktor />,
		'': (
			<Typography
				variant="body1"
				className="gold-text"
				fontFamily={'Great Vibes, cursive'}
				fontSize={'4vh'}
				sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
			>
				Whisper a name, unveil the hidden tale.
			</Typography>
		),
	};

	return (
		<>
			<Grid container direction="column" alignItems={'center'}>
				<Grid item width="50%" margin={'1rem'}>
					<TextField
						fullWidth
						label="Who are you?"
						variant="standard"
						value={selectedGuest}
						onChange={handleInputChange}
						sx={{
							'& .MuiInputBase-input': {
								// Target the input element
								color: '#f5f5f5',
								textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
							},
						}}
					/>
				</Grid>
				<Grid item>
					<Paper elevation={10} sx={{ p: 2, backgroundColor: '#8dbb8d' }}>
						{guestComponents[selectedGuest] ? guestComponents[selectedGuest] : guestComponents['']}
					</Paper>
				</Grid>
			</Grid>
		</>
	);
};

export default Guests;

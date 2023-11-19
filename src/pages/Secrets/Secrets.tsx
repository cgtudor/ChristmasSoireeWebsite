import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import Secret from '~src/components/Secret';

import { secrets } from './SecretsList';

type GuestNames =
	| 'TheUnseenBlade'
	| 'AllEyesOnMe'
	| 'DickGumshoe'
	| 'ICanDoAllThisThroughHimWhoGivesMeStrength'
	| 'ThePressIsFreeButLivingIsNot'
	| 'TooGlamToGiveADamn'
	| 'TheMagicFlute'
	| 'IfATreeFalls';

const Secrets = () => {
	const [selectedGuest, setSelectedGuest] = useState<GuestNames>();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedGuest(event.target.value as GuestNames);
	};

	const guestPasswords: GuestNames[] = [
		'TheUnseenBlade',
		'AllEyesOnMe',
		'DickGumshoe',
		'ICanDoAllThisThroughHimWhoGivesMeStrength',
		'ThePressIsFreeButLivingIsNot',
		'TooGlamToGiveADamn',
		'TheMagicFlute',
		'IfATreeFalls',
	];

	const secretsCount = selectedGuest && Object.keys(secrets).filter((key) => key.startsWith(selectedGuest)).length;
	const gridColumns = secretsCount;

	const filteredSecrets =
		selectedGuest && guestPasswords.includes(selectedGuest) ? (
			<Grid container spacing={2} columns={gridColumns} direction="row" wrap="wrap">
				{Object.keys(secrets)
					.filter((key) => key.startsWith(selectedGuest))
					.map((key) => (
						<Grid item key={key} sm={1}>
							<Secret text={secrets[key]} />
						</Grid>
					))}
			</Grid>
		) : null;

	return (
		<>
			<Grid container direction="column" alignItems={'center'}>
				<Grid item width="50%" margin={'1rem'}>
					<TextField
						fullWidth
						label="What is the password?"
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
				{selectedGuest && guestPasswords.includes(selectedGuest) && (
					<Paper elevation={10} sx={{ p: 2, backgroundColor: '#474747' }}>
						{filteredSecrets}
					</Paper>
				)}
			</Grid>
		</>
	);
};

export default Secrets;

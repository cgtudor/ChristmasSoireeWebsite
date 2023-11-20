import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Secret from '~src/components/Secret';

import { secrets } from './SecretsList';

type GuestPasswords =
	| 'TheUnseenBlade'
	| 'AllEyesOnMe'
	| 'DickGumshoe'
	| 'ICanDoAllThisThroughHimWhoGivesMeStrength'
	| 'ThePressIsFreeButLivingIsNot'
	| 'TooGlamToGiveADamn'
	| 'TheMagicFlute'
	| 'IfATreeFalls';

const Secrets = () => {
	const [password, setPassword] = useState<GuestPasswords>();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value as GuestPasswords);
	};

	const guestPasswords: GuestPasswords[] = [
		'TheUnseenBlade',
		'AllEyesOnMe',
		'DickGumshoe',
		'ICanDoAllThisThroughHimWhoGivesMeStrength',
		'ThePressIsFreeButLivingIsNot',
		'TooGlamToGiveADamn',
		'TheMagicFlute',
		'IfATreeFalls',
	];

	const secretsCount = password && Object.keys(secrets).filter((key) => key.startsWith(password)).length;
	const gridColumns = secretsCount;

	const filteredSecrets =
		password && guestPasswords.includes(password) ? (
			<Grid container spacing={2} columns={gridColumns} direction="row" wrap="wrap">
				{Object.keys(secrets)
					.filter((key) => key.startsWith(password))
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
						value={password}
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
				{password && guestPasswords.includes(password) && (
					<Paper elevation={10} sx={{ p: 2, backgroundColor: '#474747' }}>
						{filteredSecrets}
					</Paper>
				)}
				{(!password || !guestPasswords.includes(password)) && (
					<Typography
						variant="body1"
						className="gold-text"
						fontFamily={'Great Vibes, cursive'}
						fontSize={'4vh'}
						sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
					>
						Whisper a name, unveil the hidden tale.
					</Typography>
				)}
			</Grid>
		</>
	);
};

export default Secrets;

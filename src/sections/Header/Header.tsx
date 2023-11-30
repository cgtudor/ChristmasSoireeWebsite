import { Link as RouterLink } from 'react-router-dom';

import { Box, Link, Toolbar, Typography } from '@mui/material';

import Feather from '~images/Logo.png';

const navStyle = {
	'fontFamily': 'Great Vibes, cursive',
	'color': '#f5f5f5',
	'textShadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
	'marginLeft': '1rem',
	'fontSize': '1.2rem',
	'padding': '0.5rem',
	'&:hover': {
		color: '#cb9b51',
	},
};

const Header = () => {
	return (
		<Toolbar
			sx={{
				'display': 'flex',
				'position': 'relative',
				'&::after': {
					content: '""',
					position: 'absolute',
					bottom: 15,
					left: '10%',
					width: '80%',
					height: '1px',
					backgroundColor: '#cb9b51',
				},
			}}
		>
			<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<Link component={RouterLink} to="/ChristmasSoireeWebsite/" color="inherit" underline="none">
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<img src={Feather} alt="Logo" style={{ width: '100px', marginRight: '0.5rem' }} />
						<Typography
							variant="h6"
							component="div"
							sx={{
								fontFamily: 'Great Vibes, cursive',
								color: '#f5f5f5',
								textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
								fontSize: '1.5rem',
							}}
						>
							Christmas Soirée
						</Typography>
					</Box>
				</Link>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
				<Link component={RouterLink} to="" color="inherit" underline="none" sx={navStyle}>
					Home
				</Link>
				<Link component={RouterLink} to="guests" color="inherit" underline="none" sx={navStyle}>
					Guests
				</Link>
				<Link component={RouterLink} to="secrets" color="inherit" underline="none" sx={navStyle}>
					Secrets
				</Link>
			</Box>
		</Toolbar>
	);
};

export default Header;

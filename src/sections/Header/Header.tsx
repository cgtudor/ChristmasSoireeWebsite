import { Link as RouterLink } from 'react-router-dom';

import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';

import Feather from '~images/Logo.png';

const Header = () => {
	return (
		<Toolbar
			sx={{
				'display': 'flex',
				'position': 'relative',
				'&::after': {
					content: '""',
					position: 'absolute',
					bottom: 0,
					left: '12.5%',
					width: '75%',
					height: '1px',
					backgroundColor: 'black',
				},
			}}
		>
			<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<Link component={RouterLink} to="/ChristmasSoireeWebsite/" color="inherit" underline="none">
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<img src={Feather} alt="Logo" style={{ width: '100px', marginRight: '0.5rem' }} />
						<Typography variant="h6" component="div">
							Christmas Soirée
						</Typography>
					</Box>
				</Link>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'center', flex: 1, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
				<Link component={RouterLink} to="/ChristmasSoireeWebsite/" color="inherit" underline="none" sx={{ marginLeft: '1rem' }}>
					Home
				</Link>
				<Link component={RouterLink} to="/ChristmasSoireeWebsite/guests" color="inherit" underline="none" sx={{ marginLeft: '1rem' }}>
					Guests
				</Link>
			</Box>
		</Toolbar>
	);
};

export default Header;

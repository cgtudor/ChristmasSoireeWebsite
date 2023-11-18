import { Link as RouterLink } from 'react-router-dom';

import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';

import Feather from '~images/Logo.png';

const Header = () => {
	return (
		//<AppBar position="static" sx={{ backgroundColor: 'transparent' }}>
		<Toolbar
			sx={{
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
			<Link component={RouterLink} to="/ChristmasSoireeWebsite/" color="inherit" underline="none">
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<img src={Feather} alt="Logo" style={{ width: '100px', marginRight: '0.5rem' }} />
					<Typography variant="h6" component="div">
						Christmas Soirée
					</Typography>
				</Box>
			</Link>
			<Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
				<Link component={RouterLink} to="/ChristmasSoireeWebsite/" color="inherit" underline="none" sx={{ marginLeft: '1rem' }}>
					Home
				</Link>
				<Link component={RouterLink} to="/ChristmasSoireeWebsite/guests" color="inherit" underline="none" sx={{ marginLeft: '1rem' }}>
					Guests
				</Link>
			</Box>
		</Toolbar>
		//</AppBar>
	);
};

export default Header;

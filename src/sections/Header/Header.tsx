import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Group, Home, Inbox, Mail, Menu } from '@mui/icons-material';
import LockIcon from '@mui/icons-material/Lock';
import { Box, Drawer, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material';

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
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<Stack direction={'row'}>
			<IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
				<Menu sx={{ color: '#f5f5f5' }} />
			</IconButton>
			<Drawer
				variant="temporary"
				anchor="left"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				PaperProps={{
					sx: {
						backgroundColor: '#1e1e1eed', // Change the color here
					},
				}}
			>
				<List>
					<ListItem button key="home" component={RouterLink} to="" onClick={handleDrawerToggle}>
						<ListItemIcon>
							<Home sx={{ color: '#f5f5f5' }} />
						</ListItemIcon>
						<ListItemText primary={'Home'} sx={{ fontFamily: 'Great Vibes, cursive', color: '#f5f5f5' }} />
					</ListItem>
					<ListItem button key="guests" component={RouterLink} to="guests" onClick={handleDrawerToggle}>
						<ListItemIcon>
							<Group sx={{ color: '#f5f5f5' }} />
						</ListItemIcon>
						<ListItemText primary={'Guests'} sx={{ fontFamily: 'Great Vibes, cursive', color: '#f5f5f5' }} />
					</ListItem>
					<ListItem button key="secrets" component={RouterLink} to="secrets" onClick={handleDrawerToggle}>
						<ListItemIcon>
							<LockIcon sx={{ color: '#f5f5f5' }} />
						</ListItemIcon>
						<ListItemText primary={'Secrets'} sx={{ fontFamily: 'Great Vibes, cursive', color: '#f5f5f5' }} />
					</ListItem>
				</List>
			</Drawer>
			<Toolbar
				sx={{
					'display': 'grid',
					'gridTemplateColumns': 'minmax(auto, 1fr) 2fr minmax(auto, 1fr)',
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
				<Link component={RouterLink} to="" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
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
				</Link>

				<Box
					sx={{
						justifyContent: 'center',
						alignItems: 'center',
						display: { xs: 'none', sm: 'flex' },
					}}
				>
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

				<Box>{/* Leave this empty for spacing */}</Box>
			</Toolbar>
		</Stack>
	);
};

export default Header;

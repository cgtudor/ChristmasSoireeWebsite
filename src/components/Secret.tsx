import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Title from './Title';

const Secret = ({ titleText, text }: { titleText: string; text: string }) => {
	return (
		<Paper elevation={10} sx={{ p: 2, backgroundColor: '#474747' }}>
			<Title text={titleText} />
			<Typography variant="body2" color={'#f5f5f5'} sx={{ lineHeight: 1.5, fontFamily: 'Open Sans, sans-serif' }}>
				{text}
			</Typography>
		</Paper>
	);
};

export default Secret;

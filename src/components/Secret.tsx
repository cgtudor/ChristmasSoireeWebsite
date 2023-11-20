import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Title from './Title';

const Secret = ({ titleText, text }: { titleText: string; text: string }) => {
	return (
		<Paper elevation={10} sx={{ p: 2, backgroundColor: '#474747' }}>
			<Title text={titleText} />
			<Typography variant="body1" color={'#f5f5f5'}>
				{text}
			</Typography>
		</Paper>
	);
};

export default Secret;

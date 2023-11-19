import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Secret = ({ text }: { text: string }) => {
	return (
		<Paper elevation={10} sx={{ p: 2, backgroundColor: '#474747' }}>
			<Typography variant="body1" color={'#f5f5f5'}>
				{text}
			</Typography>
		</Paper>
	);
};

export default Secret;

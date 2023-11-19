import Typography from '@mui/material/Typography';

interface TitleProps {
	text: string;
}

const Title = ({ text }: TitleProps) => (
	<Typography variant="h3" fontFamily="Great Vibes, cursive" sx={{ fontWeight: 'bold', color: '#f5f5f5', marginBottom: '1rem' }}>
		{text}
	</Typography>
);

export default Title;

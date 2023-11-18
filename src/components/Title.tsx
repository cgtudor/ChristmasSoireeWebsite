import Typography from '@mui/material/Typography';

interface TitleProps {
	text: string;
}

const Title = ({ text }: TitleProps) => (
	<Typography variant="h3" sx={{ fontWeight: 'bold', color: '#3f3f3f', marginBottom: '1rem' }}>
		{text}
	</Typography>
);

export default Title;

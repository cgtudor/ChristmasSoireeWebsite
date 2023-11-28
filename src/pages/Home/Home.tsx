import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import CookiesImg from '~images/Cookies.svg';
import FrameImg from '~images/Frame.svg';
import MilkGlassImg from '~images/Milk.svg';
import TableImg from '~images/Table.svg';
import LetterImg from '~images/ar.png';
import Countdown from '~src/components/Countdown';

const imageData = [
	{ src: TableImg, alt: 'table', className: 'table w-[500px]' },
	{ src: MilkGlassImg, alt: 'milk', className: 'milk l-[50%] w-[3em]' },
	{ src: CookiesImg, alt: 'cookies', className: 'cookies l-[55%] w-[3em]' },
	{ src: LetterImg, alt: 'letter front', className: 'letter b-[3%] r-[5%] w-[700px]' },
	{ src: FrameImg, alt: 'frame', className: 'frame w-[500px]' },
];

const cards = [
	{
		title: 'Gourmet Delights',
		description:
			'We will be serving a variety of food, including but not limited to: appetizers, desserts, alcoholic and non-alcoholic beverages',
		imageUrl:
			'https://loveincorporated.blob.core.windows.net/contentimages/gallery/654944e2-c14e-4611-8ad7-ba65e69a9e4b-christmas-family-gathering-1919.jpg',
	},
	{
		title: 'Elegant Atmosphere',
		description: 'The dress code is formal, so please dress accordingly. We will be taking pictures at the end of the night!',
		imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2022/02/King-Creole-GettyImages-991925076.jpg',
	},
	{
		title: 'Festive Activities',
		description: 'Plenty of activities to enjoy during the night: Secret Santa, Family Feud, games and, of course, █████',
		imageUrl: 'https://i.pinimg.com/736x/d2/87/6e/d2876eaa2d0a4815d3840b63698d784c.jpg',
	},
];

const Home = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<div>
			<Grid item>
				<div className="container pb-[3.5rem]">
					{imageData.map((image, index) => (
						<img key={index} src={image.src} alt={image.alt} className={image.className} />
					))}
					<Countdown targetDate={new Date('2023-12-23T18:00')} />
				</div>
			</Grid>
			<Grid className="party-cards" container spacing={3} style={{ marginTop: isSmallScreen ? '45%' : '15%' }}>
				{cards.map((card, index) => (
					<Grid item key={index} xs={12} sm={6} md={4}>
						<Card style={{ border: '1px solid #cb9b51', backgroundColor: '#474747', height: 300 }}>
							<CardMedia component="img" height="140" image={card.imageUrl} alt={card.title} />
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									className="gold-text"
									component="div"
									style={{ animationPlayState: 'paused' }}
								>
									{card.title}
								</Typography>
								<Typography variant="body2" color="silver">
									{card.description}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Home;

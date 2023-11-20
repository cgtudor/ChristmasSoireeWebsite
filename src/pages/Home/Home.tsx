import Grid from '@mui/material/Grid';

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

const Home = () => {
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
		</div>
	);
};

export default Home;

import CookiesImg from '~images/Cookies.svg';
import FrameImg from '~images/Frame.svg';
import MilkGlassImg from '~images/Milk.svg';
import TableImg from '~images/Table.svg';
import LetterImg from '~images/ar.png';

const Home = () => {
	return (
		<div>
			<div className="container pb-[3.5rem]">
				<img src={TableImg} alt="table" className="table w-[500px]" />
				<img src={MilkGlassImg} alt="milk" className="milk l-[50%] w-[3em]" />
				<img src={CookiesImg} alt="cookies" className="cookies l-[55%] w-[3em]" />
				<img src={LetterImg} alt="letter front" className="letter w-[700px]" />
				<img src={FrameImg} alt="frame" className="frame w-[500px]" />
				<h1 style={{ fontFamily: 'Great Vibes, cursive', color: '#f4f1c3', position: 'relative', top: 250 }}>Merry Christmas!</h1>
			</div>
		</div>
	);
};

export default Home;

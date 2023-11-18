import TableImg from '~images/Table.svg';
import LetterImg from '~images/ar.png';

const Home = () => {
	return (
		<div className="container pb-[3.5rem]">
			<img src={TableImg} alt="table" className="table d-[block] mw-[40vw] min-w-[300px] h-[auto] m-[auto]" />
			<img src={LetterImg} alt="letter front" className="letter d-[block] mw-[40vw] min-w-[300px] h-[auto] m-[auto]" />
		</div>
	);
};

export default Home;

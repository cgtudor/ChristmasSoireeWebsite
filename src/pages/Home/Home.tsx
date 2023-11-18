import TableImg from '~images/Table.svg';
import LetterImg from '~images/ar.png';

const Home = () => {
	return (
		<div className="container pb-[3.5rem]">
			<img src={TableImg} alt="table" className="table w-[500px]" />
			<img src={LetterImg} alt="letter front" className="letter w-[700px]" />
		</div>
	);
};

export default Home;

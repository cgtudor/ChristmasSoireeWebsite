import { Route, Routes } from 'react-router-dom';

import ViactImg from '~images/viact.png';
import Guests from '~pages/Guests';
import Home from '~pages/Home';
import LearnMore from '~pages/LearnMore';
import Footer from '~sections/Footer';
import Header from '~sections/Header';

function App(): JSX.Element {
	return (
		<div className="maw-[1200px] p-[1rem] mx-[auto] min-h[100vh] d-[flex] fld-[column]">
			<Header />

			<main className="py-[1.5rem]">
				<Routes>
					<Route path="/ChristmasSoireeWebsite/" element={<Home />} />
					<Route path="/ChristmasSoireeWebsite/guests" element={<Guests />} />
					<Route path="/ChristmasSoireeWebsite/learn" element={<LearnMore />} />
				</Routes>
			</main>

			<Footer />
		</div>
	);
}

export default App;

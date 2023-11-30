import { Route, Routes } from 'react-router-dom';

import Guests from '~pages/Guests';
import Home from '~pages/Home';
import Footer from '~sections/Footer';
import Header from '~sections/Header';

import Secrets from './pages/Secrets';

function App(): JSX.Element {
	console.log("Mind your own business. You're not supposed to be here.");
	return (
		<div className="maw-[1200px] p-[1rem] mx-[auto] min-h[100vh] d-[flex] fld-[column]">
			<Header />

			<main className="py-[1.5rem]">
				<Routes>
					<Route path="" element={<Home />} />
					<Route path="guests" element={<Guests />} />
					<Route path="secrets" element={<Secrets />} />
				</Routes>
			</main>

			<Footer />
		</div>
	);
}

export default App;

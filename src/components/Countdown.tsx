import React, { useEffect, useState } from 'react';

interface CountdownProps {
	targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
	const calculateTimeLeft = () => {
		const difference = +targetDate - +new Date();

		console.log(new Date('2023-12-23T18:00'));
		return {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

	return (
		<div
			style={{
				fontFamily: 'Great Vibes, cursive',
				color: '#f4f1c3',
				position: 'relative',
				top: 250,
				fontSize: '2rem',
			}}
		>
			{Object.entries(timeLeft).map(([unit, value]) => (
				<span key={unit}>
					{value} {unit}{' '}
				</span>
			))}
		</div>
	);
};

export default Countdown;

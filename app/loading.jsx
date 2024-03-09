'use client';
import { PulseLoader } from 'react-spinners';

const override = {
	display: 'block',
	margin: '40vh calc(50vw - 75px)',
	width: '150px',
};

const LoadingPage = (loading) => {
	return (
		<div>
			<PulseLoader color='hsl(66, 71%, 50%)' cssOverride={override} loading={loading} size={20} aria-label='Loading...' data-testid='loader' />
		</div>
	);
};
export default LoadingPage;

'use client';
import { PulseLoader } from 'react-spinners';

const override = {
	display: 'block',
	margin: '40vh calc(50vw - 50px)',
	width: '150px',
};

const Loader = (loading) => {
	return (
		<div>
			<PulseLoader color='hsl(66, 71%, 50%)' cssOverride={override} loading={loading} size={15} aria-label='Loading...' data-testid='loader' />
		</div>
	);
};
export default Loader;

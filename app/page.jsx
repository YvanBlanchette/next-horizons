import Hero from '../components/Hero';
import InfoBoxes from '../components/InfoBoxes';

export const metadata = {
	title: 'Next Horizons | Accueil',
	description: 'La meilleur application web de location et vente de propriétés immobilières!',
};

const Homepage = () => {
	return (
		<>
			<Hero />
			<InfoBoxes />
		</>
	);
};
export default Homepage;

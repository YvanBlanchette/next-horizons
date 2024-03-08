import '../assets/styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
	title: 'Next Horizons | Vers un nouvel horizon!',
	description: 'La meilleur application web de location et vente de propriétés immobilières!',
};

const MainLayout = ({ children }) => {
	return (
		<html lang='fr_ca'>
			<body>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
};
export default MainLayout;

import '@/assets/styles/globals.css';

export const metadata = {
	title: 'Next Horizons | Vers un nouvel horizon!',
	description: 'La meilleur application web de location et vente de propriétés immobilières!',
};

const MainLayout = ({ children }) => {
	return (
		<html lang='fr_ca'>
			<body>
				<div>{children}</div>
			</body>
		</html>
	);
};
export default MainLayout;

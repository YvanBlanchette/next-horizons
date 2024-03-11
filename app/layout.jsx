import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';

export const metadata = {
	title: 'Next Horizons | Vers un nouvel horizon!',
	description: 'La meilleur application web de location et vente de propriétés immobilières!',
};

const MainLayout = ({ children }) => {
	return (
		<AuthProvider>
			<html lang='fr_ca'>
				<head>
					<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
					<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
					<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
					<link rel='manifest' href='/site.webmanifest' />
					<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#12274d' />
					<meta name='msapplication-TileColor' content='#da532c' />
					<meta name='theme-color' content='#ffffff' />
				</head>
				<body>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</body>
			</html>
		</AuthProvider>
	);
};
export default MainLayout;

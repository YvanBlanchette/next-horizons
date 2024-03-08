import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo.png';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='bg-gray-200 py-4 mt-auto'>
			<div className='container mx-auto flex flex-col items-center justify-between px-4'>
				<div className='my-2'>
					<Image src={logo} alt='Next Horizons Logo' className='h-10 w-auto' />
				</div>
				<div className='flex flex-wrap justify-center md:justify-start mb-2'>
					<ul className='flex space-x-4'>
						<li>
							<Link href='/properties'>Propriétés</Link>
						</li>
						<li>
							<Link href='/terms'>Conditions d'Utilisations</Link>
						</li>
					</ul>
				</div>
				<div>
					<p className='text-sm text-gray-700 mt-2 md:mt-0 text-center'>
						Une création de{' '}
						<a className='text-blue-700 font-semibold hover:text-black transition duration-300 underline' target='_blank' href='https://yvanblanchette.com'>
							Yvan jr Blanchette
						</a>
					</p>
					<p className='text-sm text-gray-500 md:mt-0'>&copy; {year} Next Horizons | Tous Droits Réservés.</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;

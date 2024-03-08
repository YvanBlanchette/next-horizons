import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo.svg';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='bg-marine-100 py-4 mt-24'>
			<div className='container mx-auto flex flex-col items-center justify-between px-4'>
				<div className='my-2'>
					<Link href='/'>
						<Image src={logo} alt='Next Horizons Logo' className='h-16 w-auto mx-auto' />
						<span className='block text-marine-800 text-3xl font-extrabold ml-2 ff-montserrat'>
							<span className='font-medium text-limeGreen-500'>Next</span>Horizons
						</span>
					</Link>
				</div>

				<div>
					<p className='text-sm text-gray-700 mt-2 md:mt-0 text-center'>
						Une création de{' '}
						<a
							className='text-marine-700 font-semibold hover-text-marine-500 transition duration-300 underline'
							target='_blank'
							href='https://yvanblanchette.com'
						>
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

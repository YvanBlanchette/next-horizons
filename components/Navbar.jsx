'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo-white.svg';
import profileDefault from '@/assets/images/profile.png';
import { FaGoogle, FaUser } from 'react-icons/fa6';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
	const { data: session } = useSession();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
	const [providers, setProviders] = useState(null);

	const pathname = usePathname();

	useEffect(() => {
		const setAuthProviders = async () => {
			const response = await getProviders();
			setProviders(response);
		};
		setAuthProviders();
	}, []);

	return (
		<nav className='bg-marine-800 border-b border-limeGreen-500'>
			<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
				<div className='relative flex h-20 items-center justify-between'>
					<div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
						{/* <!-- Mobile menu button--> */}
						<button
							type='button'
							id='mobile-dropdown-button'
							className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none transition duration-300'
							aria-controls='mobile-menu'
							aria-expanded='false'
							onClick={() => setIsMobileMenuOpen((prev) => !prev)}
						>
							<span className='absolute -inset-0.5'></span>
							<span className='sr-only'>Menu Principal</span>
							<svg className='block h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
								<path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
							</svg>
						</button>
					</div>

					<div className='flex flex-1 items-center justify-center md:justify-start'>
						{/* <!-- Logo --> */}
						<Link className='flex items-center' href='/'>
							<Image className='h-12 w-auto' src={logo} alt='PropertyPulse' />

							<span className='text-white text-2xl font-extrabold ml-2 ff-montserrat pt-2'>
								<span className='font-medium text-limeGreen-500'>Next</span>Horizons
							</span>
						</Link>

						{/* <!-- Desktop Menu Hidden below md screens --> */}
						<div className='hidden md:ml-6 md:block pt-2'>
							<div className='flex space-x-2'>
								<Link
									href='/'
									className={`${
										pathname === '/' ? 'bg-limeGreen-600' : ''
									} text-white hover-bg-limeGreen-600 hover:text-white rounded-none px-3 py-2 transition duration-300`}
								>
									Accueil
								</Link>
								<Link
									href='/properties'
									className={`${
										pathname === '/properties' ? 'bg-limeGreen-600' : ''
									} text-white hover-bg-limeGreen-600 hover:text-white rounded-none px-3 py-2 transition duration-300`}
								>
									Propriétés
								</Link>
								{session && (
									<Link
										href='/properties/add'
										className={`${
											pathname === '/properties/add' ? 'bg-limeGreen-600' : ''
										} text-white hover-bg-limeGreen-600 hover:text-white rounded-none px-3 py-2 transition duration-300`}
									>
										Ajouter une Propriété
									</Link>
								)}
							</div>
						</div>
					</div>

					{/* <!-- Right Side Menu (Logged Out) --> */}
					{!session && (
						<div className='hidden md:block md:ml-6'>
							<div className='flex items-center pt-2'>
								{providers &&
									Object.values(providers).map((provider, index) => (
										<button
											onClick={() => signIn(provider.id)}
											key={index}
											className='btn flex items-center text-white bg-limeGreen-600 hover:opacity-75 hover:text-white rounded-none px-3 py-2 transition duration-300'
										>
											<FaGoogle className='text-white mr-2' />
											<span>Connextion / Inscription</span>
										</button>
									))}
							</div>
						</div>
					)}

					{/* <!-- Right Side Menu (Logged In) --> */}
					{session && (
						<div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
							<Link href='/messages' className='relative group'>
								<button
									type='button'
									className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none transition duration-300'
								>
									<span className='absolute -inset-1.5'></span>
									<span className='sr-only'>Voir notifications</span>
									<svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
										/>
									</svg>
								</button>
								<span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
									2{/* <!-- Replace with the actual number of notifications --> */}
								</span>
							</Link>
							{/* <!-- Profile dropdown button --> */}
							<div className='relative ml-3'>
								<div>
									<button
										type='button'
										className='relative flex rounded-full bg-gray-800 text-sm hover:shadow-md focus:outline-none'
										id='user-menu-button'
										aria-expanded='false'
										aria-haspopup='true'
										onClick={() => setIsProfileMenuOpen((prev) => !prev)}
									>
										<span className='absolute -inset-1.5'></span>
										<span className='sr-only'>Menu Utilisateur</span>
										<Image className='h-8 w-8 rounded-full' src={profileDefault} alt='' />
									</button>
								</div>

								{/* <!-- Profile dropdown --> */}
								{isProfileMenuOpen && (
									<div
										id='user-menu'
										className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg  focus:outline-none'
										role='menu'
										aria-orientation='vertical'
										aria-labelledby='user-menu-button'
										tabIndex='-1'
									>
										<Link href='/profile' className='block px-4 py-2 text-sm text-gray-700' role='menuitem' tabIndex='-1' id='user-menu-item-0'>
											Profil
										</Link>
										<Link href='/properties/saved' className='block px-4 py-2 text-sm text-gray-700' role='menuitem' tabIndex='-1' id='user-menu-item-2'>
											Propriétés favorites
										</Link>
										<button className='block px-4 py-2 text-sm text-gray-700' role='menuitem' tabIndex='-1' id='user-menu-item-2'>
											Se Déconnecter
										</button>
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			</div>

			{/* <!-- Mobile menu, show/hide based on menu state. --> */}
			{isMobileMenuOpen && (
				<div id='mobile-menu'>
					<div className='space-y-1 px-2 pb-3 pt-2'>
						<Link
							href='/'
							className={`${
								pathname === '/' ? 'bg-marine-900' : ''
							} text-white block hover-bg-marine-900 hover:text-white rounded-none px-3 py-2 transition duration-300`}
						>
							Accueil
						</Link>
						<Link
							href='/properties'
							className={`${
								pathname === '/properties' ? 'bg-marine-900' : ''
							} text-white block hover-bg-marine-900 hover:text-white rounded-none px-3 py-2 transition duration-300`}
						>
							Propriétés
						</Link>
						{session && (
							<Link
								href='/properties/add'
								className={`${
									pathname === '/properties/add' ? 'bg-marine-900' : ''
								} text-white block hover-bg-marine-900 hover:text-white rounded-none px-3 py-2 transition duration-300`}
							>
								Ajouter une Propriété
							</Link>
						)}
						{providers &&
							Object.values(providers).map((provider, index) => (
								<button
									onClick={() => signIn(provider.id)}
									key={index}
									className='btn flex items-center text-white bg-limeGreen-600 hover:opacity-75 hover:text-white rounded-none px-3 py-2 transition duration-300'
								>
									<FaGoogle className='text-white mr-2' />
									<span>Connextion / Inscription</span>
								</button>
							))}
					</div>
				</div>
			)}
		</nav>
	);
};
export default Navbar;

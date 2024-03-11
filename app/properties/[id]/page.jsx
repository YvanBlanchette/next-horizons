'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/utilities/request';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import Link from 'next/link';
import { FaAngleLeft, FaBed, FaBath, FaRulerCombined, FaCheck, FaLocationDot, FaShareNodes, FaBookmark, FaPaperPlane } from 'react-icons/fa6';
import Loader from '@/components/Loader';

const PropertyPage = () => {
	// Get the id from the URL
	const { id } = useParams();
	// Create a states to store the property data and the loading state
	const [property, setProperty] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Fetch the property data when the component mounts
		const fetchPropertyData = async () => {
			// Check if the id is available
			if (!id) return;

			try {
				// Fetch the property data
				const property = await fetchProperty(id);
				// Set the property state
				setProperty(property);
			} catch (error) {
				// Catch any errors and log them to the console
				console.log('Erreur lors de la récupération des données :', error);
			} finally {
				// Set the loading state to false
				setLoading(false);
			}
		};
		if (property === null) {
			// Fetch the property data
			fetchPropertyData();
		}
	}, [id, property]);

	if (!property && !loading) {
		return <p className='text-center text-xl mt-10'>Désolé, il n'y a aucune propriété de disponible...</p>;
	}

	return (
		<>
			{loading && <Loader loading={loading} />}
			{!loading && property && (
				<>
					{/* Header Image */}
					<PropertyHeaderImage image={property.images[0]} />

					{/* Back button */}
					<section className='bg-blue-50'>
						<div className='container m-auto py-6 px-6 bg-white'>
							<Link href='/properties' className='text-marine-600 font-medium hover-text-limeGreen-600 flex items-center transition duration-300'>
								<FaAngleLeft className='mr-2' />
								Retour aux Propriétés
							</Link>
						</div>
					</section>

					{/* Main */}
					<section className='bg-blue-50'>
						<div className='container m-auto py-10 px-6'>
							<div className='grid grid-cols-1 md:grid-cols-60/40 w-full gap-6'>
								<main>
									<div className='bg-white py-6 rounded-none shadow-md text-center md:text-left'>
										<div className='px-6'>
											<div className='text-gray-500 mb-4 text-lg'>{property.type}</div>
											<h1 className='text-3xl font-bold mb-4'>{property.name}</h1>
											<div className='text-gray-500 mb-4 flex items-center justify-center md:justify-start'>
												<FaLocationDot className='text-xl text-limeGreen-600 mr-2' />
												<p className='text-limeGreen-600 font-medium text-xl'>
													{property.location.street}, {property.location.city}, {property.location.state} {property.location.zipcode}
												</p>
											</div>
										</div>
										<h3 className='px-6 text-lg font-semibold my-6 bg-marine-700 text-white p-2'>Tarifs & Options</h3>
										<div className='px-6'>
											<div className='flex flex-col md:flex-row justify-center md:justify-start gap-4 md:gap-8 md:pl-1'>
												{property.rates.nightly && (
													<div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
														<div className='text-2xl font-semibold'>{property.rates.nightly.toLocaleString()}$</div>
														<div className='text-gray-500 ml-1 font-bold'> /Nuits</div>
													</div>
												)}
												{property.rates.weekly && (
													<div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
														<div className='text-2xl font-semibold text-limeGreen-600'>{property.rates.weekly.toLocaleString()}$</div>
														<div className='text-gray-500 ml-1 font-bold'> /Semaine</div>
													</div>
												)}
												{property.rates.monthly && (
													<div className='flex items-center justify-center mb-4 pb-4 md:pb-0'>
														<div className='text-2xl font-semibold text-limeGreen-600'>{property.rates.monthly.toLocaleString()}$</div>
														<div className='text-gray-500 ml-1 font-bold'> /Mois</div>
													</div>
												)}
											</div>
										</div>
									</div>

									<div className='bg-white pb-6 mt-6 rounded-none shadow-md text-center md:text-left'>
										<h3 className='px-6 text-lg font-semibold my-6 bg-marine-700 text-white p-2'>Détails & Description</h3>
										<div className='px-6'>
											<div className='flex justify-center md:justify-start gap-4 text-limeGreen-600 mb-4 text-xl space-x-9 md:pl-1'>
												{/* Bedrooms */}
												<p className='flex flex-col md:flex-row md:gap-2 items-center'>
													<FaBed className='text-2xl' />
													<div className='text-gray-500 font-medium'>
														{property.beds}
														<span className='hidden sm:inline'> Chambres</span>
													</div>
												</p>
												<p className='flex flex-col md:flex-row md:gap-2 items-center'>
													<FaBath className='text-2xl' />
													<div className='text-gray-500 font-medium'>
														{property.baths}
														<span className='hidden sm:inline'> Salles de bain</span>
													</div>
												</p>
												<p className='flex flex-col md:flex-row md:gap-2 items-center'>
													<FaRulerCombined className='text-2xl' />
													<div className='text-gray-500 font-medium'>
														{property.square_feet}
														<span className='hidden sm:inline'> pi²</span>
													</div>
												</p>
											</div>
											<p className='text-gray-500 mb-4 text-center md:text-start md:pl-1'>{property.description}</p>
										</div>
									</div>

									<div className='bg-white pb-6 mt-6 rounded-none shadow-md text-center md:text-left'>
										<h3 className='px-6 text-lg font-semibold my-6 bg-marine-700 text-white p-2'>Inclusions</h3>
										<div className='px-6'>
											<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none'>
												{property.amenities.map((amenity, index) => (
													<li key={index} className='mb-3'>
														<div className='flex justify-center md:justify-start items-center gap-1'>
															<FaCheck className='text-green-600 mr-2 mt-3' />
															{amenity}
														</div>
													</li>
												))}
											</ul>
										</div>
									</div>
									<div className='bg-white p-6 rounded-lg shadow-md mt-6'>
										<div id='map'></div>
									</div>
								</main>

								{/* <!-- Sidebar --> */}
								<aside className='space-y-4'>
									<button className='bg-marine-700 hover:opacity-90 text-white font-semibold w-full py-2 px-4 rounded-full flex items-center justify-center'>
										<FaBookmark className='mr-2' /> Ajouter aux Favoris
									</button>
									<button className='bg-limeGreen-600 hover:opacity-80 text-white font-semibold w-full py-2 px-4 rounded-full flex items-center justify-center'>
										<FaShareNodes className='mr-2' /> Partager la Propriété
									</button>

									{/* <!-- Contact Form --> */}
									<div className='bg-white p-6 rounded-lg shadow-md'>
										<h3 className='text-xl font-bold mb-6 text-center'>Rejoindre le Propriétaire</h3>
										<form>
											<div className='mb-4'>
												<label className='block text-limeGreen-600 text-sm font-semibold mb-2' htmlFor='name'>
													Nom :
												</label>
												<input
													className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
													id='name'
													type='text'
													placeholder='Inscrire votre nom complet...'
													required
												/>
											</div>
											<div className='mb-4'>
												<label className='block text-limeGreen-600 text-sm font-semibold mb-2' htmlFor='email'>
													Courriel :
												</label>
												<input
													className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
													id='email'
													type='email'
													placeholder='Inscrire votre adresse courriel...'
													required
												/>
											</div>
											<div className='mb-4'>
												<label className='block text-limeGreen-600 text-sm font-semibold mb-2' htmlFor='phone'>
													Téléphone :
												</label>
												<input
													className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
													id='phone'
													type='text'
													placeholder='Inscrire votre numéro de téléphone...'
												/>
											</div>
											<div className='mb-4'>
												<label className='block text-limeGreen-600 text-sm font-semibold mb-2' htmlFor='message'>
													Message :
												</label>
												<textarea
													className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline'
													id='message'
													placeholder='Écrire votre message ici...'
												></textarea>
											</div>
											<div>
												<button
													className='bg-marine-700 hover:opacity-90 text-white font-semibold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'
													type='submit'
												>
													<FaPaperPlane className='mr-2' /> Envoyer Message
												</button>
											</div>
										</form>
									</div>
								</aside>
							</div>
						</div>
					</section>
				</>
			)}
		</>
	);
};
export default PropertyPage;

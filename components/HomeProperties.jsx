import PropertyCard from '@/components/PropertyCard';
import Link from 'next/link';
import { fetchProperties } from '@/utilities/request';

const HomeProperties = async () => {
	// Fetch properties from our API
	const properties = await fetchProperties();

	// Sort properties randomly and get the first 3
	const recentProperties = properties.sort(() => Math.random() - Math.random()).slice(0, 3);

	// Render the component
	return (
		<>
			<section className='px-4 py-6 mt-4'>
				<div className='container-xl lg:container m-auto'>
					<h2 className='text-3xl md:text-5xl font-bold text-marine-700 mb-6 text-center'>Nouvelles Propriétés</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{recentProperties.length === 0 ? (
							<p className='text-center text-xl'>Désolé, il n'y a aucune propriété de disponible...</p>
						) : (
							recentProperties.map((property) => <PropertyCard key={property._id} {...property} />)
						)}
					</div>
				</div>
			</section>

			<section className='m-auto max-w-lg my-10 px-6'>
				<Link
					href='properties'
					className='block bg-limeGreen-600 text-white text-center font-semibold py-4 px-6 rounded-none hover:opacity-80 transition duration-300'
				>
					Voir toutes les Propriétés
				</Link>
			</section>
		</>
	);
};

// Export the component
export default HomeProperties;

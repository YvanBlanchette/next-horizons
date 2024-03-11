import PropertyCard from '@/components/PropertyCard';
import { fetchProperties } from '@/utilities/request';

const PropertiesPage = async () => {
	// Fetch properties from our API
	const properties = await fetchProperties();

	// Sort properties by date ascending
	properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

	// Render the component
	return (
		<section className='px-4 py-6'>
			<div className='container-xl lg:container m-auto px-4 py-6'>
				{properties.length === 0 ? (
					<p className='text-center text-xl'>Désolé, il n'y a aucune propriété de disponible...</p>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{properties.map((property) => (
							<PropertyCard key={property._id} {...property} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};

// Export the component
export default PropertiesPage;

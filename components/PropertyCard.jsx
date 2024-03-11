import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath, FaRulerCombined, FaLocationDot } from 'react-icons/fa6';

const PropertyCard = ({ _id, images, type, name, location, beds, baths, square_feet, rates }) => {
	const getRateDisplay = () => {
		if (rates.monthly) {
			return `${rates.monthly.toLocaleString()}/Mois`;
		} else if (rates.weekly) {
			return `${rates.weekly.toLocaleString()}/Semaine`;
		} else if (rates.nightly) {
			return `${rates.nightly.toLocaleString()}/Nuit`;
		}
	};

	return (
		<div className='rounded-none bg-white shadow-md relative'>
			<Link href={`/properties/${_id}`}>
				<Image src={`/images/${images[0]}`} alt={name} className='w-full h-auto rounded-none object-cover' sizes='100vw' width={0} height={0} />
			</Link>
			<div className='p-4'>
				<div className='text-center mb-6'>
					<div className='text-gray-600'>{type}</div>
					<h3 className='text-2xl  font-bold'>{name}</h3>
				</div>
				<h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-none text-blue-500 font-bold text-right md:text-center lg:text-right'>
					${getRateDisplay()}
				</h3>

				<div className='flex justify-evenly text-gray-500 mb-4'>
					<p className='flex items-center gap-1'>
						<FaBed className='text-xl text-marine-700' />
						{beds}
						<span className='md:hidden lg:inline'>Chambre</span>
					</p>
					<p className='flex items-center gap-1'>
						<FaBath className='text-xl text-marine-700' />
						{baths}
						<span className='md:hidden lg:inline'>Salle de bain</span>
					</p>
					<p className='flex items-center gap-1'>
						<FaRulerCombined className='text-xl text-marine-700' />
						{square_feet.toLocaleString()}
						<span className='md:hidden lg:inline'>pi²</span>
					</p>
				</div>

				<div className='border border-gray-200 mb-5'></div>

				<div className='flex flex-col lg:flex-row justify-between mb-4'>
					<div className='flex align-middle justify-center md:justify-start gap-2 mb-4 lg:mb-0 items-center'>
						<FaLocationDot className='fa-solid fa-location-dot text-lg text-limeGreen-600' />
						<span className='text-xl font-semibold text-limeGreen-600'>
							{location.city}, {location.state}
						</span>
					</div>
					<Link
						href={`/properties/${_id}`}
						className='h-[40px] bg-marine-700 hover-bg-marine-600 text-white px-4 py-2 rounded-none text-center text-md transition duration-300'
					>
						Détails
					</Link>
				</div>
			</div>
		</div>
	);
};
export default PropertyCard;

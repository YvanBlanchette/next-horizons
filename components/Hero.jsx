const Hero = () => {
	return (
		<section className='bg-marine-800 py-20 mb-4'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
				<div className='text-center'>
					<h1 className='text-3xl font-extrabold text-limeGreen-500  md:text-6xl'>Trouvez votre Location idéale!</h1>
					<p className='my-4 text-md md:text-xl text-white'>Découvrez la propriété qui correspond à tous vos besoins.</p>
				</div>
				<form className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'>
					<div className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'>
						<label htmlFor='location' className='sr-only'>
							Location
						</label>
						<input
							type='text'
							id='location'
							placeholder='Inscrire la localité (ville, province, code...)'
							className='w-full px-4 py-3 rounded-none bg-white text-gray-800 focus:outline-none focus:ring focus:ring-marine-500'
						/>
					</div>
					<div className='w-full md:w-2/5 md:pl-2'>
						<label htmlFor='property-type' className='sr-only'>
							Types de Propriétés
						</label>
						<select id='property-type' className='w-full px-4 py-3 rounded-none bg-white text-gray-800 focus:outline-none focus:ring'>
							<option disabled>Types de Propriétés</option>
							<option value='All'>Tous</option>
							<option value='Apartment'>Appartement</option>
							<option value='Studio'>Studio</option>
							<option value='Condo'>Condo</option>
							<option value='House'>Maison</option>
							<option value='Cabin'>Chalet</option>
							<option value='Loft'>Loft</option>
							<option value='Room'>Chambre</option>
							<option value='Other'>Autres</option>
						</select>
					</div>
					<button
						type='submit'
						className='btn md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-none bg-limeGreen-600 text-white hover:opacity-80 focus:outline-none transition duration-300'
					>
						Recherche
					</button>
				</form>
			</div>
		</section>
	);
};
export default Hero;

import InfoBox from './InfoBox';

const InfoBoxes = () => {
	return (
		<section>
			<div className='container-xl lg:container m-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
					<InfoBox
						heading='Pour les Locataires'
						backgroundColor='bg-gray-100'
						textColor='text-gray-800'
						buttonInfo={{ text: 'Parcourez les Propriétés', link: '/properties.html', backgroundColor: 'bg-black', textColor: 'text-white' }}
					>
						Trouvez la propriété locative de vos rêves! Marquez vos propriétés favorites d'un signet pour y accéder plus rapidement et contacter directement les
						propriétaires.
					</InfoBox>
					<InfoBox
						heading='Pour les Propriétaires'
						backgroundColor='bg-blue-100'
						textColor='text-blue-800'
						buttonInfo={{ text: 'Ajouter une Propriété', link: '/add-property.html', backgroundColor: 'bg-blue-500', textColor: 'text-white' }}
					>
						Listez vos propriétés et atteignez un grand bassin des locataires potentiels. Louez-les à la manière Airbnb ou de manière plus standard avec un plus
						long terme.
					</InfoBox>
				</div>
			</div>
		</section>
	);
};
export default InfoBoxes;

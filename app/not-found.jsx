import Link from 'next/link';
import { FaTriangleExclamation } from 'react-icons/fa6';

const NotFoundPage = () => {
	return (
		<section className='bg-blue-50 min-h-screen flex-grow'>
			<div className='container m-auto max-w-2xl py-24'>
				<div className='bg-white px-6 py-24 mb-4 shadow-md rounded-none border m-4 md:m-0'>
					<div className='flex justify-center'>
						<FaTriangleExclamation className='text-8xl text-limeGreen-500' />
					</div>
					<div className='text-center'>
						<h1 className='text-4xl font-bold mt-4 mb-2 text-marine-900'>Page Introuvable</h1>
						<p className='text-gray-500 text-lg mb-10'>La page que vous tentez de consulter ne semble pas exister.</p>
						<Link href='/' className='bg-marine-800 hover-bg-marine-700 text-white font-bold py-4 px-6 rounded-none transition duration-300'>
							Retour
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
export default NotFoundPage;

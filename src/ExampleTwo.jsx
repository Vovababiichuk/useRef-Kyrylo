import './App.css'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react';

export const ExampleTwo = () => {
	return (
		<>
			<Link to='/' className='mb-10 flex justify-center'>
				<Home size={42} className='text-rose-400' />
			</Link>
			<div>1111</div>
		</>
	)
}

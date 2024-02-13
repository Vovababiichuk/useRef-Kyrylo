import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

import './App.css'

function App() {
	return (
		<>
			{/* У більшості випадків useRef використовується щоб отримати посилання на
			DOM елемент */}
			<h1 className='text-5xl font-bold text-blue-400 mb-10'>
				useRef - Xук посилання на DOM елемент
			</h1>
			<div>
				<nav>
					<ul className='flex flex-col gap-6'>
						<li className='text-4xl text-rose-400 flex gap-2 items-center justify-center'>
							<ExternalLink size={34} />
							<Link to='/example-one'>ExampleOne</Link>
						</li>
						<li className='text-4xl text-rose-400 flex gap-2 items-center justify-center'>
							<ExternalLink size={34} />
							<Link to='/example-two'>ExampleTwo</Link>
						</li>
						<li className='text-4xl text-rose-400 flex gap-2 items-center justify-center'>
							<ExternalLink size={34} />
							<Link to='/example-three'>ExampleThree</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default App

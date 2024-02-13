import './App.css'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

export const ExampleThree = () => {
	const prevValueRef = useRef('null')
	const [value, setValue] = useState(0)

	useEffect(() => {
		console.log(value, 'value')
		console.log(prevValueRef, 'prevValueRef')

		// сюди записується значення яке було після першого рендеру
		prevValueRef.current = value
		console.log('render Effect')

		// при зміні [value] буде спрацьовувати useEffect
	}, [value])

	const handleIncrement = () => {
		setValue(value + 1)
	}

	console.log('render')

	return (
		<>
			<Link to='/' className='mb-10 flex justify-center'>
				<Home size={42} className='text-rose-400' />
			</Link>
			<div className='mb-2'>
				<p>
					<span className='mr-2'>Current Value:</span>
					<span className='border px-1 text-blue-500'>{value}</span>
				</p>
				<p>
					<span className='mr-2'>Previous Value:</span>
					<span className='border px-1 text-blue-500'>{prevValueRef.current}</span>
				</p>
			</div>
			<div>
				<button
					className='bg-blue-500 text-white py-2 px-4 rounded hover:opacity-90 duration-300 ease-in-out'
					onClick={handleIncrement}
				>
					Increment
				</button>
			</div>
		</>
	)
}

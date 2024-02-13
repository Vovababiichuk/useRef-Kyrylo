import './App.css'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react';
import { useRef, useEffect } from 'react'

export const ExampleTwo = () => {
	const inputRef = useRef(null);

	useEffect(() => {
		if (inputRef && inputRef.current) {
			inputRef.current.focus()
		}
	}, [])

	return (
		<>
			<Link to='/' className='mb-10 flex justify-center'>
				<Home size={42} className='text-rose-400' />
			</Link>
			<div className='mb-4'>
				<input ref={inputRef} className='p-2 rounded text-black'  type="text" placeholder='Type your email...' />
			</div>
			<div>
				<input className='p-2 rounded text-black' type="text" placeholder='Type your password...' />
			</div>
		</>
	)
}

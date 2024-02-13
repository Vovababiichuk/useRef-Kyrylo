import './App.css'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { useEffect, useRef } from 'react'

export const ExampleFour = () => {
	const scrollPositionRef = useRef(0)

	const handleScroll = () => {
		console.log(scrollPositionRef);
		scrollPositionRef.current = window.scrollY
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		console.log('scrollPositionRef', scrollPositionRef)
		// тут не буде працювати. В useEffect слід вкладати саме ті залежності які оновлюються (це або PROPS or STATE), те що React може контролювати...
	}, [scrollPositionRef.current])

	return (
		<>
			<Link to='/' className='mb-10 flex justify-center'>
				<Home size={42} className='text-rose-400' />
			</Link>
			<div>
				<button onClick={handleScroll}>Click</button>
				<p className='h-[1000px]'></p>
			</div>
		</>
	)
}

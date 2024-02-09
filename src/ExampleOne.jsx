import './App.css'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react';
import { useRef } from 'react'

export const ExampleOne = () => {
	const firstCateRef = useRef(null)
	const secondCateRef = useRef(null)
	const thirdCateRef = useRef(null)

	const handleScrollBy = ref => {
		console.log(ref)
		if (ref && ref.current) {
			const offsetTop = ref.current.offsetTop
			window.scrollBy({
				top: offsetTop,
				behavior: 'smooth',
			})
		}
	}

	return (
		<>
			<Link to='/' className='mb-10 flex justify-center'>
				<Home size={42} className='text-rose-400' />
			</Link>
			<div className='mb-10 flex flex-wrap gap-10 justify-center'>
				<button
					className='text-2xl uppercase bg-slate-600 py-1 px-3 rounded-lg'
					onClick={() => handleScrollBy(firstCateRef)}
				>
					Tom
				</button>
				<button
					className='text-2xl uppercase bg-slate-600 py-1 px-3 rounded-lg'
					onClick={() => handleScrollBy(secondCateRef)}
				>
					Mary
				</button>
				<button
					className='text-2xl uppercase bg-slate-600 py-1 px-3 rounded-lg'
					onClick={() => handleScrollBy(thirdCateRef)}
				>
					Jellylorum
				</button>
			</div>
			<div>
				<ul className='flex flex-col gap-32 items-center'>
					<li className='block'>
						<img
							className='w-96 h-96 rounded-lg object-cover'
							src='https://placekitten.com/g/200/200'
							alt='Tom'
							ref={firstCateRef}
						/>
					</li>
					<li>
						<img
							className='w-96 h-96 rounded-lg object-cover'
							src='https://placekitten.com/g/300/200'
							alt='Mary'
							ref={secondCateRef}
						/>
					</li>
					<li>
						<img
							className='w-96 h-96 rounded-lg object-cover'
							src='https://placekitten.com/g/250/200'
							alt='Jellylorum'
							ref={thirdCateRef}
						/>
					</li>
				</ul>
			</div>
		</>
	)
}

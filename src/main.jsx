import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ExampleOne } from './ExampleOne'
import { ExampleTwo } from './ExampleTwo'
import { ExampleThree } from './ExampleThree'
import { ExampleFour } from './ExampleFour'


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/example-one' element={<ExampleOne />} />
				<Route path='/example-two' element={<ExampleTwo />} />
				<Route path='/example-three' element={<ExampleThree />} />
				<Route path='/example-four' element={<ExampleFour />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)

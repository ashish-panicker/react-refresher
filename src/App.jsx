import React from 'react'
import { Greeting } from './Greeting'
import List from './List'
import DynamicBox from './DynamicBox'

const App = () => {
	const h1 = React.createElement('h1', null, 'Welcome to ReactJS!')
	console.log(h1)
	const items = ['Milk', 'Eggs', 'Bread', 'Water', 'Flour']
	return (
		<>
			<main>
				<DynamicBox />
			</main>
			{/*<React.Fragment> */}
			{/* 
				<header>
					<Greeting name='Juna' message='Welcome to React Programming' />
				</header>
				<article>
					<List items={items} />
				</article>
			</main> */}
			{/*</React.Fragment> */}
		</>
	)
}

export default App

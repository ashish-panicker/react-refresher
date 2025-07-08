import React from 'react'
import { Greeting } from './Greeting'
import List from './List'

const App = () => {
	const h1 = React.createElement('h1', null, 'Welcome to ReactJS!')
	console.log(h1)
	const items = ['Milk', 'Eggs', 'Bread', 'Water', 'Flour']
	return (
		<>
			{/*<React.Fragment> */}
			<main>
				<header>
					<Greeting name='Juna' message='Welcome to React Programming' />
				</header>
				<article>
					<List items={items} />
				</article>
			</main>
			{/*</React.Fragment> */}
		</>
	)
}

export default App

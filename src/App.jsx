import React from 'react'
import { Greeting } from './Greeting'
import List from './List'
import DynamicBox from './DynamicBox'
import WishList from './wish-list/WishList'
import WishList2 from './wish-list2/WishList2'

const App = () => {
	const h1 = React.createElement('h1', null, 'Welcome to ReactJS!')
	const items = ['Milk', 'Eggs', 'Bread', 'Water', 'Flour']
	return (
		<>
			<main>
				<WishList2 />
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

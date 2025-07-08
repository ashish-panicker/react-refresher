import React from 'react'

const List = ({ items }) => {
	// const items = ['Milk', 'Eggs', 'Bread', 'Water']
	return (
		<div>
			Grocery List
			<ul>
				{items.map((item) => (
					<div className='list-item'>
						<li>{item}</li>
						<button>X</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default List

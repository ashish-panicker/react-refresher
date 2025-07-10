import React from 'react'
import Form from './Form'
import WishItem from './WishItem'

const WishList = () => {
	const [list, setList] = React.useState([])

	function removeItem(item) {
		setList((prevList) => prevList.filter((prevItem) => prevItem !== item))
	}

	return (
		<div>
			<div>
				<Form list={list} setList={setList} />
				<h2>Your Wishlist</h2>
				{list.map((item) => (
					<WishItem item={item} key={item} remove={removeItem} />
				))}
			</div>
		</div>
	)
}

export default WishList

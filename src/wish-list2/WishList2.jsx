import React from 'react'

const WishList2 = () => {
	// State object to store the wish list items
	const [items, setItems] = React.useState([])

	// State object to store user input
	const [item, setItem] = React.useState('')

	function setUserInput(event) {
		const value = event.target.value
		setItem(value)
	}

	function addItem() {
		setItems([...items, item])
        setItem('')
	}

	function removeItem(itemToRemove) {
        const newList = items.filter(itemInArr => itemInArr !== itemToRemove)
        setItems(newList)
    }

	return (
		<>
			<h2>Add Item to List</h2>
			{/* Add Item to Wishlist Form  */}
			<form className='form'>
				<input
					type='text'
					placeholder='Item to add...'
					name='item'
					value={item}
					onChange={(event) => setUserInput(event)}
				/>
				<button onClick={() => addItem()} type='button'>
					Add
				</button>
			</form>

			<h2>My Wish List</h2>
			{/* list will be rendered */}
			<div>
				{items.map((wishListItem) => (
					<>
						<div>
							{wishListItem}
							<button onClick={() => removeItem(wishListItem)}> X </button>
						</div>
					</>
				))}
			</div>
		</>
	)
}

export default WishList2

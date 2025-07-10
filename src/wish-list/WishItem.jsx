import React from 'react'

const WishItem = ({item, remove}) => {

function deleteClick(item) {
    remove(item)
}

	return (
		<div className='item'>
			<span>{item}</span>
			<button onClick={() => deleteClick(item)}>X</button>
		</div>
	)
}

export default WishItem

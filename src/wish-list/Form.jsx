import React from 'react'

const Form = ({ list, setList }) => {
	const [item, setItem] = React.useState('')

	function itemChanged(e) {
		if (e.target.value) {
			setItem(e.target.value)
		}
	}

	function add() {
			setList([...list, item])
	}

	return (
		<div className='form'>
			<h2>Add Item to your List</h2>
			<input
				type='text'
				name='item'
				placeholder='Item'
				value={item}
				onChange={(e) => itemChanged(e)}
			/>
			<button onClick={add}>Add</button>
		</div>
	)
}

export default Form

import React from 'react'

const DynamicBox = () => {
	const [size, setSize] = React.useState({ height: 300, width: 600 })

	const boxStyle = {
		minWidth: '20px',
		minHeight: '20px',
		border: '2px solid black',
		height: `${size.height}px`,
		width: `${size.width}px`,
		backgroundColor: 'Tomato',
		color: 'white',
		fontSize: '18px',
		fontWeight: 'bold',
	}

	function manageSize(e, height, width) {
		// const id = e.target.id
		// const newSize = {
		// 	height: size.height,
		// 	width: size.width,
		// }
		// if (id === 'increment') {
		// 	newSize.height = newSize.height + height
		// 	newSize.width = newSize.width + width
		// } else {
		// 	newSize.height = newSize.height - height
		// 	newSize.width = newSize.width - width
		// }
		// setSize(newSize)
		//
		setSize((prevSize) => {
			if (id === 'increment') {
				return {
					height: prevSize.height + height,
					width: prevSize.width + width,
				}
			} else {
				return {
					height: prevSize.height - height,
					width: prevSize.width - width,
				}
			}
		})
	}

	return (
		<>
			<div style={boxStyle}>DynamicBox</div>
			<div>
				<button
					id='increment'
					className='dynamic-box-button'
					onClick={(e) => manageSize(e, 20, 20)}>
					Increase
				</button>
				<button
					id='decrement'
					className='dynamic-box-button'
					onClick={(e) => manageSize(e, 20, 20)}>
					Decrease
				</button>
			</div>
		</>
	)
}

export default DynamicBox

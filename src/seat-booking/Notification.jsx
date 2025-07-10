const Notification = ({ message, type, onClose }) => {
	if (!message) {
		return null // Don't render if there's no message
	}

	// Determine class based on type for different styling (e.g., success, error)
	const notificationClass = `notification ${type}`

	return (
		<div className={notificationClass}>
			<p>{message}</p>
			<button className='close-button' onClick={onClose}>
				&times; {/* HTML entity for 'times' symbol (X) */}
			</button>
		</div>
	)
}

export default Notification

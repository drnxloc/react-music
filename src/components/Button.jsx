import React from 'react'
import cx from 'clsx'

function Button({ children, active, primary, onClick }) {
	return (
		<button
			onClick={onClick}
			className={cx('text-gray-500 text-lg p-[18px]', {
				'text-blue-400': active,
				'text-white': primary,
				'w-14 h-14 bg-blue-400 rounded-full flex justify-center items-center':
					primary,
			})}
		>
			{children}
		</button>
	)
}

export default Button

import React from 'react'
import cx from 'clsx'

function Button({ children, active }) {
	return (
		<button
			className={cx('text-gray-500 text-lg p-[18px]', {
				'text-red-500': active,
			})}
		>
			{children}
		</button>
	)
}

export default Button

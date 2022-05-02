import React from 'react'
import cx from 'clsx'
import { FaEllipsisH } from 'react-icons/fa'

function Song({ name, singer, image, active }) {
	return (
		<div
			className={cx(
				'flex item-center mb-3 bg-white py-2 px-4 rounded shadow-sm',
				{
					'bg-blue-500 text-white': active,
				}
			)}
		>
			<div
				className="w-11 h-11 rounded-full bg-cover mx-2"
				style={{ backgroundImage: `url(${image})` }}
			></div>
			<div className="flex-1 px-4">
				<h3 className="text-lg">{name}</h3>
				<p className="text-xs">{singer}</p>
			</div>
			<div
				className={cx('py-4 px-2 font-medium text-blue-400', {
					'text-white': active,
				})}
			>
				<FaEllipsisH />
			</div>
		</div>
	)
}

export default Song

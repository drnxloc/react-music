import React, { useState } from 'react'
import Button from './Button'
import {
	FaRedo,
	FaStepBackward,
	FaPlay,
	FaStepForward,
	FaRandom,
} from 'react-icons/fa'

function Player() {
	const [progress, setProgress] = useState(0)
	return (
		<div className="relative max-w-[480px] mx-auto">
			{/* Dashboard */}
			<div className="pt-4 px-4 pb-[14px] bg-white fixed top-0 w-full max-w-[480px] border-b border-b-gray-300">
				<header>
					<h4>Now playing:</h4>
					<h2>String 57th & 9th</h2>
				</header>
				{/* CD */}
				<div className="flex m-auto w-52">
					{/* CD Thumb */}
					<div className="w-full pt-[100%] rounded-full m-auto bg-cover bg-slate-500"></div>
					<img
						src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/e/1/c/ee1c0fbea45998492524c8f3b5992ab4.jpg"
						alt=""
						className="rounded-full"
					/>
				</div>

				<Controls></Controls>
				<input
					className="progress rounded w-full h-[6px] bg-gray-400 outline-none opacity-70 
                    transition-opacity delay-200 appearance-none"
					type="range"
					value={progress}
					onChange={(e) => setProgress(e.target.value)}
					step="1"
					min="0"
					max="100"
				/>
			</div>
		</div>
	)
}

function Controls() {
	return (
		<div className="flex items-center justify-center space-around pt-[18px] pb-2">
			<Button>
				<FaRedo />
			</Button>
			<Button>
				<FaStepBackward />
			</Button>
			<Button>
				<FaPlay />
			</Button>
			<Button>
				<FaStepForward />
			</Button>
			<Button>
				<FaRandom />
			</Button>
		</div>
	)
}

export default Player

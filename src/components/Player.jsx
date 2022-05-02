import React, { useState } from 'react'
import Button from './Button'
import {
	FaRedo,
	FaStepBackward,
	FaPlay,
	FaPause,
	FaStepForward,
	FaRandom,
} from 'react-icons/fa'
import PlayList from './PlayList'
import Song from './Song'

function Player() {
	const [progress, setProgress] = useState(0)
	const [name, setName] = useState('Đám cưới nha!')

	return (
		<div className="relative max-w-[480px] mx-auto">
			{/* Dashboard */}
			<div className="mt-4 pt-4 px-4 pb-[14px] bg-white fixed top-0 w-full max-w-[480px] border-b border-b-gray-300">
				<header className="text-center mb-3">
					<h4 className="text-sm text-blue-600 font-bold">
						Now playing:
					</h4>
					<h2 className="text-xl">{name}</h2>
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

				<audio id="audio" src=""></audio>
			</div>

			<PlayList>
				<Song
					active
					name="Đám cưới nha!"
					singer="Hồng Thanh"
					image="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/e/1/c/ee1c0fbea45998492524c8f3b5992ab4.jpg"
				></Song>
				<Song
					name="Đám cưới nha 2!"
					singer="Hồng Thanh"
					image="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/e/1/c/ee1c0fbea45998492524c8f3b5992ab4.jpg"
				></Song>
				<Song></Song>
			</PlayList>
		</div>
	)
}

function Controls() {
	const [playing, setPlaying] = useState(false)
	const [redo, setRedo] = useState(false)
	const [random, setRandom] = useState(false)

	function backward() {}

	function forward() {}

	return (
		<div className="flex items-center justify-center space-around pt-[18px] pb-2">
			<Button active={redo} onClick={() => setRedo(!redo)}>
				<FaRedo />
			</Button>
			<Button onClick={backward}>
				<FaStepBackward />
			</Button>
			<Button
				primary
				active={playing}
				onClick={() => setPlaying(!playing)}
			>
				{(playing && <FaPause />) || <FaPlay />}
			</Button>
			<Button onClick={forward}>
				<FaStepForward />
			</Button>
			<Button active={random} onClick={() => setRandom(!random)}>
				<FaRandom />
			</Button>
		</div>
	)
}

export default Player

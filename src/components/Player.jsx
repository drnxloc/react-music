import React, { useEffect, useRef, useState } from 'react'
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
import songs from '~/data/songs'

function Player() {
	const [progress, setProgress] = useState(0)
	const [song, setSong] = useState(songs[0])
	const cdRef = useRef()
	const audioRef = useRef()

	useEffect(() => {
		const widthCD = cdRef.current.offsetWidth
		document.onscroll = () => {
			const scrollTop =
				window.scrollY || document.documentElement.scrollTop
			const newWidth = widthCD - scrollTop
			const newOpacity = newWidth / widthCD
			cdRef.current.style.width = `${newWidth > 0 ? newWidth : 0}px`
			cdRef.current.style.opacity = newOpacity > 0 ? newOpacity : 0
		}
	}, [])

	const handlePlay = (playing, setPlaying) => {
		setPlaying(!playing)
		if (playing) {
			audioRef.current.pause()
		} else {
			audioRef.current.play()
		}
	}

	return (
		<div className="relative max-w-[480px] mx-auto">
			{/* Dashboard */}
			<div className="mt-4 pt-4 px-4 pb-[14px] bg-white fixed top-0 w-full max-w-[480px] border-b border-b-gray-300">
				<header className="text-center mb-3">
					<h4 className="text-sm text-blue-600 font-bold">
						Now playing:
					</h4>
					<h2 className="text-xl">{song.name}</h2>
					<h3 className="text-sm">{song.singer}</h3>
				</header>
				{/* CD */}
				<div className="flex m-auto w-52" ref={cdRef}>
					{/* CD Thumb */}
					<div
						className="w-full pt-[100%] rounded-full m-auto bg-cover bg-slate-500"
						style={{ backgroundImage: `url(${song.image})` }}
					></div>
				</div>

				<Controls handlePlay={handlePlay}></Controls>
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

				<audio ref={audioRef} src={song.path}></audio>
			</div>

			<PlayList>
				{songs.map((song, index) => {
					return (
						<Song
							key={song.id}
							name={song.name}
							singer={song.singer}
							image={song.image}
						/>
					)
				})}
			</PlayList>
		</div>
	)
}

function Controls({ handlePlay }) {
	const [playing, setPlaying] = useState(false)
	const [redo, setRedo] = useState(false)
	const [random, setRandom] = useState(false)

	function handleBackward() {}

	function handleForward() {}

	return (
		<div className="flex items-center justify-center space-around pt-[18px] pb-2">
			<Button active={redo} onClick={() => setRedo(!redo)}>
				<FaRedo />
			</Button>
			<Button onClick={handleBackward}>
				<FaStepBackward />
			</Button>
			<Button
				primary
				active={playing}
				onClick={() => handlePlay(playing, setPlaying)}
			>
				{(playing && <FaPause />) || <FaPlay />}
			</Button>
			<Button onClick={handleForward}>
				<FaStepForward />
			</Button>
			<Button active={random} onClick={() => setRandom(!random)}>
				<FaRandom />
			</Button>
		</div>
	)
}

export default Player

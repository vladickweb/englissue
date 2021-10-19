import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import AssignmentIcon from '@material-ui/icons/Assignment'
import PhoneIcon from '@material-ui/icons/Phone'
import React, { useEffect, useRef, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Peer from 'simple-peer'
import io from 'socket.io-client'
import './Videochat.css'
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button'


function Videochat() {
	const [ me, setMe ] = useState('')
	const [ stream, setStream ] = useState()
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState('')
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ idToCall, setIdToCall ] = useState('')
	const [ callEnded, setCallEnded ] = useState(false)
	const [ name, setName ] = useState('')
	const myVideo = useRef()
	const userVideo = useRef()
	const connectionRef = useRef()
	const [ socket, setSocket ] = useState(io.connect(process.env.REACT_APP_BASE_URL))

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
			setStream(stream)
			myVideo.current.srcObject = stream
		})

		socket.on('me', id => {
			setMe(id)
			console.log(userVideo.current.remote.state)
		})

		socket.on('callUser', data => {
			setReceivingCall(true)
			setCaller(data.from)
			setName(data.name)
			setCallerSignal(data.signal)
		})

		return () => {
			socket.disconnect()
		}
	}, [])

	const callUser = id => {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		})

		peer.on('signal', data => {
			console.log('signal')
			socket.emit(
				'callUser',
				{
					userToCall: id,
					signalData: data,
					from: me,
					name: name
				},
				console.log('peer signal')
			)
		})

		peer.on(
			'stream',
			stream => {
				console.log('entroooo')
				userVideo.current.srcObject = stream
			},
			console.log(stream)
		)

		socket.on(
			'callAccepted',
			signal => {
				console.log('accepted')
				setCallAccepted(true)
				peer.signal(signal)
			},
			console.log(userVideo.current.remote.state)
		)

		connectionRef.current = peer
	}

	const answerCall = () => {
		setCallAccepted(true)
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream
		})

		peer.on('signal', data => {
			socket.emit('answerCall', { signal: data, to: caller })
		})

		peer.on('stream', stream => {
			userVideo.current.srcObject = stream
		})

		peer.signal(callerSignal)
		connectionRef.current = peer
	}

	const leaveCall = () => {
		setCallEnded(true)
		connectionRef.current.destroy()
	}

	return (
		<div className='container margin-top'>
			<div className='row justify-content-center text-center transparent radius p-5 align-items-center'>
				<div className='col-10'>
					<div className="row align-items-center mb-5">
					<div className='col-6'>
						<div className='video'>
							{stream && <video playsInline muted ref={myVideo} autoPlay style={{ width: '300px' }} />}
						</div>
					</div>
					<div className='col-6'>
						<div className='video'>
							{userVideo ? (
								<video playsInline ref={userVideo} autoPlay style={{ width: '300px' }} />
							) : null}
						</div>
					</div>
					</div>
				</div>
				<div className='myId row justify-content-center'>

					<TextField
						autoComplete="off"
						id='filled-basic'
						label='Nombre'
						variant='filled'
						value={name}
						onChange={e => setName(e.target.value)}
						style={{ marginBottom: '20px' }}
					/>

					<CopyToClipboard text={me} style={{ marginBottom: '2rem' }}>
						<Button variant='contained' color='primary' startIcon={<AssignmentIcon fontSize='large' />}>
							Copiar ID
						</Button>
					</CopyToClipboard>

					<TextField
						autoComplete='off'
						id='filled-basic'
						label='ID destinatario'
						variant='filled'
						value={idToCall}
						onChange={e => setIdToCall(e.target.value)}
					/>
					<div className='call-button'>
						{callAccepted && !callEnded ? (
							<Button variant='contained' color='secondary' onClick={leaveCall}>
								Terminar llamada
							</Button>
						) : (
							<IconButton color='primary' aria-label='call' onClick={() => callUser(idToCall)}>
								<PhoneIcon fontSize='large' />
							</IconButton>
						)}
					</div>
				</div>
				<div>
					{receivingCall && !callAccepted ? (
						<div className='caller'>
							<h1>{name} te está llamando...</h1>
							<Button variant='contained' color='primary' onClick={answerCall}>
								Aceptar
							</Button>
						</div>
					) : null}
				</div>
			</div>
		</div>
	)
}

export default Videochat

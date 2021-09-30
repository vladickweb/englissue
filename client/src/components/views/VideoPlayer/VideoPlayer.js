import React, { useContext } from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'

import { SocketContext } from '../../../SocketContext'

export default function VideoPlayer() {
	const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)

	return (
		<Grid container>
			{stream && (
				<Paper item xs={12} md={6}>
					<Typography variant='h5' gutterBottom>
						{name || 'Name'}
					</Typography>
					<video playsInline muted ref={myVideo} autoPlay />
				</Paper>
			)}
			{callAccepted &&
			!callEnded && (
				<Paper item xs={12} md={6}>
					<Typography variant='h5' gutterBottom>
						Name
					</Typography>
					<video playsInline ref={call.name || 'Name'} autoPlay />
				</Paper>
			)}
		</Grid>
	)
}

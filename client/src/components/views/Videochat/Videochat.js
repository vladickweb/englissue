import React from 'react'
import { Typography, AppBar } from '@material-ui/core'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import VideoNotifications from '../VideoNotifications/VideoNotifications'
import VideoOptions from '../VideoOptions/VideoOptions'



export default function Videochat() {
	return (
		<div>
			<AppBar position='static' color='inherit'>
				<Typography variant='h2' align='center'>
					Video Chat
				</Typography>
			</AppBar>
			<VideoPlayer />
			<VideoOptions>
				<VideoNotifications />
			</VideoOptions>
		</div>
	)
}

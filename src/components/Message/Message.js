import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

function Message({ timestamp, message, user }) {
    return (
        <div className="Message">
            <Avatar />
            <div className="Message__info">
                <h4>{user.displayName}
                    <span className='Message__timestamp'>
                        {new Date(timestamp?.toDate()).toUTCString}
                    </span>
                </h4>
                <p> {message}</p>
            </div>
        </div>
    )
}

export default Message

import React from 'react'
import './ChatHeader.scss'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';

function ChatHeader({ channelName }) {
    return (
        <div className="ChatHeader">
            <div className="ChatHeader__left">
                <h3>
                    <span className="ChatHeader__hash">#</span>
                    {channelName}
                </h3>
            </div>
            <div className="ChatHeader__right">
                <NotificationsIcon />
                <EditLocationIcon />
                <PeopleAltRoundedIcon />

                <div className="ChatHeader__search">
                    <input type="text" placeholder="Search" />
                    <SearchRoundedIcon />
                </div>

                <SendRoundedIcon />
                <HelpOutlineRoundedIcon />
            </div>
        </div>
    )
}

export default ChatHeader

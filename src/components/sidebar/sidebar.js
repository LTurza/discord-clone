import React, { useEffect, useState } from 'react';
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar } from '@material-ui/core';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import db, { auth } from './../../firabase';

function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data()
            })))
        })
    }, [])
    const AddChannelHandler = () => {
        const channelName = prompt('Enter new channel name');
        if (channelName) {
            db.collection('channels').add({
                channelName: channelName,

            })
        }
    }
    return (
        <div className="Sidebar">
            <div className="Sidebar__top">
                <h3>Discord App</h3>
                <ExpandMoreIcon />
            </div>

            <div className="Sidebar__channels">
                <div className="Sidebar__channelsHeader">
                    <div className="Sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="Sidebar__addChanel" onClick={AddChannelHandler} />
                </div>
                <div className="Sidebar__channelList">
                    {channels.map(({ id, channel }) => (
                        < SidebarChannel
                            key={id}
                            id={id}
                            channelName={channel.channelName}
                        />
                    ))}
                </div>
            </div>

            <div className="Sidebar__voice">
                <SignalCellularAltIcon
                    className="Sidebar__voiceIcon"
                    fontSize="large"
                />
                <div className="Sidebar__voiceInfo">
                    <h3>Voice Conected</h3>
                    <p>Stream</p>
                </div>
                <div className="Sidebar__voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>
            <div className="Sidebar__profile">
                <Avatar src={user.photo} onClick={() => auth.signOut()} className="SideBar__avatar" />
                <div className="Sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 4)}</p>
                </div>
                <div className="Sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
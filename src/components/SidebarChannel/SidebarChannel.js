import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from '../../features/appSlice'
import './SidebarChannel.scss'

function SidebarChannel({ id, channelName }) {
    const dispatch = useDispatch();
    return (
        <div className="SidebarChannel" onClick={() => dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName
        }))}>
            <h4>
                <span className="SidebarChannel__hash">#</span>
                {channelName.length >= 20 ? channelName.slice(0, 20) + "..." : channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel

import React, { useEffect, useState } from 'react';
import './Chat.css';
import ChatHeader from './../ChatHeader/ChatHeader.js';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './../Message/Message.js';
import { selectUser } from '../../features/userSlice';
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import { useSelector } from 'react-redux';
import db from '../../firabase';
import firebase from 'firebase';

function Chat() {

    const channelName = useSelector(selectChannelName);
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([])


    useEffect(() => {
        if (channelId) {
            db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }

    }, [channelId])

    const sendMessage = event => {
        event.preventDefault();

        db.collection('channels').doc(channelId).collection('messages').add({
            message: input,
            user: user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput("")
    }

    return (
        <div className="Chat">
            <ChatHeader channelName={channelName} />

            <div className="Chat__messages">
                {messages.map(message => (
                    <Message
                        timestamp={message.timestamp}
                        user={message.user}
                        message={message.message}
                    />
                ))}
            </div>

            <div className="Chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input
                        type="text"
                        value={input}
                        onChange={event => setInput(event.target.value)}
                        placeholder={`Message #${channelName}`}
                    />
                    <button type="submit" className="Chat__inputButton" onClick={sendMessage}> Send Message</button>
                </form>
                <div className="Chat__inputIcons">
                    <CardMembershipIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default Chat

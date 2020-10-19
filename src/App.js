import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.scss';
import Sidebar from './components/sidebar/sidebar.js'
import Chat from './components/chat/Chat';
import { selectUser } from './features/userSlice';
import Login from './components/Login/login';
import { auth } from './firabase';
import { logIn, logOut } from './features/userSlice'

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch(
          logIn({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          }))
      } else {
        dispatch(logOut)
      }
    })
  }, [dispatch])

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
          <Login />
        )}
    </div>
  );
}

export default App;

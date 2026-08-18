import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice.js'

export const ServerURL = "http://localhost:8000"

const App = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    const getUser = async()=>{
      try {
        const result  = await axios.get(ServerURL + "/api/user/current-user",{
          withCredentials:true
        })

        dispatch(setUserData(result.data));        
      } catch (error) {
        console.log("error in currentUser frontend : ",error);
        dispatch(setUserData(null))
      }
    }

    getUser();
  },[])

  return (
    <Routes>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/' element={<Home/>} />
    </Routes>
  )
}

export default App

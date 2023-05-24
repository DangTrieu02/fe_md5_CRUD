import React, { useState } from 'react'
import Header from '../components/headers'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'

export default function Home() {
  let [ isShow , setIsShow ]= useState(false)
  return (
    <>
        <Header setIsShow = {setIsShow} isShow = {isShow}/>
        {isShow && <Sidebar/>}
        <Outlet></Outlet>
    </>
  )
}

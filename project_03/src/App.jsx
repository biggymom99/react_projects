import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from '../pages/Home';
import Contents from '../pages/Contents';
import Page404 from '../pages/Page404';
import Layout from '../components/Layout';
import Login from '../pages/login';
import User from '../components/User';
import ContentDetail from '../pages/ContentDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home />}/>
          <Route path="/contents" element={<Contents />}>
            <Route path=":id" element={<ContentDetail/>}/>
          </Route>
          <Route path="*" element={<Page404 />}/>
        
          <Route path="/user/:userId" element={<User />}/></Route>

          <Route path="/login" element={<Login />}/>
          {/*<Route path='/login' element={} />*/}
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Book from './Components/Book';
import { createContext, useState } from 'react';
import Auth from './Components/Auth';

export const UserContext = createContext();



function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser] }>
      <p>{loggedInUser.name}</p>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/Book/:bedType' element={<Auth/>} /> */}
        <Route path='/Book/:bedType' element={<Auth><Book/></Auth>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

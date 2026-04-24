
import Home from './screens/Home';
import './App.css';
import Navbar from './components/Navbar';
import Food from './screens/Food';
import Movies from './screens/Movies';
import Book from './screens/Booking';
import Theatre from './screens/Theatres';
import Login from './screens/login';
import Signup from './screens/signup';
import {Routes, Route} from 'react-router-dom';
import MovieDetails from './screens/MovieDetails';
import TheatreDetails from './screens/TheatreDetails';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from './actions/userActions';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(loadUser)
  },[dispatch])
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/food" element={<Food/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movie/:id" element={<MovieDetails/>}/>
      <Route path="/book" element={<Book/>}/>
      <Route path='/theatres' element={<Theatre/>}/>
      <Route path='/theatre/:id' element={<TheatreDetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/theatres' element={<Theatre/>}/>
      <Route path='/signup' element={<Signup/>}/>
      
    </Routes>
    </>
  );
}

export default App;
import React, { useEffect } from 'react';
import p2 from '../assets/movie/OIP.jpg';
import gc from '../assets/movie/gc.jpg';
import vts from '../assets/movie/OIP (1).jpg';
import vm from '../assets/movie/OIP (2).jpg';
import marco from '../assets/movie/th.jpg';
import j from '../assets/movie/j.jpg';
import kn from '../assets/movie/OIP (3).jpg';
import mas from '../assets/movie/mas.jpg';
import mu from '../assets/movie/OIP (4).jpg';
import vtv from '../assets/movie/vtv.jpg';
import van from '../assets/movie/OIF.jpg';
import tha from '../assets/movie/OIP (5).jpg';
import Cards from '../components/cards';
import Slide from '../components/slide';
import soor from '../assets/movie/vts.jpg';
import master from '../assets/movie/master.jpg';
import jailer from '../assets/movie/Jailef.jpg';
import pushpa from '../assets/movie/Pu2.jpg';
import '../styles/cards.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';
const images = [p2,vts,vm,van,gc,marco,j,kn,mas,mu,tha,vtv];
const names=["Pushpa2","Veera Dheera Sooran","Vidamuyarchi","Vanangaan","Game changer","Marco","Jailer2 promo","Kadhalika Neramilai","Master","Mufasa","Thalapathy","Vinnaithaandi Varuvaya"]

function Movies(){
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchMovies());
    },[dispatch]);
    
    const {movies,loading,error}=useSelector(state=>state.movies);
    const sliderImages = movies
    .filter((movie) => movie.isFeatured)
    .map((movie) => movie.posterUrl);

    return ( <> {loading && <p>Loading movies...</p>}
    <div className='slider'>
        
        <Slide images={sliderImages}/>
        </div>
    <h1 className='title'>Now showing</h1>
    <div className='card-container'>
    {movies.map((movie) => (
                <Cards key={movie.id} image={movie.posterUrl} name={movie.title} id={movie._id} />
            ))}
    </div>
    </>
    );
}
export default Movies;

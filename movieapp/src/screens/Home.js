import React from 'react';
import '../styles/Home.css';
import {Link} from 'react-router-dom';
function Home(){
    return(
        <>
                <div className="container">
            <h1>Journey into colorful cinema</h1>
        <p>Watch your favourite movies at your nearest big screens. Enjoy the latest blockbusters, timeless classics, and exclusive premieres in stunning high-definition. Experience the magic of cinema with state-of-the-art sound systems and comfortable seating. Whether you're a fan of action, drama, comedy, or romance, there's something for everyone. Don't miss out on the ultimate movie-going experience. Grab your tickets now and immerse yourself in the world of cinema like never before!</p>
        <img src=""/>
        <Link to="/signup"><div className='btn1' Link to="/signup">Sign up</div></Link>
        <Link to="/login"> <div className='btn2' >Login</div></Link>
        </div>
        </>

    );
}
export default Home;
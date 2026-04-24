import { useDispatch } from 'react-redux';
import '../styles/cards.css';
import { fetchMovieById } from '../actions/movieActions';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

function Cards({image,name,id}){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const clickHandler=()=>{
       
        navigate(`/movie/${id}`);
    }
    return(
    <>
    <div className='collection'>
<div className="card-container">
    <div className="card">
        <img src={image} alt="movie"/>
        <div className="content">
            <h2>{name}</h2>
            <p>Movie Description</p>
            <div className="btnc" onClick={clickHandler}>Book Now</div>
            </div>
        </div>
</div>
</div>
    </>);
}
export default Cards;
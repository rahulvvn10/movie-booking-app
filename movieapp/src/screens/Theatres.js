import '../styles/theatre.css';
import TCards from '../components/tcard';
import sath from '../assets/theatre/sathyam.jpg';
import palazzo from '../assets/theatre/palazzo.jpg';
import phoenix from '../assets/theatre/phoenix.jpg';
import escape from '../assets/theatre/escape.jpg';
import skywalk from '../assets/theatre/skywalk.jpg';
import s2 from '../assets/theatre/s2.jpg';
import sangam from '../assets/theatre/sangam.jpg';
import ags from '../assets/theatre/ags.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTheatres } from '../actions/theatreActions';
const theatreimg=[sath,palazzo,phoenix,escape,skywalk,s2,sangam,ags];
const theatrenames=["Sathyam Cinemas","Palazzo Cinemas","Phoenix Market City","Escape Cinemas","Skywalk","S2 Cinemas","Sangam Cinemas","AGS Cinemas"];
function Theatre(){
    const dispatch=useDispatch();
    const {loading,error,theatres}=useSelector(state=>state.theatres);
    useEffect(()=>{
        dispatch(getTheatres);
    },[dispatch])
    return (<>
    <h2 className='heading'>Theatres near you</h2>
   {theatres.map((theatre)=>(
    <TCards name={theatre.name} image={theatre.image} id={theatre._id}/>))}
   
    
    </>

    );
}
export default Theatre;

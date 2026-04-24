import { useNavigate } from 'react-router-dom';
import '../styles/tcards.css';

function TCards({image,name,id}){
    const navigate=useNavigate();
    const handleView=()=>{
        navigate(`/theatre/${id}`);
    }
    return(
    <>
    <div className='collection'>
<div className="card-container">
    <div className="carde">
        <img src={image} alt="movie"/>
        <div className="content">
            <h2>{name}</h2>
            <p>Theatre Description</p>
            <div className="btnt" onClick={handleView}>View More</div>
            </div>
        </div>
</div>
</div>
    </>);
}
export default TCards;
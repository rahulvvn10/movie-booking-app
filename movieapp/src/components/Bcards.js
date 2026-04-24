import '../styles/bcards.css';

function Bcards({image,name}){
    return(
    <>
    <div className='collection'>
<div className="card-container">
    <div className="crd">
        <img src={image} alt="movie"/>
        <div className="content">
            <h2>{name}</h2>
            <p>Movie Description</p>
            <div className="btnt">View Details</div>
            </div>
        </div>
</div>
</div>
    </>);
}
export default Bcards;
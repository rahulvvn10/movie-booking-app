import '../styles/fcards.css';

function Fcards({image,name,rate}){
    return(
    <>
    <div className='collection'>
<div className="cd-container">
    <div className="cd">
        <img src={image} alt="movie"/>
        <div className="cont">
            <h2>{name}</h2>
            <p>Rate:{rate}</p>
            <div className="btnw">Add to Cart</div>
            </div>
        </div>
</div>
</div>
    </>);
}
export default Fcards;
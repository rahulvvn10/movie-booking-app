import Bcards from '../components/Bcards';
import p2 from '../assets/movie/OIP.jpg';
import '../styles/booking.css';
function Book(){
    return (<>
    <h1 className='book'>Your previous bookings</h1>
    <Bcards image={p2} name={"Pushpa 2"}/></>
    );
}
export default Book;

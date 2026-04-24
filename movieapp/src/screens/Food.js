import Fcards from "../components/fcards";
import '../styles/food.css';
import burger from '../assets/foods/burger.jpg';
import popcorn from '../assets/foods/popcprn.jpg';
import nachos from '../assets/foods/nachos.jpg';
import frenchfries from '../assets/foods/french fries.jpg';
import cola from '../assets/foods/cola.jpg';
import pepsi from '../assets/foods/pepsi.jpg';
import cake from '../assets/foods/cake.jpg';
import hotdog from '../assets/foods/hot dog.jpg';
import icecream from '../assets/foods/icecream.jpg';
import juice from '../assets/foods/juice.jpg';
import bottle from '../assets/foods/bottle.jpg';
import icon from '../assets/foods/icon.jpg'
import '../styles/food.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFoods } from "../actions/foodActions";
const fimage=[burger,popcorn,nachos,frenchfries,cola,pepsi,cake,hotdog,icecream,juice,bottle];
const fnames=["Burger","Popcorn","Nachos","French fries","Cola","Pepsi","Cake","Hot dog","Icecream","Mango Juice","Water Bottle"];
const fprice=[200,300,70,140,130,130,150,150,140,130,70];
function Food(){
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getFoods);
    },[dispatch])
    const {foods,error,loading}=useSelector(state=>state.foods);
    if(error){<p className="danger">{error}</p>}
    if(loading){<p className="success">{loading}</p>}
    return (<>
    <div className="food-name">
    <h2>Prebook your food and avoid the crowd</h2></div>
    <div className="food-text">
   
   
    <p>
                    Prebook your food and avoid the crowd. Enjoy a seamless movie experience by pre-ordering your favorite snacks and beverages. Skip the long lines and have your food ready for you when you arrive. Whether it's popcorn, nachos, or a refreshing drink, prebooking ensures you won't miss a moment of the action. Make your movie night even more enjoyable with the convenience of prebooked food.
                    <br />
                    Our prebooking service allows you to choose from a wide variety of delicious options, ensuring that there's something for everyone. From classic movie snacks like popcorn and nachos to more substantial options like burgers and hot dogs, we've got you covered. Don't forget to quench your thirst with our selection of beverages, including cola, pepsi, and refreshing juices.
                    <br />
                    By prebooking your food, you can relax and enjoy the movie without any interruptions. No more waiting in long lines or missing important scenes. Your food will be prepared and ready for you, so you can focus on the entertainment. It's the perfect way to enhance your movie-going experience and make it truly memorable.
                    <br />
                    </p>
                    <img src={icon}></img></div>
    <h1 className="he">Foods we offer</h1>
    <div className="cd-container">
    {foods.map((food)=>(
        <Fcards image={food.image} name={food.name} rate={food.price}/>
    ))}
    </div>
        </>
    );
}
export default Food;

import React from 'react'
import './Checkoutproduct.css'
import { useStateValue } from './StateProvider';

function Checkoutproduct(props) {
    const [{basket},dispatch]=useStateValue()

    const removeFromBasket=() => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:props.id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={props.image} alt="" className="checkoutProduct__image" />
            <div className="product__info">
                <div className="checkoutProduct__title">
                    <p> {props.title} </p>
                    <p> <strong> ₹ {props.price} </strong> </p>
                    <div className="checkoutProduct__rating">
                    {Array(props.rating)
                        .fill()
                        .map((_, i) => (
                            <p> <i class="fa-solid fa-star"></i> </p>
                        ))}
                    </div>
                    <button onClick={removeFromBasket} style={{backgroundColor:"#FF9F00", padding:"5px",marginTop:"5px", border:"none", borderRadius:"10px"}}>Remove From Cart</button>
                </div>
            </div>

        </div>
    )
}

export default Checkoutproduct
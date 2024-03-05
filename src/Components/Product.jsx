import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider"


function Product({id,title,price,rating,image}) {

    const [state, dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                image:image,
                price:price,
                rating:rating
            },
        });
    };
    return (

        <div className="product">

            <div className="product__info">
                <p>{title}</p>
                <p className="product__price"> <strong>₹ </strong>   <strong>{price}</strong> </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p> <i class="fa-solid fa-star"></i> </p>
                        ))}
                </div>

            </div>

            <img src={image} alt="Bennet" />
            <button onClick={addToCart}>Add To Cart</button>

        </div>

    )
}

export default Product
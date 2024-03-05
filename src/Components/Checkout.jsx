import React from 'react'
import './Checkout.css'
import { Link } from 'react-router-dom'
import Header from './Header'
import Checkoutproduct from './Checkoutproduct'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'


function Checkout() {
    const [{basket},dispatch]=useStateValue()
  return (
    <div>
        <Header></Header>
        <div className="checkout">

            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">Your Shopping Cart</h2>
                    {
                    basket.map(item => (
                        <Checkoutproduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))
                    }
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal></Subtotal>
            </div>

        </div>
    </div>

  )
}

export default Checkout
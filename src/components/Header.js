import React from 'react'
function Header(props)
{
    console.warn(props)
    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count"> {props.storedata.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </div>
    )
}

export default Header
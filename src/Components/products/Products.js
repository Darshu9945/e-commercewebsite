import React, { useState } from 'react'
import style from "./products.module.css"

const productsArr = [

    {

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {

        title: 'Blue Color',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }

]




const Products = () => {
    const [prod, setProd] = useState(productsArr)

    return (
        <div className={style.main}>

            <div className={style.card}>
                {
                    prod.map((item, index) => {
                        return (
                            <>
                                <div className={style.inner}>
                                    <h1>Album {index + 1}</h1>
                                    <div className={style.image}>
                                    <img src={item.imageUrl} alt="image" />
                                    </div>
                                   
                                    <div className={style.down}>
                                        <p>${item.price}</p>
                                        <button>Add to cart</button>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products
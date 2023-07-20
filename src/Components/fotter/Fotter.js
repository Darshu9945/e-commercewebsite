import React from 'react'
import style from "./fotter.module.css"

const Fotter = () => {
    return (
        <div className={style.main}>

            <div className={style.left}>
                <h1>The Generics</h1>
            </div>
            <div className={style.right}>
                <span>icon</span>
                <span>icon2</span>
                <span>icon3</span>
            </div>
        </div>
    )
}

export default Fotter
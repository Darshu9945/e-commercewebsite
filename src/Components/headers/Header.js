import React from 'react'
import Cartitem from '../cartitem/Cartitem'
import classes from './header.module.css'

const Header = () => {
  return (
    <nav className={classes.navbar}>
        <div className={classes.home}>
            <p>Home</p>
            <p>Store</p>
            <p>About</p>
        </div>
        <div className={classes.cart}>
            <Cartitem></Cartitem>
        </div>
    </nav>
  )
}

export default Header

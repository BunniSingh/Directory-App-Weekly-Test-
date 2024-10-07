import React from 'react'
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';
import '../App.css';
const Navbar = () => {
  return (
    <div className="nav">
        <h1>Data Directory</h1>
        <div className="menu">
            <a href="#">Add New Person</a>
            <a href="#"><IoIosSearch className='icon'/></a>
            {/* <Link></Link> */}
            {/* <Link><IoIosSearch/></Link> */}
        </div>
    </div>
  )
}

export default Navbar
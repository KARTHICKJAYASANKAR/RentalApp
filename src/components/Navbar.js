import React , { Component } from 'react'
import Slider from "react-slick";
import HorizontalScroll from 'react-scroll-horizontal';
import { Link , useNavigate , useParams} from 'react-router-dom';
import { createContext, useContext, useState , useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from '../components/Spinner';
import '../pages/home.css'
import { BuyerIdContext } from '../App';


function Navbar({userId}) {
    const {buyerId} = useContext(BuyerIdContext);
    const BUYERID = localStorage.getItem("buyerId");
  return (
    <div className='container'>
                <nav className="navbar">
                    <div>
                        <Link to={`/home`}>
                        <img className="logo" src='https://res.cloudinary.com/dgtonwmdv/image/upload/v1716632985/images/pngtree-vector-rent-icon-png-image_708546_y7rjmp.jpg'/>
                        </Link>
                    </div>
                    <div className="nav-container">
                        <Link to={`/home/${userId}`} className="nav-link">Home</Link>
                        <Link to={`/sellProperty/${userId}`} className="nav-link">Sell Property</Link>
                        <Link to={`/myprofile/${userId}`} className="nav-link">Profile</Link>
                        <Link to="/" className="nav-link">Logout</Link>
                    </div>
                </nav>
    </div>
  )
}

export default Navbar
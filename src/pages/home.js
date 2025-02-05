import React , { Component } from 'react'
import { Link , useNavigate , useParams} from 'react-router-dom';
import { createContext, useContext, useState , useEffect } from 'react';
import './home.css';
import Navbar from '../components/Navbar';



function Home() {
    const {id} = useParams();
     const navigate = useNavigate();
    const [sellers, setSellers] = useState([]);
    const [searchtext, setSearchtext] = useState(null);
  

    async function fetchAllData() {
        console.log("Fetch all sellers in home page func called");
        const response = await fetch(`http://localhost:5000/fetchData`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        console.log(data);
        setSellers(data);
      }

    useEffect(() => {
      
  
      fetchAllData();
    }, []);


  

    const handlefilter= async(e)=>{
        e.preventDefault();

        if(searchtext===""){
            fetchAllData();
        }
        const response = await fetch(`http://localhost:5000/fetchfilter`, {
            method: 'POST',
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                searchtext,
            })
        });
        const data = await response.json();
        console.log(data);
        setSellers(data);

    }


    const handleinterest = (userId)=>{
        navigate(`/sellerpage/${userId}`);
    }


    return (
      <div className='home'>
        <Navbar userId={id} />
        <div className='filterrr'>
        <input  className='inputfilter' type='text' placeholder='Filter by city..' value={searchtext} onChange={(e)=>{setSearchtext(e.target.value)}}/>
        <button className='btn-fil' onClick={handlefilter}>Search</button>
        </div>
        
        <div className='seller-cards'>
          {sellers.map((seller) => (

                    <div className='card'>
                    {seller.imageUrl && <img src={seller.imageUrl} alt={`${seller.firstName} ${seller.lastName}`} />}
                    <h2>{seller.firstName} {seller.lastName}</h2>

                    <p><strong>Price:</strong> ${seller.price}</p>
                    <p><strong>Area:</strong> {seller.area}</p>
                    <p><strong>Place:</strong> {seller.place}</p>
                    <p><strong>Bedrooms:</strong> {seller.bedrooms}</p>
                    <p><strong>Bathrooms:</strong> {seller.bathrooms}</p>
                    <p><strong>Near By College / Hospital:</strong> {seller.nearBy}</p>
                    <button className='btn-fil' onClick={()=>{handleinterest(seller.userId)}}>Interested</button>
                    </div>
                                
          ))}
        </div>
      </div>
    );
  };

  

export default Home;
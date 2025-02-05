import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState , useEffect } from 'react';
import { useParams   } from 'react-router-dom';
import './productbuy.css';
import Spinner from './Spinner';
import Navbar from './Navbar';
import StripeCheckout from "react-stripe-checkout";




function SellerPage() {

    const {id}=useParams();
    const[ID , SetID] = useState(null);
    const navigate = useNavigate();

    const[property , setProperty] = useState([]);
    async function fetchAllData() {
        SetID(id);
      console.log("Fetch all sellers in home page func called");
      console.log(id);
      const response = await fetch(`http://localhost:5000/fetchMyproperty/${id}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      console.log(data);
      setProperty(data);
    }


    useEffect(() => {
        
    
        fetchAllData();
      }, []);

     


      return (
        <div>
            <Navbar userId={id} />
    
            {property.length ? (
                <div className="outerdiv">
                    <div className="head-div">
                        <h2>My properties:</h2>
                    </div>
                    {property.map((item) => (
                        <div key={item._id} className="imag-btn-div">
                            <div className="img-div">
                                <img className="img" src={item.imageUrl} alt="Property" />
                                <p>Price : RS. {item.price}</p>
                                <p>Place and area :  {item.place} , {item.area}</p>
                            </div>
                            <div className="btn-div">
                               <p>No.Of.Bedrooms: {item.bedrooms}</p>
                               <p>No.Of Bathrooms : {item.bathrooms}</p>
                               <p>Nearby college/hospital : {item.nearBy}</p>
                            </div>
                        </div>  
                    ))}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}


export default SellerPage

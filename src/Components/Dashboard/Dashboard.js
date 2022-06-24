import React,{useState,useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import "./dashboard.css"
import data from "./data.js"

 function Dashboard() {

    const [BurgerData, setBurgerData] = useState();
    const navigate = useNavigate();

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'db75d93327mshd2c095a1b94c140p1bf864jsnbd495ee77cc8',
          'X-RapidAPI-Host': 'burgers1.p.rapidapi.com'
        }
      };

      

      useEffect(() => {
        fetch('https://mocki.io/v1/fb352889-1513-4bcd-905c-6bbf71493430')
        .then(res => res.json())
        .then(data => setBurgerData(data))
 
      },[])

      const navigateToDetails = (id) => {
        navigate(`/details/${id}`);
      };

    
  return (
    <div className='main-container'>
        {BurgerData ? BurgerData.map((item,index)=>{
            return(
                <div className='card' onClick={() => navigateToDetails(item.id)} >
                <div key={index}>
                    <h1 className='BurgerName'>{item.name}</h1>
                    <h2 className='Restaurant'>Restaurant:- {item.restaurant}</h2>
                </div>
                </div>
            )
        }) : <h1>Loading...</h1>}
    </div>
  )
}

export default Dashboard;

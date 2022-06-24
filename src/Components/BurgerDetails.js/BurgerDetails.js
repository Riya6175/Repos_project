import React,{useState,useEffect} from 'react'
import {NavLink, Link} from 'react-router-dom'
import { useParams } from 'react-router';
import "./styles.css"

export default function BurgerDetails(props) {
    const [Burger, setBurger] = useState();
    let { id } = useParams();


    useEffect(() => {
        fetch('https://mocki.io/v1/fb352889-1513-4bcd-905c-6bbf71493430')
        .then(res => res.json())
        .then(data => setBurger(data))
      },[])


      const opentab = (url) => {
        console.log(url)
        window.history.replace({
            search: url,
          })
      }
    
  return (
    <div>
        {Burger ? 
        <>
            <div className='header'>
            <h1 className='RestaurantID'>{Burger[id].restaurant}</h1>
            {Burger[id].addresses.length == 1 ? <h6 className='address'>{Burger[id].addresses[0].number},{Burger[id].addresses[0].line1},{Burger[id].addresses[0].line2},{Burger[id].addresses[0].postcode},{Burger[id].addresses[0].country}</h6> 
            : Burger[id].addresses.map((add,i) => {
               return (<div><h6 className='address'>Address {i+1}:-{add.number},{add.line1},{add.line2},{add.postcode},{add.country}</h6></div>)
            })}
            <p>Our Website:-<a href={`http://${Burger[id].web}`} target={'_blank'} rel="noopener noreferrer external">{Burger[id].web}</a></p>
            </div>

            <div className='container'>
                <div className='BurgerDesc'>
                <h1 className='BurgerNameID'>Burger Name:- {Burger[id].name}</h1>
                <h1 className='desc'><p className='desch'>How is the Burger?</p>{Burger[id].description}</h1>
                </div>
                <div  className='ingredients'>
                    <p className='ingh'>What Does it includes?</p>
                {
                    Burger[id].ingredients.map((ing,i) => {
                        return (
                            <li className='ingname'>{ing}</li>
                        )
                    })
                }
                </div>
        </div> 
        </>
        : <h1>Loading...</h1>}
    </div>
  )
}

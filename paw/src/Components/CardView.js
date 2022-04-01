import React from 'react'
import test from '../Images/blue.png'

const CardView = () => {
  return (
  //FEATURED BREED CARDS
    <div>
        <div className="row row-cols-2 row-cols-sm-4 g-4">
        <div className="col">
            <div className="card">
            <img src= {test} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 alignitems = 'center' className="card-title">Abyssinian</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src= {test} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Persian</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src= {test} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Bengal</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src= {test} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Sphynx</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CardView

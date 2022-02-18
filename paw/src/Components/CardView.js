import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import {Card} from 'react-bootstrap'

//TODO: Delete placeholder to make dynamic
const CardView = () => {
  return (
    <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Abyssinian</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Persian</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Bengal</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CardView

import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import {Card} from 'react-bootstrap'
import test from '../Images/blue.png'

const CardView = () => {
  return (
    <div>
        <div class="row row-cols-2 row-cols-sm-4 g-4">
        <div class="col">
            <div class="card">
            <img src= {test} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 alignitems = 'center' class="card-title">Abyssinian</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
            <img src= {test} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Persian</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
            <img src= {test} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Bengal</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
            <img src= {test} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Sphynx</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CardView

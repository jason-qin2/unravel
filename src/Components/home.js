/*global chrome*/
import React, {Component, useState, useEffect} from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter} from 'reactstrap';
import "./css/home.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Home() {
    const [url, setUrl] = useState("");
    const [materials, setMaterials] = useState([]);
    const [toggle, setToggle] = useState(true);

    return (
        <div class="top" >
            <div class="home-card">
                <img src={require("./shirt.JPG")}></img>
                <h1>Explore a new brand!</h1>
                <h2>Todays featured brand is</h2>
                <a class="store-link" href="https://kotn.com/" target="_blank"><img src={require("./kotn.png")}></img></a>
                <div class="redirect">
                    <Button color="white"><Link class="unravel-link" to="/Scrape">Unravel</Link></Button>
                </div>
            </div>
        </div>
        
    );
  }
  
  export default Home;
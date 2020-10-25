/*global chrome*/
import React, {Component, useState, useEffect} from 'react';
import rp from "request-promise";
import { Button, Card, CardHeader, CardBody, CardFooter} from 'reactstrap';
import "./css/error.css";

function ErrorPage() {
    const [url, setUrl] = useState("");
    const [materials, setMaterials] = useState([]);
    const [toggle, setToggle] = useState(true);

    return (
        <div class="top" >
            {/*<img src={require("./logo.JPG")}></img>*/}
            <div class="error-card">
                <h1>Oh No!</h1>
                <img src={require("./ball.JPG")}></img>
                <h2>No materials or brands found</h2>
                <h4>Try again on a store's page</h4>
            </div>
        </div>
        
    );
  }
  
  export default ErrorPage;
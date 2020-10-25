/*global chrome*/
import React, {Component, useState, useEffect} from 'react';
import rp from "request-promise";
import { Button, Card, CardHeader, CardBody, CardFooter} from 'reactstrap';
import "./css/fact.css";

function Fact() {
    const [url, setUrl] = useState("");
    const [materials, setMaterials] = useState([]);
    const [toggle, setToggle] = useState(true);

    return (
        <div class="top" >
            {/*<img src={require("./logo.JPG")}></img>*/}
            <div class="fact-card">
                <img src={require("./lightbulb.png")}></img>
                <h1>Did you Know?</h1>
                <h2>Clothes can take up to 40 years to decompose</h2>
                <h4>Try donating them to people who would really appreciate them!</h4>
            </div>
        </div>
        
    );
  }
  
  export default Fact;
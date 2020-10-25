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
        <div>
            <h1>Oh No!</h1>
            <h2>No materials or brands found</h2>
            <h4>Try again on a store's page</h4>
        </div>
    );
  }
  
  export default ErrorPage;
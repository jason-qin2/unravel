/*global chrome*/
import React, {Component, useState, useEffect} from 'react';
import rp from "request-promise";
import { Button, Card, CardHeader, CardBody, CardFooter} from 'reactstrap';
import ErrorPage from './ErrorPage';
import "./css/popup.css";
import ReactDOM from "react-dom";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

function WebScrape() {
    const [url, setUrl] = useState("");
    const [materials, setMaterials] = useState([]);
    const [numMats, setNumMats] = useState(0);
    const [toggle, setToggle] = useState(true);
    const [noMats, setNoMats] = useState(false);
  
    useEffect (() => {
      // use the request-promise library to fetch the HTML from
      chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
          if (tabs.length > 0) {
            console.log(tabs);
            let _url = tabs[0].url;
            setUrl(_url);
            rp("http://localhost:8080/" + _url)
                .then(html => {
                    var m = [];
                    //console.log(html);
                    if (html.includes("cotton")) {
                        console.log("cotton");
                        m.push("cotton");
                    }
                    if (html.includes("polyester")) {
                        console.log("polyester");
                        m.push("polyester");
                    }
                    if (html.includes("wool")) {
                        console.log("wool");
                        m.push("wool");
                    }
                    setMaterials(m);
                    setNumMats(m.length);
                    if (m.length > 0) {
                        setNoMats(false);
                    } else {
                        setNoMats(true);
                    }
                })
                .catch(error => console.log("This page has no materials"))
            }
      });
    })

    if (materials.length == 0) {
        return (
            <ErrorPage />
        );
    }
    else {
        return (
        <div>
            <h3>Details</h3>
            <h1>See Materials</h1>
            <h2>OR</h2>
            <h1>Explore better alternatives</h1>
            <div></div>
            <ul>
                {materials.map(m => {
                    return <li>{m}</li>
                })}
            </ul>
        </div>
        );
    } 
  }
  
  export default WebScrape;
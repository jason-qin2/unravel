/*global chrome*/
import React, {Component, useState, useEffect} from 'react';
import rp from "request-promise";
import { Button, Card, CardHeader, CardBody, CardFooter, CardTitle, CardText, Table, Col} from 'reactstrap';
import ErrorPage from './ErrorPage';
import MaterialPage from './MaterialPage';
import "./css/popup.css";
import ReactDOM from "react-dom";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

function WebScrape() {
    const [url, setUrl] = useState("");
    const [materials, setMaterials] = useState(["NA"]);
    const [numMats, setNumMats] = useState(0);
    const [toggle, setToggle] = useState(true);
    const [noMats, setNoMats] = useState(false);
    const [index, setIndex] = useState(0);
    const [cotton, setCotton] = useState(false);
    const [polyester, setPolyester] = useState(false);
    const [wool, setWool] = useState(false);
  
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
                        setCotton(true);
                    }
                    if (html.includes("polyester")) {
                        console.log("polyester");
                        m.push("polyester");
                        setPolyester(true);
                    }
                    if (html.includes("wool")) {
                        console.log("wool");
                        m.push("wool");
                        setWool(true);
                    }
                    setMaterials(m);
                    setNumMats(m.length);
                    if (m.length > 0) {
                        setNoMats(false);
                    } else {
                        setNoMats(true);
                    }
                })
                .catch(error => setMaterials([]))
            }
      });
    })

    const cottonCard = (
        <Card body inverse style={{ backgroundColor: 'white' }}>
        <CardText>
            <Table styles={{alignitems: 'center', justifycontent: 'center'}}>
                <thead>
                    <h4>Cotton</h4>
                </thead>
                <tbody>
                    <Col>
                        <tr><th scope='row'>Carbon Emissions:</th><td>1kg of cotton fiber = 12.5kg of CO2</td></tr>
                        <tr><th scope='row'>Water Consumption:</th><td>20,000L to produce 1kg of cotton</td></tr>
                    </Col>
                </tbody>
            </Table>
        </CardText>
        <a class="store-link" href="https://www.worldwildlife.org/industries/cotton#:~:text=Impacts,-%C2%A9%20Fran%C3%A7ois%20Xavier&text=It%20is%20estimated%20that%2097,of%20habitat%20to%20agricultural%20use." target="_blank">Learn more</a>

      </Card>
    );

    const polyesterCard = (
        <Card body inverse style={{ backgroundColor: 'white' }}>
        <CardText>
            <Table styles={{alignitems: 'center', justifycontent: 'center'}}>
                <thead>
                    <h4>Polyester</h4>
                </thead>
                <tbody>
                    <Col>
                        <tr><th scope='row'>Carbon Emissions:</th><td>1kg polyester = 34.7kg CO2</td></tr>
                        <tr><th scope='row'>Water Consumption:</th><td>1kg of polyester = 26700L of water</td></tr>
                    </Col>
                </tbody>
            </Table>
        </CardText>
        <a class="store-link" href="https://ecocult.com/exactly-polyester-bad-environment/" target="_blank">Learn more</a>
      </Card>
    );

    const woolCard = (
        <Card body inverse style={{ backgroundColor: 'white' }}>
        <CardText>
            <Table styles={{alignitems: 'center', justifycontent: 'center'}}>
                <thead>
                    <h4>Wool</h4>
                </thead>
                <tbody>
                    <Col>
                        <tr><th scope='row'>Carbon Emissions:</th><td>1kg of wool = 17.5kg of CO2</td></tr>
                        <tr><th scope='row'>Water Consumption:</th><td>551L to produce 1kg of wool</td></tr>
                    </Col>
                </tbody>
            </Table>
        </CardText>
        <a class="store-link" href="https://theecologist.org/2019/mar/12/environmental-impact-wool" target="_blank">Learn more</a>
      </Card>
    );

    if (materials.length == 0) {
        return (
            <ErrorPage />
        );
    }
    else {
        return (
            <div class="top" >
                {/*<img src={require("./logo.JPG")}></img>*/}
                <p>This clothing item uses the following materials:</p>
                <div>
                    {cotton ? 
                    <div class="material-card">
                        {cottonCard}
                        <img src={require("./line.JPG")}></img>
                    </div> : ""}

                    {polyester ? 
                    <div class="material-card">
                        {polyesterCard}
                        <img src={require("./line.JPG")}></img>
                    </div> : ""}

                    {wool ? 
                    <div class="material-card">
                        {woolCard}
                        <img src={require("./line.JPG")}></img>
                    </div> : ""}
                    
                </div>
            </div>
        );
    } 
  }
  
  export default WebScrape;
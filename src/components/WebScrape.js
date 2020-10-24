/*global chrome*/
import React, {Component, useState, useEffect} from 'react';
import rp from "request-promise";
import { Button, Card, CardHeader, CardBody, CardFooter} from 'reactstrap';

function WebScrape() {
    const [url, setUrl] = useState("");
    const [materials, setMaterials] = useState([]);
    const [toggle, setToggle] = useState(true);
  
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
                    console.log(html);
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
                    if (html.includes("cashmere")) {
                        console.log("cashmere");
                        m.push("cashmere");
                    }
                    setMaterials(m);
                })
            }
      });
    })

    return (
        <div>
            <Card>
                <CardHeader>
                    Unravel
                </CardHeader>
                <ul>
                    {materials.map(m => {
                        return <li>{m}</li>
                    })}
                </ul>
                <Button>{toggle ? "turn off": "turn on"}</Button>
                {/*<Button onClick={setToggle(!toggle)} >{toggle? "turn off": "turn on"}</Button>*/}
            </Card>
            
        </div>
    );
  }
  
  export default WebScrape;
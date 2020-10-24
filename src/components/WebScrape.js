/*global chrome*/
import React, {Component, useState, useEffect} from 'react';
import rp from "request-promise";

function WebScrape() {
    const [url, setUrl] = useState("");
    const [materials, setMaterials] = useState([]);
  
    useEffect (() => {
      // use the request-promise library to fetch the HTML from pokemon.org
      chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
          if (tabs.length > 0) {
            console.log(tabs);
            let _url = tabs[0].url;
            setUrl(_url);
            rp("https://cors-anywhere.herokuapp.com/" + _url)
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
                    setMaterials(m);
                })
            }
      });
    })

    const listItems = materials.map(m => {
        <li>{m}</li>
    });

    /*useEffect(() => {
        componentDidMount()
    })*/

    return (
        <div>
            <ul>
                {materials.map(m => {
                    return <li>{m}</li>
                })}
            </ul>
        </div>
    );
  }
  
  export default WebScrape;
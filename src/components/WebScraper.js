/*global chrome*/
import React, {Component, useState} from 'react';
import rp from "request-promise";

class WebScraper extends Component {
    state = {
        url: ""
    };
  
    componentDidMount() {
      // use the request-promise library to fetch the HTML from pokemon.org
      chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        console.log(tabs);
        let _url = tabs[0].url;
        console.log(_url)
      rp("https://cors-anywhere.herokuapp.com/" + _url)
        .then(html => {
            console.log(html);
            if (html.includes("cotton")) {
                console.log("cotton");
            }
            if (html.includes("polyester")) {
                console.log("polyester");
            }
        })
    });
      
    }
  
    render() {
      return (
          <div></div>
      );
    }
  }
  
  export default WebScraper;
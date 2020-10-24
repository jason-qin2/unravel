/*global chrome*/
import React, {Component, useState} from 'react';
import rp from "request-promise";

class WebScraper extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      materials: [],
      cotton: false,
      polyester: false
    };
  }
  
    componentDidMount() {
      // use the request-promise library to fetch the HTML from pokemon.org
      chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        console.log("hi");
        console.log(tabs);
        let _url = tabs[0].url;
        this.state.url = _url;
        console.log(this.state.url);
      rp("https://cors-anywhere.herokuapp.com/" + this.state.url)
        .then(html => {
            console.log(html);
            if (html.includes("cotton")) {
                console.log("cotton");
                this.state.materials.push("cotton");
                this.state.cotton = true;
            }
            if (html.includes("polyester")) {
                console.log("polyester");
                this.state.materials.push("polyester");
                this.state.polyester = true;
            }
            console.log(this.state.materials);
            console.log(this.state);
        })
      });
    }
  
    render() {
      return (
          <div>
            <p>The first element is {this.state.materials[0]}</p>
            <ul>
              {this.state.cotton? <li>cotton</li> : ""}
              {this.state.polyester? <li>polyester</li> : ""}
            </ul>
          </div>
      );
    }
  }
  
  export default WebScraper;
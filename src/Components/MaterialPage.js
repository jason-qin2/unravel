/*global chrome*/
import React, {Component, useState, useEffect} from 'react';
import rp from "request-promise";
import { Button, Card, CardHeader, CardBody, CardFooter, Table, Col} from 'reactstrap';

function ErrorPage({material}) {

    const cottonFacts = (
    <Table styles={{alignitems: 'center', justifycontent: 'center'}}>
        <thead>
            <h3>This clothing item uses the following materials:</h3>
            <h2>Material: {material}</h2>
        </thead>
        <tbody>
            <Col>
                <tr><th scope='row'>Carbon Emissions:</th><td>1kg of cotton fiber = 12.5kg of CO2</td></tr>
                <tr><th scope='row'>Water Consumption:</th><td>20,000L to produce 1kg of cotton</td></tr>
            </Col>
        </tbody>
    </Table>);

    const polyesterFacts = (
    <Table>
        <thead>
            <h3>This clothing item uses the following materials:</h3>
            <h2>Material: {material}</h2>
        </thead>
        <tbody>
            <Col>
                <tr><th scope='row'>Carbon Emissions:</th><td>1kg polyester = 34.7kg CO2</td></tr>
                <tr><th scope='row'>Water Consumption:</th><td>1kg of polyester = 26700L of water</td></tr>
            </Col>
        </tbody>
    </Table>);

    const woolFacts = (
    <Table>
        <thead>
            <h3>This clothing item uses the following materials:</h3>
            <h2>Material: {material}</h2>
        </thead>
        <tbody>
            <Col>
                <tr><th scope='row'>Carbon Emissions:</th><td>1kg of wool = 17.5kg of CO2</td></tr>
                <tr><th scope='row'>Water Consumption:</th><td>551L to produce 1kg of wool</td></tr>
            </Col>
        </tbody>
    </Table>);

    return (
        <div>
            {material == "cotton" ? cottonFacts : ""}
            {material == "polyester" ? polyesterFacts : ""}
            {material == "wool" ? woolFacts : ""}
        </div>
    );
  }
  
  export default ErrorPage;
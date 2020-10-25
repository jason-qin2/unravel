/*global chrome*/
import React, {Component, useState, useEffect} from 'react';
import rp from "request-promise";
import { Button, Card, CardHeader, CardBody, CardFooter} from 'reactstrap';

function ErrorPage({material}) {

    return (
        <div>
            <h1>Material: {material}</h1>
            <Table>
                <tbody>
                    <Col>
                        <tr><th scope='row'>Carbon Emissions:</th><td>2</td></tr>
                    </Col>
                </tbody>
            </Table>
        </div>
    );
  }
  
  export default ErrorPage;
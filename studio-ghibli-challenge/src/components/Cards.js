import React from 'react'
import {
    Card, CardText, CardBody,
  } from 'reactstrap';
  

export const Cards = (props) => {
    //console.log(props);
    return (
        <>
            <div className="col-sm-4 p-3">
                    <Card >
                        <CardBody>
                            <h5 className="card-title">{props.title}</h5>
                            <CardText >{props.description}</CardText>
                        </CardBody>
                    </Card>
            </div>
        </>
    )
};


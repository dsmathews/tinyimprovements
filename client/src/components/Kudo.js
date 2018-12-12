import React from 'react';
import {Card, CardTitle, CardBody, CardSubtitle, CardText} from 'reactstrap';

const Kudo = (props) => (
    <div>
        <Card>
            <CardBody className='cardbody'>
                <CardTitle>To: {props.to}</CardTitle>
                <CardTitle>From: {props.from}</CardTitle>
                <CardSubtitle>Title: {props.title}</CardSubtitle>
                <CardText>{props.message}</CardText>
            </CardBody>
        </Card>
    </div>
)

export default Kudo;
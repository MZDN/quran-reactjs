
import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';
import {Button,Card,Col,Row} from 'react-bootstrap'

class QuranPage extends Component {
    render() {
        return(
            <div className="container">
                <div className="container-fluid">
                <Row>  
                {this.props.quranData.map((item=>
   
                        <Card style={{ width: '10rem'}}  key={item.aptId}>
                        <Card.Img variant="top" src={'https://assets-1f14.kxcdn.com/images/' + (item.number).toString().padStart(3, '0')+'.svg'}  fluid/>
                            <Card.Body>
                                <Card.Title>{item.englishName} - {item.englishNameTranslation} </Card.Title>
                                <Card.Text>
                                    <span>Number {item.number}</span><br/>
                                    <span>Number of Ayahs {item.ayahs.length}</span><br/>
                                    <span>Revelation Type: {item.revelationType}</span>
                                </Card.Text>
                                <Button variant="primary">Read</Button>
                            </Card.Body>
                        </Card>
                        
                ))}
                        
                        </Row>
                </div>
            </div>
        );
    }
}

export default QuranPage;
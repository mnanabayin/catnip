import React from "react" 
import {
    Container,Row,Col,Image
  } from 'react-bootstrap'

class Category extends React.Component {
    constructor(props) 
    {
        super(props)
        this.state = {
            categories: [],
        }
    }

    async componentDidMount() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'x-api-key' : '26be2bb2-7860-4c85-937d-13e8c705a202'     
            },
        };
        const response = await fetch('https://api.thecatapi.com/v1/categories', requestOptions);
        const data = await response.json();
        this.setState({ categories: data });
    }

    catgoryList(data) {
        return data.map((entry, index) => {
            return (
                    <Col  md="auto">
                      <Image src={process.env.PUBLIC_URL + '/assets/'+entry.name+'.jpeg'} thumbnail/>
                        <div className="category">
                            {entry.name}
                        </div>
                    </Col>
              
            )   
       })
    }



    render() {
        return (
            <>
            <Container>
            <Row className="justify-content-md-center"> 
                  <Col  xs lg="8">
                     <Image src={process.env.PUBLIC_URL + '/assets/Logo.svg'} className="App-logo"/>
                  </Col>
                  <Col >
                  </Col>
                  <Col>
                  </Col>
                </Row>
                <br/>
                <Row className="justify-content-md-center"> 
                    <Col  md="auto">
                    </Col>
                    <Col  md="auto">
                      <strong>Select a category</strong>
                    </Col>
                    <Col  md="auto">
                    </Col>
                </Row>
                <br/>

                <Row className="justify-content-md-center">
                      {this.catgoryList(this.state.categories)}
                 </Row>
            </Container>
            </>
        ) 
    }

}

export default Category
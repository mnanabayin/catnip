import React from "react" 
import {
    Container,Row,Col,Image
  } from 'react-bootstrap'

import CategoryListView from './CategoryListView'

class Category extends React.Component {
    constructor(props) 
    {
        super(props)
        this.state = {
            categories: [],
            categoriesList:[],
            categoryName:"",
            viewList:false
        }
    }

    async componentDidMount() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'x-api-key' : process.env.REACT_APP_CAT_API_KEY   
            },
        };
        const response = await fetch(process.env.REACT_APP_CAT_API_URL+'categories', requestOptions);
        const data = await response.json();
        this.setState({ categories: data });
    }

    catgoryList(data) {
        return data.map((entry, index) => {
            return (
                    <Col  md="auto" key={"col-"+index}>
                      <Image src={process.env.PUBLIC_URL + '/assets/'+entry.name+'.jpeg'} thumbnail/>
                        <div className="category" onClick={() => this.viewCategory(entry.id)}>
                            {entry.name}
                        </div>
                    </Col>
              
            )   
       })
    }

    async viewCategory(id){

        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'x-api-key' : process.env.REACT_APP_CAT_API_KEY   
            },
        };
        const response = await fetch(process.env.REACT_APP_CAT_API_URL+'images/search?category_ids='+id+'&limit=10&size=full', requestOptions);
        const data = await response.json();
        if(data !== null && data.length !== 0)
        {
            const urlList = []
            data.map((d)=> {return urlList.push(d.url)})
            this.setState({ categoryName: data[0].categories[0].name });
            this.setState({ categoriesList: urlList });
            this.setState({ viewList: true });
        }
        else{
            alert("No images available")
            this.setState({ viewList: false });
        }
        

    }



    render() {
        if (this.state.viewList) {return <CategoryListView categoryName={this.state.categoryName} imageUrlList={this.state.categoriesList}/>}
        return (
            <>
             
            <Container>
                <Row className="justify-content-md-center"> 
                  <Col className="imageCol">
                     <Image src={process.env.PUBLIC_URL + '/assets/Logo.svg'} className="App-logo"/>
                  </Col>
                </Row>
                <br/>
                <Row className="justify-content-md-center"> 
                    <Col  md="auto">
                      <strong>Select a category</strong>
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
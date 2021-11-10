import React from "react" 
import {
    Container,Row,Col,Image,Button
  } from 'react-bootstrap'
import Category from './Category'

class CategoryListView extends React.Component {
    constructor(props) 
    {
        super(props)
        this.state = {
            categoryName: props.categoryName,
            imageUrlList: props.imageUrlList,
            nextImage:0,
            petIt:0,
            skipIt:0,
            dontPetIt:0,
            isNewcategory:false
        }
    }


    nextItem = () => {
        this.setState({ nextImage: this.state.nextImage + 1 });
    }


    dontPetIt = () =>
    {
        this.setState({ dontPetIt: this.state.dontPetIt + 1 });
        this.nextItem()
    }

    skipIt = () =>
    {
        this.setState({ skipIt: this.state.skipIt + 1 });
        this.nextItem()
    }

    petIt = () =>
    {
        this.setState({ petIt: this.state.petIt + 1 });
        this.nextItem()
    }

    restartSameCategory = () =>
    {
        this.setState({ nextImage: 0, dontPetIt: 0, skipIt: 0, petIt: 0 });
    }

    newCategory = ()=>
    {
        this.restartSameCategory()
        this.setState({isNewcategory:true})
    }

    render() {

        if(this.state.isNewcategory)
        {
            return(<Category/>)
        }

        if (this.state.nextImage === this.state.imageUrlList.length) 
        {

            return (
                <>
                <Container>
                    <Row className="justify-content-md-center"> 
                        <Col className="imageCol2">
                            <Image src={process.env.PUBLIC_URL + '/assets/Logo.svg'} className="App-logo"/>
                            <br/>
                            <br/>
                            <span> <strong>{'>'} Stats</strong></span>
                            <br/>
                            <br/>
                            <br/>
                            <span>Cats seen: {this.state.nextImage}</span>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="justify-content-md-center">
                        <Col>
                                <Row className="resultDiv justify-content-md-center" md={12}>
                                    <Col style={{textAlign:"left"}} md={4}>
                                       <div className="rounded-circle-red-result">
                                          <Image className="resultSvg"  src={process.env.PUBLIC_URL + '/assets/DontPet.svg'} />
                                       </div>
                                    </Col>
                                    <Col md={8}>
                                         <div className="resultVal">
                                            <h2 style={{color:"#EF4444"}}><strong>{this.state.dontPetIt}</strong></h2>
                                         </div>
                                         <div className="resultTxt" >
                                            <h6 style={{textAlign:"right"}}><strong>Cats you didn't pet</strong></h6>
                                         </div>
                                    </Col>
                                </Row>
                        </Col>
                        <Col>
                             <Row className="resultDiv justify-content-md-center" md={12}>
                                    <Col style={{textAlign:"left"}} md={4}>
                                        <div className="rounded-circle-gray-result">
                                          <Image className="resultSvg" src={process.env.PUBLIC_URL + '/assets/Skip.svg'} />
                                        </div>
                                    </Col>
                                    <Col>
                                         <div className="resultVal" md={8}>
                                            <h2 style={{color:"gray"}}><strong>{this.state.skipIt}</strong></h2>
                                         </div>
                                         <div className="resultTxt">
                                            <h6 style={{textAlign:"right"}}><strong>Cats you skipped</strong></h6>
                                         </div>
                                    </Col>
                                </Row>
                        </Col>
                        <Col>
                                <Row className="resultDiv justify-content-md-center" md={12}>
                                    <Col style={{textAlign:"left"}} md={4}>
                                        <div className="rounded-circle-green-result">
                                          <Image className="resultSvg" src={process.env.PUBLIC_URL + '/assets/Pet.svg'} />
                                        </div>
                                    </Col>
                                    <Col>
                                         <div className="resultVal" md={8}>
                                            <h2 style={{color:"#10B981"}}><strong>{this.state.petIt}</strong></h2>
                                         </div>
                                         <div  className="resultTxt">
                                            <h6 style={{textAlign:"right"}}><strong>Cats you petted</strong></h6>
                                         </div>
                                    </Col>
                                </Row>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <Row className="justify-content-md-center">
                        <Col>
                            <Button className="buttons" onClick={() => this.restartSameCategory()} style={{backgroundColor:"#F28700",color:"white",borderColor:"#F28700"}}>RESTART IN SAME CATEGORY</Button>{' '}
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col>
                            <Button variant="outline-dark" className="buttons" onClick={() => this.newCategory()}>SELECT NEW CATEGORY</Button>{' '}
                        </Col>
                    </Row>
            </Container>
            </>

            )
        
        }


        return (
            <>
            <Container>
                <Row className="justify-content-md-center"> 
                  <Col className="imageCol">
                     <Image src={process.env.PUBLIC_URL + '/assets/Logo.svg'} className="App-logo"/>
                     <br/>
                     <br/>
                     <span> <strong>{'>'} {this.state.categoryName[0].toUpperCase() + this.state.categoryName.substring(1)}</strong></span>
                  </Col>
                </Row>
                <br/>
                <Row className="justify-content-md-center"> 
                    <Col  md="auto">
                      <strong>Would you pet it?</strong>
                    </Col>
                </Row>
                <br/>
                <Row className="justify-content-md-center">
                      <Col  md="auto">
                            <div className="imgDiv">
                                     <Image className="categoryViewImage" src={this.state.imageUrlList[this.state.nextImage]}/>
                            </div>
                         <div className="categoryView">
                         <span style={{color:"gray",fontSize:"12px"}}> Cat {this.state.nextImage + 1}/{this.state.imageUrlList.length}</span>
                            <br/>
                             <Row>
                                 <Col>
                                     <div className="rounded-circle-red"  onClick={() => this.dontPetIt()}>
                                         <Image src={process.env.PUBLIC_URL + '/assets/DontPet.svg'}/>
                                     </div>
                                     <br/>
                                     <span style={{color:"#EF4444",fontSize:"13px"}}> Don't pet it!</span>
                                </Col>
                                <Col>
                                     <div className="rounded-circle-gray" onClick={() => this.skipIt()}>
                                        <Image src={process.env.PUBLIC_URL + '/assets/Skip.svg'} />
                                     </div>
                                     <br/>
                                     <span style={{color:"gray",fontSize:"13px"}}>Skip it!</span>
                                </Col>
                                <Col>
                                    <div className="rounded-circle-green" onClick={() => this.petIt()}> 
                                         <Image src={process.env.PUBLIC_URL + '/assets/Pet.svg'} />
                                    </div>
                                     <br/>
                                     <span style={{color:"#10B981",fontSize:"13px"}}>Pet it!</span>
                                </Col>
                            </Row>
                         </div>
                      </Col>
                </Row>
            </Container>
            </>
        ) 
    }

}

export default CategoryListView
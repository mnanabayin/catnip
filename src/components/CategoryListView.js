import React from "react" 
import {
    Container,Row,Col,Image,Button
  } from 'react-bootstrap'

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
        }
    }

    async componentDidMount() {
       
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

    render() {

        if (this.state.nextImage === this.state.imageUrlList.length) 
        {

            return (
                <>
                <Container>
                    <Row className="justify-content-md-center"> 
                    <Col className="imageCol2">
                        <Image src={process.env.PUBLIC_URL + '/assets/Logo.svg'} className="App-logo"/>
                        <br/>
                        <span> <strong>{'>'} Stats</strong></span>
                        <br/>
                        <span><strong>Cats seen: {this.state.nextImage}</strong></span>
                    </Col>
                    </Row>
                    <br/>
                    <Row className="justify-content-md-center">
                        <Col  md="4">
                                <Row className="resultDiv row">
                                    <Col style={{textAlign:"left"}}>
                                        <Image style={{paddingTop:"15px",paddingBottom:"10px"}} src={process.env.PUBLIC_URL + '/assets/DontPet.svg'} />
                                    </Col>
                                    <Col style={{textAlign:"right"}}>
                                         <div style={{textAlign:"right"}}>
                                            <span style={{color:"#EF4444",fontSize:"18px !important"}}><strong>{this.state.dontPetIt}</strong></span>
                                         </div>
                                         <div style={{width:"90px"}}>
                                            <span style={{fontSize:"10px",textJustify:"left"}}><strong>Cats you didn't pet</strong></span>
                                         </div>
                                    </Col>
                                </Row>
                        </Col>
                        <Col  md="4">
                             <Row className="resultDiv row">
                                    <Col style={{textAlign:"left"}}>
                                        <Image style={{paddingTop:"15px",paddingBottom:"10px"}} src={process.env.PUBLIC_URL + '/assets/Skip.svg'} />
                                    </Col>
                                    <Col style={{textAlign:"right"}}>
                                         <div style={{textAlign:"right"}}>
                                            <span style={{color:"gray",fontSize:"18px !important"}}><strong>{this.state.skipIt}</strong></span>
                                         </div>
                                         <div style={{width:"90px"}}>
                                            <span style={{fontSize:"10px",textJustify:"left"}}><strong>Cats you skipped</strong></span>
                                         </div>
                                    </Col>
                                </Row>
                        </Col>
                        <Col  md="4">
                                <Row className="resultDiv row">
                                    <Col style={{textAlign:"left"}}>
                                        <Image style={{paddingTop:"15px",paddingBottom:"10px"}} src={process.env.PUBLIC_URL + '/assets/Pet.svg'} />
                                    </Col>
                                    <Col style={{textAlign:"right"}}>
                                         <div style={{textAlign:"right"}}>
                                            <span style={{color:"#10B981",fontSize:"18px !important"}}><strong>{this.state.petIt}</strong></span>
                                         </div>
                                         <div style={{width:"90px"}}>
                                            <span style={{fontSize:"10px",textJustify:"left"}}><strong>Cats you petted</strong></span>
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
                            <Button size="lg" className="buttons" onClick={() => this.restartSameCategory()} style={{backgroundColor:"#F28700",color:"white",borderColor:"#F28700"}}>RESTART IN SAME CATEGORY</Button>{' '}
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col>
                            <Button variant="outline-dark" size="lg" className="buttons" onClick={() => window.location.reload(false)}>SELECT NEW CATEGORY</Button>{' '}
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
                                     <Image className="categoryViewImage" src={this.state.imageUrlList[this.state.nextImage]} thumbnail/>
                            </div>
                         <div className="categoryView">
                         <span style={{color:"gray",fontSize:"10px"}}> {this.state.nextImage + 1}/{this.state.imageUrlList.length}</span>
                            <br/>
                             <Row>
                                 <Col>
                                     <Image src={process.env.PUBLIC_URL + '/assets/DontPet.svg'} onClick={() => this.dontPetIt()}/>
                                     <br/>
                                     <span style={{color:"#EF4444",fontSize:"10px"}}> Don't pet it!</span>
                                     
                                </Col>
                                <Col>
                                     <Image src={process.env.PUBLIC_URL + '/assets/Skip.svg'} onClick={() => this.skipIt()}/>
                                     <br/>
                                     <span style={{color:"gray",fontSize:"10px"}}>Skip it!</span>
                                </Col>
                                <Col>
                                     <Image src={process.env.PUBLIC_URL + '/assets/Pet.svg'} onClick={() => this.petIt()}/>
                                     <br/>
                                     <span style={{color:"#10B981",fontSize:"10px"}}>Pet it!</span>
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
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system'
import './card.css'




class Card extends Component{
    constructor(props){
    super(props)

this.state={
    name:"********",
    title:"Company name",
    date:"****-**",
    number:"**** **** **** ****",
    
}
    }
handleChangeName =(e)=>{
    this.setState({
      name:e.target.value.toUpperCase()
    })
}


handleChangeNumber =(event)=>{
    this.setState({
      number:event.target.value.replace(/(.{4})/g,"$1 ")
    })
}
handleChangeDate =(d)=>{
    this.setState({
      date:d.target.value
    })
    
    }

    // replace(/(.{2})/g,"$1/")




    render(){
    return(
        <Container>
        <div>
        <div className="card">
            <Container>
                <Row>
                    <Col sm={4}></Col>
                    <Col sm={8}><h1>{this.state.title}</h1></Col>
                </Row>
                <Row>
                    <Col sm={2}>
                    <img src="https://t4.ftcdn.net/jpg/00/63/97/01/240_F_63970103_dXdz645GQ9DjenhJOti1eEvsFZY8gucA.jpg" width="70px"/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={10}>
                    <h2 className="cardnumber">{this.state.number}</h2>
                    </Col>
                    <Col sm={2}></Col>

                </Row>
                <Row><Col sm={2}></Col>
                <Col sm={10}>valid thru :<h3 className="cardholder2">{this.state.date}</h3></Col>
                </Row>
                <Row>
                <Col sm={5}><div className="cardholder"><h4>{this.state.name}</h4></div></Col>
                <Col sm={3}></Col>
                <Col sm={4}><img src="https://img.bfmtv.com/c/630/420/576/fe57f1a905126fdcb0bfafe447b3f.png" width="80px"/></Col>
                
                </Row>
                <Row>
                    
                    <Col sm={2}></Col>
                </Row>
            </Container>
           </div>
           
               <form>
               <input type="text" maxLength="16" placeholder="Card Number" onChange={this.handleChangeNumber}/><br/>
               <input type="text" maxLength="20" placeholder="Name"  onChange={this.handleChangeName}/><br/>
               <input type="month"  placeholder="Valid thru"  onChange={this.handleChangeDate}/><br/>
               
               </form>
               
               
           

        </div>

        </Container>
    );
}}
export default Card;
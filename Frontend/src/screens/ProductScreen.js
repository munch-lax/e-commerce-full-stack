import React, { Component,useState,useEffect } from 'react'
import { Image, Row,Col, ListGroup, ListGroupItem, Card, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Rating from './Rating'

import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions'
import Loader from '../components/loader'


const ProductScreen = ({match,history}) => {
    const[qty,setqty]=useState(1)
    const dispatch=useDispatch()
    const productDetails=useSelector(state=>state.productDetails)
    console.log(productDetails)
    const{loading,error,product}=productDetails
    
    useEffect(()=>{
        dispatch(listProductDetails(match.params.id))

    },[])



    const addtocarthandler=()=>{
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }




    
    return (
        <div>
            
            <Link to='/' className='btn btn-light mg-3'>Go Back</Link>
            {loading ? <Loader/> :error?<h3>error</h3>:
            
            (<Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush" >
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h4>Price : ${product.price}</h4>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <p>Description : {product.description}</p>
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                        <strong>${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                        {product.countInStock>0 ? "In Stock":"Out of stock"}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                {product.countInStock>0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                            QTY
                                            </Col>
                                            <Col xs='auto' className='my=1'>
                                            <Form.Control as='select' value={qty} onChange={(e)=>setqty(e.target.value)}>
                                                <option key={1} value={1}>1</option>
                                                <option key={2} value={2}>2</option>
                                                <option key={3} value={3}>3</option>
                                                <option key={4} value={4}>4</option>
                                            </Form.Control>
                                            </Col>


                                        </Row>
                                        </ListGroup.Item>
                                )}




                                <ListGroup.Item>
                                    <Button onClick={addtocarthandler} className='btn-block' disabled={product.countInStock===0}>Add to Cart</Button>
                                </ListGroup.Item>
                            </ListGroup>

                        </Card>
                    </Col>
            
            </Row>)
}

        </div>
    )
}

export default ProductScreen

import React, { Component ,useState,useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions';
import Loader from '../components/loader';


import Product from './Product';

function HomeScreen() {
    const  dispatch = useDispatch(listProducts)
    const productlist=useSelector(state=>state.productList)
    const {error,loading,products}=productlist
    useEffect(()=>{
        dispatch(listProducts())
    
    },[])

    
    
        return (
            <div>
               <h1> Latest Products</h1>
               {loading?<Loader/>:error?<h3>error</h3>:
               
            
               <Row>
                   {products.map(product=>(
                       
                       <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                       <Product product={product}/>
                       
                       </Col>
                   ))}
               </Row>
                }
            </div>

                   
        )
    }


export default HomeScreen


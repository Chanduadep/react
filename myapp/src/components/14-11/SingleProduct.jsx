import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '..'
import toast from 'react-hot-toast';

const SingleProduct = () => {
    const {productId}=useParams();
    const [productData,setProductData]=useState({})
    const getSingleProductData = async ()=>{
        try{
            const response=await api.post(`/product//single-product/${productId}`)
            if(response.data.success){
                setProductData(response.data.productData)
            }
        }
        catch(error){
            toast.error(error?.response?.data.message)
        }
       };
    
    useEffect(()=>{
        if(productId){
            getSingleProductData()
        }
    },[productId])
  return (
    <div> <div style={{
        width: "20%",
        height: "450px",
        border: "1px solid black",
        marginBottom: "10px",
        margin:"auto",
        
    }}
        >
        <img style={{ width: "100%", height: "7 0%" }} src={productData.image} />
        <h2>Name:{productData.name}</h2>
        <h3>Price:{productData.price}</h3>
        <h3>Size:{productData.category}</h3>
    </div></div>
  )
}

export default SingleProduct
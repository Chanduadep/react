import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

const AllProducts = () => {
    const [products,setProducts]=useState([]);
    async function getAllProducts(){
        try{
            const response= await axios.get("https://fakestoreapi.com/products");
            setProducts(response?.data);

        }catch(error){
            toast.error(error)
        }
    }
    useEffect(()=>{
         // toast("Welcome");
    // api call -> return products
    // getAllProducts();
    },[]);
  return (
    <div>
         <div>
      {products?.length ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {products.map((product) => (
            <div
              style={{
                width: "18%",
                height: "450px",
                border: "2px solid black",
                marginBottom: "20px",
              }}
            >
              <img
                style={{ width: "100%", height: "60%" }}
                src={product.image}
                alt={product.name}
              />
              <h2>Name {product.title}</h2>
              <h3>Price {product.price}</h3>
              <h3>Size {product.category}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
          <button onClick={() => getAllProducts()}>Get products</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default AllProducts
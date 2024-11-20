import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import api from '..'
import { useNavigate } from 'react-router-dom'

const ViewProducts = () => {
    const router = useNavigate()
    const [allProducts, setAllProducts] = useState([]);
    async function getProducts() {
        try {
            const response = await api.get("/product/view-products")
            if (response.data.success) {
                setAllProducts(response.data.allProducts)
            }
        }
        catch (error) {
            toast.error(error?.response?.data.message)
        }
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
            <h1>Products</h1>
            <div style={{
                width: "100% ",
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                cursor: "pointer"
            }}>

                {allProducts.map((ItemDetails) => (
                    <div style={{
                        width: "18%",
                        height: "450px",
                        border: "1px solid black",
                        marginBottom: "15px",
                    }}
                        onClick={() => router(`/product/${ItemDetails._id}`)}>
                        <img style={{ width: "100%", height: "60%" }} src={ItemDetails.image} />
                        <h2>Name:{ItemDetails.name}</h2>
                        <h3>Price:{ItemDetails.price}</h3>
                        <h3>Size:{ItemDetails.category}</h3>
                    </div>
                )
                )}
            </div></div>
    )
}

export default ViewProducts
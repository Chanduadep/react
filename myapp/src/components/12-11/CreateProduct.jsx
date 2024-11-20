
import { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useRevalidator } from "react-router-dom";
import api from "..";
import { AuthContext } from "../Context/AuthContext";


function CreateProduct() {
    const {state}=useContext(AuthContext)
  const router=useNavigate()
  const [productData, setProductData] = useState({
    productName: "",
    productCategory: "",
    productPrice: "",
    productQuantity: "",
    productImage:"",
  });
 
  console.log(productData, "userData");
  function handleChange(event) {
    // console.log(event.target.value, event.target.productName, "check");
    setProductData({ ...productData, [event.target.name]: event.target.value });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("State before submission:", state);
    if(!state?.user?.userId){
        toast.error("Please Login First")
        router("/login");
        return;
    }
    if(productData.productName && productData.productCategory&&productData.productPrice && productData.productQuantity && productData.productImage)
      {
    try {   
      let response=await api.post("/product/create-product",{productData,userId:state?.user?.userId,});
      console.log(response);
      if (response.data.success) {
        toast.success(response.data.message);
        router('/view-products');
      }else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred";
      toast.error(errorMessage);
    }
  }else{
    toast.error("All fields are required")
  }
  }
// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8000/api/v1/product/create-product', productData);
//       if (response.data.success) {
//         toast.success('Product added successfully!');
//         setProductData({ productCategory: '', productName: '', productPrice: '', productImage: '', productQuantity: '' });
//         // After success set fields to empty again
//       } else {
//         toast.error('Failed to add product');
//       }
//     } catch (error) {
//       toast.error(error.response?.data.message || 'An error occurred while adding the product');
//     }
//   };

  return (

    <div className="parentdiv">
      <div className="regi">
        <h1>Create New Product</h1>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Product Name</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Type your productname.."
            name="productName"
          />
          <br />
          <label>productCategory</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Type your productcategory.."
            name="productCategory"
          />
          <br />
          <label>productPrice </label>
          <br />
          <input
            onChange={handleChange}
            type="number"
            placeholder="Type your productPrice.."
            name="productPrice"
          />
          <br />
          <label>productQuantity </label>
          <br />
          <input
            onChange={handleChange}
            type="number"
            placeholder="product quantity.."
            name="productQuantity"
          />
          <br />
          <label>Image</label>
          <br />
          <input
            onChange={handleChange}
            type="url"
            placeholder="enter yout ProductImage url.."
            name="productImage"
          />
          <input className="button" type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
}
export default CreateProduct;

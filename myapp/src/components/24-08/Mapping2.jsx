import React from "react";
import { useState } from "react";
const Mapping2 = () => {
    const [products, setProducts] = useState([{
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26409250/2023/12/14/4510cf28-2187-4df7-a749-5837fcc74f071702494714042ModaRapidoMenGreenSlimFitStripedCasualShirt6.jpg",
    }, {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14641482/2021/11/9/a21156d3-5c60-44eb-8b80-e7a7f4f516be1636459816198ShortsWROGNMenTrackPantsWROGNMenTrackPantsWROGNMenJeansRoads1.jpg",
    }, {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24681544/2023/8/27/d570db49-94d1-4cc1-996a-b1c40d28a7561693149944837PowerlookMenGreyTartanChecksOpaqueCheckedCasualShirt1.jpg",
    },
    {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20421124/2022/10/17/2dd1cc94-8bed-4f0f-8c95-a785a9910a3c1665981279300HERENOWMenMulticolouredSlimFitPrintedCasualShirt1.jpg",
    },
    {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18288844/2022/8/11/e798a5bd-341e-498c-b691-d9151308135c1660203763650-Roadster-Men-Shirts-8561660203763006-1.jpg",
    },
    {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2391102/2018/6/11/ce488828-c620-4560-8591-d55bdf2095581528712986956-Harvard-Men-Yellow--Blue-Slim-Fit-Checked-Casual-Shirt-52152-1.jpg",
    },
    {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1358818/2021/10/1/ea6871f9-cb17-4de4-84d8-066e730743ca1633071065715-Roadster-Men-Blue-Denim-Washed-Casual-Shirt-7111633071065153-1.jpg",
    },
    {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20226196/2022/9/30/89576540-752a-4d4d-87de-8762cce4d78c1664488764931Shirts5.jpg",
    },
    {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21472036/2023/1/9/8f34cc68-2023-4a86-b7fd-17b52041e0491673259824002Shirts1.jpg",
    },
    {
        name: "Tsihrt",
        Prize: 800,
        Size: "M",
        Image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28086692/2024/7/17/fa362fba-e329-4672-8598-15b5f0e855731721202838804-HIGHLANDER-Men-Slim-Fit-Tartan-Checks-Opaque-Checked-Casual--7.jpg",
    },
   ])
    return (
        <div>
            <h1>Products</h1>
        <div style={{
            width:"100% ",
            display:"flex",
            justifyContent:"space-around",
            flexWrap:"wrap",}}>
            
            {products.map((ItemDetails)=>(
                <div style={{width:"18%",
                    height:"450px",
                    border:"1px solid black",
                    marginBottom:"15px",
                }}>
                    <img style={{width:"100%",height:"60%"}} src={ItemDetails.Image}/>
                    <h2>Name:{ItemDetails.name}</h2>
                    <h3>Prize:{ItemDetails.Prize}</h3>
                    <h3>Size:{ItemDetails.Size}</h3>
                </div>
            )
        )}
        </div>
        </div>
    )
}
export default Mapping2;
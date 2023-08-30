import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
// import {Link} from 'react-router-dom';
export default function ProductDetails(){
    const params = useParams()
    // console.log(params.productID)
    const ID = params.productID ;
    const [productDetails ,setproductDetails ] = useState([]);
    const getProductData = () =>{
        fetch(`https://fakestoreapi.com/products/${ID}`)
        .then((Response) =>Response.json())
        .then((data) => 
        {
            // console.log(data);
            setproductDetails ( data );
        })
    }

    useEffect(() =>{
        getProductData()
    })
    return(
        <div className='container mt-5 pt-3'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='pro-img'>
                        <img src={productDetails.image}  alt={productDetails.title}/>
                    </div>
                </div>
                <div className='col-md-8'>
                    <h4>{productDetails.title}</h4>
                    <p>{productDetails.description}</p>
                    <span className='alert alert-success'> {productDetails.price} LE</span>
                    <p>Category : {productDetails.category}</p>
                </div>
            </div>
        </div>
    )
}
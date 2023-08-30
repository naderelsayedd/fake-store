import { useState } from "react";
import { useEffect } from "react"
import Product from "./Product";
import Category_Bar from './Category_Bar';
import Slider from './Slider';

export default function Home(){
    const [products , setProducts] = useState([]);

    // get all products 
    const getProducts = () =>{
        fetch('https://fakestoreapi.com/products')
        .then((Response) =>Response.json())
        .then((data) =>{
            setProducts(data);
            // console.log(typeof(data));
        })
    } ;

 

    useEffect(() =>{
        getProducts() ;
    } , []);


    return(
        
        <div>
        <Slider />
            <div className="container">
               {/* <Category_Bar category = {categories}/> */}
                <div className="row mt-5 pt-5">
                    {
                        products.map((product)   =>{
                            return(
                                <div className="col-md-4" key={product.id}>
                                    <Product product={product}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
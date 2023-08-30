import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Category_Bar(category){
    console.log(category)
    const [categories  , setCategories] = useState([]);
    const getAllCategories = () =>{
        fetch("https://fakestoreapi.com/products/categories") 
        .then((Response) => Response.json())
        .then((data) =>{
            // console.log(data);
            setCategories(data);
        });
    }
    useEffect(() =>{
        getAllCategories();
    } , []) ;

    const catFilter =(cat) =>{
        fetch(`https://fakestoreapi.com/products/category/${cat}`)
        .then((Response) =>Response.json())
        .then((data) =>{
            
        })
    }
    return(
        <div className="category-bar text-center mt-5">
            {
                categories.map((cat) =>{
                    return(
                        <Link className="btn btn-info m-3" key={cat} onClick={() =>catFilter(cat)}>{cat}</Link>
                    )
                })
            }
        </div>
    )
}